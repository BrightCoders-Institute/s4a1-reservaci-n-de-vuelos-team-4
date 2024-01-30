import React from 'react'
import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity,Alert, KeyboardAvoidingView,Modal } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../rutes/RootStackParamList';
import {useState} from "react"


const  SelectDate:React.FC=() => {
  
    const [openStartDatePicker,setOpenStartDatePicker] = useState(false)

    return (
        <SafeAreaView style={{flex: 1}}>

            <View>
            <KeyboardAvoidingView 
            style={{width:"100%",
            height: "100%",
            backgroundColor:"white",
            
        }}>
                <View style={{flex: 1 , alignItems: "center"}}>
                    <Text style={styles.textHeader}>
                        Vuelos bla bla
                    </Text>
                </View>
            
                        <View style={{width: "100%", paddingHorizontal: 22, marginTop: 64}}> 
                                <View> 
                                    <Text style={{fontSize: 18}}>Select Date  </Text>
                                    <TouchableOpacity style={styles.inputBtn}
                                    onPress={()=>{console.log("Selected button")}}
                                    >
                                        <Text>12/12/2024</Text>

                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity
                                onPress={()=> console.log("subimit data")}
                                style={styles.submitBtn}
                                >
                                    <Text style={{fontSize: 20, color: "white", }}> </Text>
                                </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                    </View>

                        <Modal animationType="slide"
                        transparent={true}
                        visible={openStartDatePicker}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.ModalView}>

                                </View>
                            </View>

                        </Modal>

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
        textHeader:{
            fontSize: 36,
            marginVertical: 60,
            color: "#111"
        },
        inputBtn:{
            borderWidth: 1,
            borderRadius: 4,
            borderColor: "#2",
            height: 50,
            paddingLeft: 8,
            fontSize: 18,
            justifyContent: "center",
            marginTop: 14
        },
        submitBtn:{
            backgroundColor: "#342342",
            paddingVertical: 12,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 8,
            marginVertical: 16
        },
    

        },
        centeredView:{

        }
    })
