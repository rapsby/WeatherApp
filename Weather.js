import React,  {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {LinearGradient} from "expo";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {Ionicons} from "@expo/vector-icons";
import PropTypes from "prop-types";
/*  https://expo.github.io/vector-icons/ */
/*
const weatherCases = {
   Rain:{
      colors:["#00C6FB", "#005BEA"],
      title: "Rainging",
      subtitle: "For more info look outside",
      icon: 'weather-pouring'
   },
   Clear:{
      colors:["#ffe437", "#ff7502"],
      title: "Sunny",
      subtitle: "Get sunshine",
      icon: 'weather-sunny'
   },
   Thunderstorm:{
      colors:["#00ceb2", "#006bdd"],
      title: "Thunderstorm",
      subtitle: "Hide on your bed",
      icon: 'weather-lightning'
   },
   Clouds:{
      colors:["#ccc6c1", "#2f3d4d"],
      title: "Clouds",
      subtitle: "What a clouds",
      icon: 'weather-cloudy'
   },
   Snow:{
      colors:["#66d1fe", "#adb1e4"],
      title: "Snow",
      subtitle: "Make a snowman",
      icon: 'weather-snowy'
   },
   Drizzle:{
      colors:["#6ce7ff", "#529afd"],
      title: "Drizzle",
      subtitle: "Rain, rain, small rain",
      icon: 'weather-hail'
   },
   Haze:{
      colors:["#6ce7ff", "#529afd"],
      title: "Haze",
      subtitle: "Rain, rain, small rain",
      icon: 'weather-fog'
   },
   default:{
      colors:["#6ce7ff", "#529afd"],
      title: "Haze",
      subtitle: "Rain, rain, small rain",
      icon: 'weather-fog'
   }
}
*/
function Weather({weatherName, temp, location, description, icon, id}){
   console.log(temp2RGB(temp))
   return(
      <LinearGradient 
      colors={temp2RGB(temp)}
      style={styles.container}
      >
      <View style={styles.upper}>
         <Image
         source={{uri: `http://openweathermap.org/img/w/${icon}.png`}}
         style={styles.img}
         />
         <Text style={styles.temp}>{temp}º</Text>
         <Text style={styles.temp}>{location}</Text>
      </View>
      <View style={styles.lower}>
         <Text style={styles.title}>{weatherName}</Text>
         <Text style={styles.subtitle}>{description}</Text>
      </View>
      </LinearGradient>
   );
}
temp2RGB = (temp) => {
   var rgb1, rgb2;
   if(temp > 17 )
   {
      rgb1 = 
      (255).toString(16)+
      zfill((255-Math.floor((temp/60)*255)))+
      zfill((255-Math.floor((temp/60)*255)));
      rgb2 = 
      (255).toString(16)+
      zfill((255-Math.floor(((temp/60)*255)/3)))+
      zfill((255-Math.floor(((temp/60)*255)/3)));
   }
   else
   {
      temp += 50; // minimum -50
      rgb1 = 
      zfill((Math.floor(((temp/67)*255)/3)))+
      zfill((Math.floor(((temp/67)*255)/3)))+
      (255).toString(16);
      rgb2 =
      zfill((Math.floor((temp/67)*255)))+
      zfill((Math.floor((temp/67)*255)))+
      (255).toString(16);

   }
   return ["#"+rgb2, "#"+rgb1];
}
zfill = (number) => {
   var output = number.toString(16);
   while(output.length < 2) {
     output = '0' + output;
   }
   return output;
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
      backgroundColor: "transparent",
      marginTop: 50
   },
   img: {
      flex:1,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor: "transparent",
      marginTop: 50,
      width: 200, 
      height: 200
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