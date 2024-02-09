import React, { useState } from 'react';
import WheelPicker from 'react-native-wheely';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import Icon2 from  'react-native-vector-icons/MaterialIcons'
import Booking from './Booking';
import { SelectPassengersNavigationProps, SelectPassengersProps } from 'rutes/RootStackParamList';

import { saveInfo } from '../../firebaseConfig';

interface SelectPassengers{
  route:SelectPassengersProps;
  navigation:SelectPassengersNavigationProps;
}
const SelectPassengersScreen: React.FC<SelectPassengers> = ({route,navigation}) => {
    const [selectedPassengers, setSelectedPassengers] = useState<number>(0);
    const from = route?.params?.from
    const to = route?.params?.to
    const date = route.params.date 
    const fromIso3 = route?.params?.fromIso3
    const toIso3 = route?.params?.toIso3
    
    
    const handleNavigate = () => {

      saveInfo(from,fromIso3,toIso3,to,date,selectedPassengers+1)

      navigation.navigate("RequestReceived",{from:from,to:to,date:date,toIso3:toIso3,fromIso3:fromIso3,passangers:selectedPassengers})
    }
    

    const passengersOptions: string[] = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12"
  ];

    const handlePassengerChange = (index: string) => {
      setSelectedPassengers(parseInt(passengersOptions[index]));
    };
    return (
        
        <View style={styles.container}>
          <View style={styles.icon}>
                <Icon2 style={styles.arrow} name ="arrow-back-ios" size={30} color="rgb(92, 110, 248)" onPress={() => navigation.goBack()}></Icon2>
                <Booking from={from} to={to} toIso3={toIso3} fromIso3={fromIso3}  date={date}/> 
          </View>
            <Text style={styles.title}>How many passengers?</Text>
            <View style={{flex:3}}>
              <Icon style={styles.caretleft} name ="caretleft" size={20} color="rgb(92, 110, 248)"></Icon>
              <Icon style={styles.caretright} name ="caretright" size={20} color="rgb(92, 110, 248)"></Icon>
              
              <WheelPicker
              options={passengersOptions}
              selectedIndex={selectedPassengers}
              onChange={handlePassengerChange}
              itemStyle={styles.wheelPicker}
              itemTextStyle={styles.wheelPickerText}
              containerStyle={styles.wheelPickerContainer}
              selectedIndicatorStyle={styles.selectedIndicator}
              /> 
            </View>
            
            <View>
              <TouchableOpacity style={styles.btnStyle} onPress={handleNavigate}>
                  <Text style={styles.btnText}>Next</Text>
              </TouchableOpacity>
            </View>
        </View>
      );
}

// Estilos
const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      padding:10
    },

    arrow:{
      marginLeft:14,
    },
    btnStyle: {
      alignSelf:'center',
      backgroundColor: "rgb(92, 110, 248)",
      borderRadius: 10,
      marginBottom: 50,
      marginTop: 10,
      padding: 12,
      shadowOffset: {
        width: 0,
        height: 11,
      },
      shadowOpacity: 0.57,
      shadowRadius: 15.19,
      elevation: 23,
      shadowColor: "rgb(92, 110, 248)",
      width: "92%",
    },
    title: {
      fontWeight:"bold",
      fontSize:43,
      justifyContent:"flex-start",
      marginLeft:14,
    },
    wheelPicker: {
      width: 320,
      height: 150,
     
    },
    selectedIndicator: {
      borderStyle:'solid',
      borderColor:'#d6d6d6',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      maxWidth:300,
      alignSelf:'center',
      backgroundColor: 'transparent',
    },
    wheelPickerText: {
      fontSize: 30,
      color: 'black',
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      textAlign: 'center'
      
      
    },
    wheelPickerContainer: {
      marginTop: 20,
      marginBottom: 20,
      alignSelf:'center',
      
    },
    button: {
      marginTop: 10,
      padding: 10,
      backgroundColor: '#007BFF',
      borderRadius: 5,
      marginLeft: 0,
      marginRight: 10,

    },
    btnText: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    caretright:{
      position:"absolute",
      left: 100, 
      top: 108,
    },

    caretleft:{
      position:"absolute",
      right:100,
      top: 108,
    },
    icon:{
      marginTop: 60, 
      display:"flex",
      flex:1
    },
  });

export default SelectPassengersScreen;
