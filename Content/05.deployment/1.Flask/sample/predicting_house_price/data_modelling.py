import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.preprocessing import LabelEncoder
		# for normalization
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split
from sklearn.ensemble import GradientBoostingRegressor
# Import the necessary modules
from sklearn.model_selection import cross_val_score
from sklearn.linear_model import LinearRegression


class DataModel:
    def __init__(self, df):
        self.df = df
        self.test_columns = self.df.drop(['price'], axis=1).columns
        self.df = self.feature_engineering(self.df)
        self.X ,self.y, self.X_train, self.X_test, self.y_train, self.y_test = self.data_formatting()
        self.GBoost = self.data_modelling_Gboost()
        self.LinearReg = self.data_modelling_Linear()

    def feature_engineering(self, df):
        df = self.create_dummy(df)
        df = self.convert_categorical_into_num(df)
        #df = self.create_binary(df)
        df = self.postcodeband(df)
        #df = self.construction_years_band(df)
        df = self.standardization(df)
        return df

    # Create Dummies for categorical data
    def create_dummy(self, df):
        def dummy(col, df):
            col_enc = pd.get_dummies(df[col])
            df = pd.concat([df, col_enc], axis=1)   
            df.drop([col], axis=1, inplace=True)
            return df

        df = dummy('property_subtype', df)
        df = dummy('region', df)
        df = dummy('building_state_agg', df)
        #df = dummy('Heating_Type', df)
        return df

    #Convert categorical data into numbers
    def convert_categorical_into_num(self, df):
        self.province_dict = dict(zip(df.province.unique(), range(1, len(df.province.unique())+1)))
        df.province = df.province.map(self.province_dict)
        #self.district_dict = dict(zip(df.district.unique(), range(1,len(df.district.unique()+1))))
        #df.district = district.map(self.district_dict)
        return df

    # Create a new column postcodeband from postcode
    def postcodeband(self, df):
        post = df[['postcode', 'area', 'price']].groupby(['postcode'], as_index=False).mean()
        post['m2_price'] = post['price'] / post['area']
        post.sort_values(by='m2_price', inplace=True)
        n, bins, patches = plt.hist(post.m2_price, 40, density=True, facecolor='g', alpha=0.75)
        for i in range(len(bins)):
            if i == 40:
                post.loc[(post.m2_price >= bins[i]), 'postcodeband'] = i
                break
            post.loc[(post.m2_price >= bins[i]) & (post.m2_price < bins[i+1]), 'postcodeband'] = i+1
        self.postdict = dict(zip(post.postcode, post.postcodeband))
        df['postcodeband'] = df.postcode.map(self.postdict)
        df.drop(['postcode'], axis=1, inplace=True)
        return df

    def standardization(self, df):

        # Create the scaler
        min_max_scaler = MinMaxScaler()

        # Take a subset of the DataFrame you want to scale 
        df_subset = df[['area', 'terrace_area', 'garden_area', 'land_surface']]

        # Apply the scaler to the DataFrame subset
        df[['area', 'terrace_area', 'garden_area', 'land_surface']] = min_max_scaler.fit_transform(df_subset)
        return df

    ## Data Formatting
    def data_formatting(self):
        X = self.df.drop(['price'], axis=1).values
        y = self.df['price'].values
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)
        return X ,y, X_train, X_test, y_train, y_test

    ## Data Modelling
    def data_modelling_Gboost(self):
        GBoost = GradientBoostingRegressor(n_estimators=3000, learning_rate=0.05,
                                   max_depth=4, max_features='sqrt',
                                   min_samples_leaf=15, min_samples_split=10, 
                                   loss='huber', random_state =5)

        GBoost.fit(self.X_train, self.y_train)
        return GBoost

    def data_modelling_Linear(self):
        lnr = LinearRegression()

        lnr.fit(self.X_train, self.y_train)
        return lnr

    def cv_score(self, model):
        # Compute 5-fold cross-validation scores: cv_scores
        cv_scores = cross_val_score(model, self.X, self.y, cv=5)

        cv_score_mean = np.mean(cv_scores)

        return print(f"Cross Validation Scores: {cv_scores}, Mean: {cv_score_mean}")

    def r2_score(self, model):

        train_r2_score = model.score(self.X_train, self.y_train)
        test_r2_score = GBoost.score(self.X_test, self.y_test)
        return print(f"train r2 score: {train_r2_score}, test_r2_score: {test_r2_score}")
    
    def X_transform(self, X_test_new):
        df_new = pd.DataFrame(X_test_new, columns=self.test_columns)
        
        df_new.province = df_new.province.map(self.province_dict)
        df_new[['APARTMENT', 'APARTMENT_BLOCK', 'HOUSE', 'VILLA', 'Bruxelles-Capitale',
               'Flanders', 'Wallonie', 'good', 'renovated', 'to_renovate']] = 0
        df_new.postcode = df_new.postcode.astype('int64')
        df_new['postcodeband'] = df_new.postcode.map(self.postdict)
        col1 = df_new['property_subtype'][0]
        col2 = df_new['region'][0]
        col3 = df_new['building_state_agg'][0]
        df_new[col1] = 1
        df_new[col2] = 1
        df_new[col3] = 1
        df_new.drop(['property_subtype', 'region', 'building_state_agg', 'postcode'], axis=1, inplace=True)
        df_new = df_new.astype('float64')
        return df_new.values