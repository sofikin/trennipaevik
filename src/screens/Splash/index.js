import React from 'react';
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

const Splash = () => {

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/hantel-01 4.png')}/>
      <Text style={styles.title} >TRENNIPÄEVIK</Text>
    </View>
  );
};

export default Splash;
