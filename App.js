import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './containers/HomeScreen';
import ConverterScreen from './containers/ConverterScreen';
import ShortenNameScreen from './containers/ShortenNameScreen';
import CryptocurrencyScreen from './containers/CryptocurrencyScreen';



const Drawer = createDrawerNavigator();

function App() {
  

  return (
    <NavigationContainer>{
      (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Converter" component={ConverterScreen} />
          <Drawer.Screen name="Shorten Name" component={ShortenNameScreen} />
          <Drawer.Screen name="Cryptocurrency" component={CryptocurrencyScreen} />
        </Drawer.Navigator>
      ) }
    </NavigationContainer>
  );
}

export default App;
