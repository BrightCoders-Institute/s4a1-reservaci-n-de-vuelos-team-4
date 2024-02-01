import React, { useState } from 'react';
import WheelPicker from 'react-native-wheely';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SelectPassengers: React.FC = () => {
    const [selectedPassengers, setSelectedPassengers] = useState<number>(1);

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
            <Text style={styles.title}>How many passengers?</Text>

            
            <WheelPicker
            options={passengersOptions}
            selectedIndex={selectedPassengers}
            onChange={(passengers) => setSelectedPassengers(passengers)}
            itemStyle={styles.wheelPicker}
            itemTextStyle={styles.wheelPickerText}
            />

            
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
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 30,
      marginBottom: 20,
      fontWeight: 'bold',
      textAlign: 'left',
    },
    wheelPicker: {
      width: 200,
      height: 150,
      
    },
    wheelPickerText: {
      fontSize: 40,
      color: 'black',
      textAlign: 'center',
      fontWeight: 'bold',
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
  });

export default SelectPassengers;
