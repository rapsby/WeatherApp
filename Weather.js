import React,  {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {LinearGradient} from "expo";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import PropTypes from "prop-types";
/*  https://expo.github.io/vector-icons/ */

const weatherCases = {
   Rain:{
      colors:["#00C6FB", "#005BEA"],
      title: "Rainging",
      subtitle: "For more info look outside",
      icon: 'ios-rainy'
   },
   Clear:{
      colors:["#ffe437", "#ff7502"],
      title: "Sunny",
      subtitle: "Get sunshine",
      icon: 'ios-sunny'
   },
   Thunderstorm:{
      colors:["#00ceb2", "#006bdd"],
      title: "Thunderstorm",
      subtitle: "Hide on your bed",
      icon: 'ios-thunderstorm'
   },
   Clouds:{
      colors:["#ccc6c1", "#2f3d4d"],
      title: "Clouds",
      subtitle: "What a clouds",
      icon: 'ios-cloudy'
   },
   Snow:{
      colors:["#66d1fe", "#adb1e4"],
      title: "Snow",
      subtitle: "Make a snowman",
      icon: 'ios-snow'
   },
   Drizzle:{
      colors:["#6ce7ff", "#529afd"],
      title: "Drizzle",
      subtitle: "Rain, rain, small rain",
      icon: 'cloud-drizzle'
   },
   Haze:{
      colors:["#6ce7ff", "#529afd"],
      title: "Haze",
      subtitle: "Rain, rain, small rain",
      icon: 'weather-fog'
   }
}

function Weather({weatherName, temp}){
   return(
      weatherName = "Haze",
      <LinearGradient 
      colors={weatherCases[weatherName].colors}
      style={styles.container}
      >
      <View style={styles.upper}>
         <MaterialCommunityIcons 
         color="white" 
         size={144} 
         name={weatherCases[weatherName].icon} 
         />           
         <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={styles.lower}>
         <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
         <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
      </View>
      </LinearGradient>
   );
}

Weather.propTypes = {
   temp: PropTypes.number.isRequired,
   weatherName: PropTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
   container: {
      flex: 1
   },
   upper: {
      flex:1,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor: "transparent"
   },
   temp: {
      fontSize: 48,
      backgroundColor: "transparent",
      color: "white",
      marginTop: 10,
   },
   lower: {
      flex:1,
      alignItems:"flex-start",
      justifyContent:"flex-end",
      paddingLeft:25,
   },
   title: {
      fontSize: 38,
      backgroundColor: "transparent",
      color: "white",
      marginBottom: 10,
      fontWeight: "300"
   },
   subtitle:{
      fontSize: 24,
      backgroundColor: "transparent",
      color: "white",
      marginBottom: 24
   }
})