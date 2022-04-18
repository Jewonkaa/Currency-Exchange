import React from 'react';
import { Text, StyleSheet} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function HomeScreen() {
  return (
    <Text style={styles.baseText}>
      Witaj w Przeliczniku Walut
     
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
   marginTop: 200,
    fontWeight: 'bold',
    textAlign:"center",
    fontSize:30,
  },
});

export default HomeScreen;