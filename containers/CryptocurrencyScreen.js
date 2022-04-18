import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput} from "react-native";
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const CryptocurrencyScreen= () => {
  const [selectedValue, setSelectedValue] = useState("java");
    const [number, onChangeNumber] = React.useState(null);
    const [number1, onChangeNumber1] = React.useState(null);
  return (
    <View style={styles.container}>

      <View style = {styles.textContainer}>
        <Text>
          FROM
        </Text>

        <Text>
           TO
        </Text>

      </View>
      
       <View style={styles.pickerContainer}>
      <Picker 
        selectedValue={selectedValue}
        style={styles.tabela }
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="PLN" value="pln" />
        <Picker.Item label="EURO" value="euro" />
      </Picker>

      <Picker 
        selectedValue={selectedValue}
        style={styles.tabela}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="PLN" value="pln1" />
        <Picker.Item label="EURO" value="euro2" />
      </Picker>
      </View>

      <View style={styles.kwota}> 
      
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="kwota"
        keyboardType="numeric"
      />
      
      <TextInput
      style={styles.input}
      onChangeText={onChangeNumber1}
      value={number1}
      placeholder="kwota"
      keyboardType="numeric1"
    />
      </View>

    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start"
  
  },
  tabela:{
  
    height: 30, 
    width: 150,
  },
  textContainer:{
    paddingLeft:10,
    paddingRight:120,
    height: 30,
    width: "75%",
    justifyContent:'space-between',
    flexDirection:'row',
    
  },
  pickerContainer:{
    
    width: "75%",
    height:50,
    alignItems: "flex-start",
    flexDirection:"row",
    justifyContent: "center",
  },
  input: {
    width: 150,
    height: 40,
    borderWidth: 1,
    paddingLeft:10,
  },

  kwota:{
    flex:1,
    width: "70%",
    flexDirection:"row",
    justifyContent: "center",
    margin: 5,
    
  },

 
});

export default CryptocurrencyScreen;