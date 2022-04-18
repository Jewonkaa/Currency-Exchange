import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';

const ShortenNameScreen= () => {
  const [text, onChangeText] = React.useState("Enter country");
  

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textAlign:"center",
    
  },
});

export default ShortenNameScreen;