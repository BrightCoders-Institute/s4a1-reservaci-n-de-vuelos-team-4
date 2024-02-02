import React, { useState } from 'react';
import WheelPicker from 'react-native-wheely';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import Icon2 from  'react-native-vector-icons/MaterialIcons'
import Booking from './Booking';


const SelectPassengers: React.FC = () => {
    const [selectedPassengers, setSelectedPassengers] = useState<number>(0);
  
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

    const handlePassengerChange = (value: number) => {
        setSelectedPassengers(value);
    };
    return (
        
        <View style={styles.container}>
          {/* <View style={styles.icon}>
                <Icon2 name ="arrow-back-ios" size={30} color="rgb(92, 110, 248)" onPress={() => navigation.goBack()}></Icon2>
                <Booking from={'MEx'} to={'Us'}/> 
          </View> */}
            <Text style={styles.title}>How many passengers?</Text>
            <View>
              <Icon style={styles.caretleft} name ="caretleft" size={20} color="rgb(92, 110, 248)"></Icon>
              <Icon style={styles.caretright} name ="caretright" size={20} color="rgb(92, 110, 248)"></Icon>
            
              
              <WheelPicker
              options={passengersOptions}
              selectedIndex={selectedPassengers}
              onChange={(passengers) => setSelectedPassengers(passengers)}
              itemStyle={styles.wheelPicker}
              itemTextStyle={styles.wheelPickerText}
              containerStyle={styles.wheelPickerContainer}
              selectedIndicatorStyle={styles.selectedIndicator}
              /> 
            </View>
            
            <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Continuar</Text>
            </TouchableOpacity>
        </View>
      );
}

// Estilos
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start', 
      alignItems: 'center',
      paddingTop: 40,
    },
    title: {
      fontSize: 40,
      marginBottom: 20,
      fontWeight: 'bold',
      textAlign: 'left',
      alignSelf: 'flex-start',
      marginLeft: 40,
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
      textAlign: 'center',
      fontWeight: 'bold',
      
    },
    wheelPickerContainer: {
      marginTop: 20,
      marginBottom: 20,
      
    },
    button: {
      marginTop: 20,
      padding: 10,
      backgroundColor: '#007BFF',
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
    caretright:{
      position:"absolute",
      left: 90, 
      top: 108,
    
      
    },

    caretleft:{
      position:"absolute",
      right:90,
      top: 108,
    },
    icon:{
      display:"flex",
      flex:1
    },
  });

export default SelectPassengers;
