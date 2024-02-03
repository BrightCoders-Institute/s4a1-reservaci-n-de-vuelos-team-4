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
    //const navigation = useNavigation()
    const SelectDateee = () => {
        const [selected, setSelected] = React.useState('');

    
    };
    const handleNavigate = () =>{
        navigation.navigate("SelectPassengers",{from:from,to:to,date:selected})
    }
    const [selected, setSelected] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <View style={styles.infoFlight}>
          <View style={styles.infoStarting}>
            <Text style={styles.textInfo}>BEG</Text>
            <Text style={styles.textInfo2}>Serbia</Text>
            <View style={styles.lineHorizontal} />
          </View>

          <View style={styles.infoDestination}>
            <Text style={styles.textInfoDestination}>AMS</Text>
            <Text style={styles.textInfo2}>Netherlands</Text>
            <View style={styles.lineHorizontal} />
          </View>
        </View>
      </View>

      <Text style={styles.title}>Select Date</Text>
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
          textMonthFontSize: 30, // Ajusta el tamaño de la fuente del mes según tus necesidades
          textMonthFontWeight: 'bold', // Ajusta el peso de la fuente del mes si es necesario
          monthTextColor: 'black', // Cambia el color si es necesario
          calendarBackground: 'transparent',
          arrowStyle: {
            padding: 15, // Ajusta el espacio alrededor de las flechas
            
          },
          arrowColor: '#6B7AF7', // Cambia el color de las flechas
        }}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleNavigate}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SelectDate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    marginRight: 190,
  },
  calendar: {
    width: 300,
    height: 300,
    backgroundColor: 'transparent',
  },
  mainView: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  infoFlight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoStarting: {
    marginBottom: 31,
    marginLeft: 12,
    flex: 1,
    alignItems: 'flex-start',
  },
  infoDestination: {
    marginBottom: 1,
    marginRight: 20,
    flex: 1,
    alignItems: 'flex-end',
  },
  textInfo: {
    marginRight: '70%',
    fontWeight: 'bold',
    fontSize: 25,
  },
  textInfoDestination: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  textInfo2: {
    marginTop: 1,
    marginLeft: 2,
    color: 'gray',
  },
  lineHorizontal: {
    borderBottomWidth: 0.4,
    borderBottomColor: 'grey',
    width: 190,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
  },
  button: {
    backgroundColor: '#5C6EF8',
    paddingVertical: 12,
    paddingHorizontal: 160,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    
    fontSize: 16,
  },
});