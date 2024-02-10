import React from 'react'
import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity, Alert, KeyboardAvoidingView, Modal } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, SelectDateNavigationProps, SelectDateProps } from '../rutes/RootStackParamList';
import { useState } from "react"
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Calendar } from 'react-native-calendars';
import Booking from './Booking';


interface SelectDate {
    route: SelectDateProps;
    navigation: SelectDateNavigationProps;
}
const SelectDate: React.FC<SelectDate> = ({ route,navigation }) => {
     const from = route?.params?.from
     const to = route?.params?.to
     const fromIso3 = route?.params?.fromIso3
     const toIso3 = route?.params?.toIso3
    //const navigation = useNavigation()
    const SelectDateee = () => {
        const [selected, setSelected] = React.useState('');

    
    };
    const handleNavigate = () =>{
        navigation.navigate("SelectPassengers",{from:from,to:to,date:selected,toIso3:toIso3,fromIso3:fromIso3})
    }
    const [selected, setSelected] = useState('');

  return (
    <SafeAreaView style={styles.container}> 
    <View >
      <View style={styles.icon}>
                <Icon style={styles.arrow} name ="arrow-back-ios" size={30} color="rgb(92, 110, 248)" onPress={() => navigation.goBack()}></Icon>
                <Booking to={to} from={from} toIso3={toIso3} fromIso3={fromIso3} date={selected}/>
      </View>
       
      <Text style={styles.title}>Select Date</Text>
      <View style={{flex:3}}>  
        <Calendar
          onDayPress={(day) => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: '#5C6EF8'
            },
          }}
          style={styles.calendar}
          theme={{
            selectedDayBackgroundColor: '#5C6EF8',
            textMonthFontSize: 25, // Ajusta el tamaño de la fuente del mes según tus necesidades
            textMonthFontWeight: 'bold', // Ajusta el peso de la fuente del mes si es necesario
            monthTextColor: 'black', // Cambia el color si es necesario
            calendarBackground: 'transparent',
            backgroundColor: 'transparent',
            arrowStyle: {
              padding: 20, // Ajusta el espacio alrededor de las flechas
              
            },
            arrowColor: '#6B7AF7', // Cambia el color de las flechas
          }}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.btnStyle} onPress={handleNavigate}>
            <Text style={styles.btnText}> Next </Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
};
export default SelectDate;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding:10,
    justifyContent: 'center',
    alignItems: 'center', 
  },

  arrow:{
    marginLeft:14,
  },
  title: {
    fontSize: 35,
    marginLeft: 10,
    fontWeight: 'bold',
    marginBottom: 10,
    marginRight: 190,
  },
  calendar: {
    marginLeft: 20,
    width: 350,
    height: 350,
    backgroundColor: 'transparent',
  },
  mainView: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },

  icon:{
    flex:1,
    marginTop: 65,
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

  btnText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});