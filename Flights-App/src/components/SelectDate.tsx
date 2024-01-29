import React from 'react'
import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity,Alert, KeyboardAvoidingView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../rutes/RootStackParamList';

const  SelectDate:React.FC=() => {
  
    return (
        <SafeAreaView>
            <View style={styles.mainview}>
                <Text style={styles.titleText}>Select Date</Text>
            </View>


            <View>
            <KeyboardAvoidingView 
            style={{width:"100%",
            height: "100%",
            backgroundColor:"white",
        }}>
                
            </KeyboardAvoidingView>


            </View>



            <View>
            <TouchableOpacity style={styles.btnStyle}>
                        <Text style={styles.btnText}>Next</Text>
                    </TouchableOpacity>
            </View>

        </SafeAreaView>

  )
}
export default SelectDate

    const styles = StyleSheet.create({
        mainview:{
            flex:1,
    
        },
        titleText: {
            fontSize: 20,
            fontWeight: "bold",

        },
        btnStyle: {
            backgroundColor: "rgb(92, 110, 248)",
            borderRadius: 10,
            marginBottom: 10,
            marginTop: 10,
            padding: 12,
            shadowColor: "rgb(92, 110, 248)",
            width: "100%",
    
        },
        btnText: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
        },
    })
