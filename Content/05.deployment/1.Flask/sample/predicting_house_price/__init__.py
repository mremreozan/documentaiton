from flask import Flask, request
import random
from . import data_modelling 
import numpy as np
from . import data_cleaning
import pandas as pds


# create and configure the app
app = Flask(__name__)

# a simple page that says hello
@app.route('/status')
def index():
    return 'Alive!'

@app.route('/prediction', methods=('POST', 'GET'))
def pred():
    
    if request.method == 'POST':
        region = request.form.get('region')
        province = request.form.get('province')
        postcode = request.form.get('postcode')
        house_is = request.form.get('house_is')
        property_subtype = request.form.get('property_subtype')
        rooms_number = request.form.get('rooms_number')       
        area = request.form.get('area')
        equipped_kitchen_has = request.form.get('equipped_kitchen_has')
        open_fire = request.form.get('open_fire')
        terrace = request.form.get('terrace')
        terrace_area = request.form.get('terrace_area')
        garden = request.form.get('garden')
        garden_area = request.form.get('garden_area')
        land_surface = request.form.get('land_surface')
        swimming_pool_has = request.form.get('swimming_pool_has')        
        building_state_agg = request.form.get('building_state_agg')

        cleaning = data_cleaning.StandardCleaningDataFrame()
        df = cleaning.df

        model = data_modelling.DataModel(df)

        X_test = np.array([[postcode, region, province, house_is, property_subtype, rooms_number, area, 
                            equipped_kitchen_has, open_fire, terrace, terrace_area, garden, garden_area, 
                            land_surface, swimming_pool_has, building_state_agg]])

        X_test = model.X_transform(X_test)

        y_pred = model.GBoost.predict(X_test)
        y_pred = str(y_pred)

        return f"{y_pred}"
   # if not username or not password:
    else:
        return '''<form method='post'>
                    <input type='text' name='region' placeholder='Enter Your region'>
                    <input type='text' name='province' placeholder='Enter Your province'>
                    <input type='text' name='postcode' placeholder='Enter Your postcode'>
                    <input type='text' name='house_is' placeholder='Enter Your house_is'>
                    <input type='text' name='property_subtype' placeholder='Enter Your property_subtype'>
                    <input type='text' name='rooms_number' placeholder='Enter Your rooms_number'>
                    <input type='text' name='area' placeholder='Enter Your area'>
                    <input type='text' name='equipped_kitchen_has' placeholder='Enter Your equipped_kitchen_has'>
                    <input type='text' name='open_fire' placeholder='Enter Your open_fire'>
                    <input type='text' name='terrace' placeholder='Enter Your terrace'>
                    <input type='text' name='terrace_area' placeholder='Enter Your terrace_area'>
                    <input type='text' name='garden' placeholder='Enter Your garden'>
                    <input type='text' name='garden_area' placeholder='Enter Your garden_area'>
                    <input type='text' name='land_surface' placeholder='Enter Your land_surface'>
                    <input type='text' name='swimming_pool_has' placeholder='Enter Your swimming_pool_has'>
                    <input type='text' name='building_state_agg' placeholder='Enter Your building_state_agg'>
                    <button>Submit</button>
                </form>'''

