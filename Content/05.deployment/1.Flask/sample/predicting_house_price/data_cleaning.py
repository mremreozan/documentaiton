import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

class StandardCleaningDataFrame:
    def __init__(self):
        # import csv file as a dataframe
        self.df = pd.read_csv('predicting_house_price/datasets/Final.csv', index_col=0)
        self.df = self.df.drop(self.df[self.df['rooms_number'] > 20].index)
        self.df = self.df.drop(self.df[self.df['area'] > 1200].index)
        self.df = self.df.drop(self.df[self.df['terrace_area'] > 250].index)
        self.df = self.df.drop(self.df[self.df['garden_area'] > 7000].index)
        self.df = self.df.drop(self.df[self.df['price'] > 1000000].index)
        self.df = self.df.drop(self.df[self.df['land_surface'] > 20000].index)
        self.df = self.df[(self.df.property_subtype=='HOUSE') | (self.df.property_subtype=='APARTMENT') | (self.df.property_subtype=='VILLA') | (self.df.property_subtype=='APARTMENT_BLOCK') | (self.df.property_subtype=='MIX_USE_BUILDING')]
        



