import React from 'react'
import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity,Alert, KeyboardAvoidingView,Modal } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../rutes/RootStackParamList';
import {useState} from "react"
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Calendar, LocaleConfig} from 'react-native-calendars';

const  SelectDate:React.FC=() => {
  
    const SelectDateee = () => {
        const [selected, setSelected] = useState('');
      
        return (
          <Calendar
            onDayPress={day => {
              setSelected(day.dateString);
            }}
            markedDates={{
              [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
            }}
          />
        );
      };
      
    return (
        <SafeAreaView>
            <View style={styles.mainView}>
                <View style={styles.infoFlight}>
    
                    <View style={styles.infoStarting}>
                     <Text style= {styles.textInfo}> BEG </Text>
                     <Text style= {styles.textInfo2}> Serbia </Text>
                     <View style={styles.lineHorizontal} />
                    </View>
    
                    <View>
                        <Icon name='airplanemode-active'  size={30} color="#4867aa" style={{ transform: [{ rotate: '90deg' }] }}/>
                    </View>
    
                    <View style={styles.infoDestination}>
                     <Text style= {styles.textInfoDestination}> AMS </Text>
                     <Text style= {styles.textInfo2}> Netherlands </Text>
                     <View style={styles.lineHorizontal} />
                   </View>
                </View>
                
            </View>
                <View>
                    <Text>SelectDate</Text>
                </View>
                
        </SafeAreaView>
      )
    }
    export default SelectDate
    
    const styles = StyleSheet.create({
    
        mainView:{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            
           
        },
        infoFlight:{
           
            flexDirection: 'row',
            alignItems: 'center', 
            justifyContent: 'space-between',
        }, 
    
        infoStarting:{
            marginBottom: 31,
            marginLeft:12,
            flex: 1,
            alignItems: 'flex-start', // Alinear a la izquierda
        },
    
        infoDestination:{
            marginBottom: 1,
            marginRight:20,
            flex: 1,
            alignItems: 'flex-end', // Alinear a la derecha
        },
        textInfo:{
            marginRight: '70%', 
            fontWeight:"bold", 
            fontSize: 25,
        }, 
        textInfoDestination:{
            fontWeight:"bold", 
            fontSize: 25,
        },
        textInfo2:{
            marginTop: 1,
            marginLeft: 2,
            color: 'gray', 
        },
        lineHorizontal:{
            borderBottomWidth: 0.4,
            borderBottomColor: 'grey',
            width: 190, 
        },
        input:{
            borderBottomColor:"gray",
            borderBottomWidth:1,
            borderTopWidth:0,
            
           
        },
        inputView:{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            
        }
        });
    