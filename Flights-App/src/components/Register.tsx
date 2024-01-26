import React, { useEffect } from "react";
import { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, StyleSheet, Button, TouchableOpacity, Alert } from "react-native";
import Checkbox from 'expo-checkbox';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from '../rutes/RootStackParamList';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebaseConfig";
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential } from 'firebase/auth';
import { auth } from '../../firebaseConfig.js';
import AsyncStorage from '@react-native-async-storage/async-storage';





type RegisterNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>
type RegisterProps = {
    navigation: RegisterNavigationProp;
}

const Register: React.FC<RegisterProps> = ({ navigation }) => {
    const [user, setUser] = useState('')
    const [password, setPassword] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [borderColor, setBorderColor] = React.useState('rgb(92, 110, 248)')

    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: '885739237783-dv56mbfe0kdd2ltvji249qkkn4uhcrjc.apps.googleusercontent.com',
        
    });

    const app = initializeApp(firebaseConfig);
    const authh = getAuth(app);

    const handleUserFirebase = () => {
        createUserWithEmailAndPassword(authh, email, password)
            .then((userCredential) => {
                // Signed in 
                console.log("User created!")
                const user = userCredential.user;
                console.log("user", user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorMessage == 'auth/email-already-exists') {
                    Alert.alert("Este email ya esta registrado")
                } else {
                    Alert.alert(errorMessage)
                }

                console.log("error", errorCode, errorMessage)
                // ..
            });
    }

///////////////////////////////////////////
    useEffect(() => {
        GoogleSignin.configure({
     
            webClientId: '209290529552-i81ecag0gqp4mu8o3b2pi8r5u96bpdma.apps.googleusercontent.com',
           
          });
      },[])
    const handleSubmitgGoogle = async  () => {

        console.log("log log")
        try{
            console.log("try")
           await GoogleSignin.hasPlayServices()
           const {idToken}  = await GoogleSignin.signIn()
           console.log("token", idToken)
           const googleCredential = GoogleAuthProvider.credential(idToken)
           console.log(googleCredential)
           await signInWithCredential(auth,googleCredential)
          
        }catch(err:any){
            console.log(err)
        }
    }
    const signOut = async () => {
        try {
          await GoogleSignin.signOut();
         // setState({ user: null }); // Remember to remove the user from your app's state as well
        } catch (error) {
          console.error(error);
        }
      };
////////////////////////////////////////////

    const handleSubmit = () => {
        console.log("Datos registrados:", user, password, email);
        if (user.trim() === '' || password.trim() === '' || email === '') {
            Alert.alert("Todos los campos son obligatorios");
            setBorderColor('red')
        } else {
            // navigation.navigate('Home')
            handleUserFirebase()
            Alert.alert("Datos correctos")
        }

    }



    const [isCheckedAT, setCheckedAT] = useState(false);
    const [isCheckedSU, setCheckedSU] = useState(false);

    return (

        <SafeAreaView>
            <View style={styles.mainView}>
                <Text style={styles.textTitle}>Sign Up</Text>
                <View style={styles.inputView}>
                    <Text>Fisrt Name *</Text>
                    <TextInput onChangeText={setUser} style={styles.input}></TextInput>


                    <Text>Email *</Text>
                    <TextInput onChangeText={setEmail} style={[styles.input, { borderColor: borderColor }]}></TextInput>

                    <View>
                        <Text>Password *</Text>
                        <TextInput onChangeText={setPassword} style={[styles.inputpas, { borderColor: borderColor }]} secureTextEntry></TextInput>

                        <Text style={styles.titlepass} >Use 8 or more characters whith a mix of letters, numbers and symbols.</Text>
                    </View>
                </View>

                <View style={styles.CheckBoxContainer}>
                    <View style={styles.CheckBoxSection}>
                        <Checkbox style={styles.checkbox} value={isCheckedAT} onValueChange={setCheckedAT} color={isCheckedAT ? '#5C6EF8' : undefined} />
                        <Text style={styles.checkboxText}>I agree to the Terms and Privacy Policy</Text>
                    </View>

                    <View style={styles.CheckBoxSection}>
                        <Checkbox style={styles.checkbox} value={isCheckedSU} onValueChange={setCheckedSU} color={isCheckedSU ? '#5C6EF8' : undefined} />
                        <Text style={styles.checkboxText}>Subscribe for select product update</Text>
                    </View>
                </View>

                <View style={styles.btnView}>

                    <TouchableOpacity onPress={handleSubmit} style={styles.btnStyle}>
                        <Text style={styles.btnText}>Sing Up</Text>
                    </TouchableOpacity>
                    <Text style={styles.titleor}>or</Text>

                    <TouchableOpacity  style={styles.btnStyle} onPress={() => handleSubmitgGoogle()}>

                        <Text style={styles.btnText}>Sing Up with Google</Text>
                    </TouchableOpacity>
                </View>

                <Text onPress={() => navigation.navigate('Login')}>
                    Aready have an account? Click here to login!
                </Text>



            </View>
        </SafeAreaView>
    );

}
const styles = StyleSheet.create({
    textTitle: {
        color: "rgb(92, 110, 248)",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 20,
        marginBottom: 20,
    },

    CheckBoxContainer: {
        width: "80%"
    },
    CheckBoxSection: {
        alignItems: 'center',
        flexDirection: 'row',

    },
    checkboxText: {
        color: "#b7babf",
        fontSize: 13,
        fontWeight: "bold",
    },
    checkbox: {
        margin: 8,
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
    btnView: {
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        marginTop: 10,
    },
    input: {
        borderColor: "rgb(92, 110, 248)",
        borderWidth: 1,
        fontWeight: "bold",
        height: 40,
        marginBottom: 25,
        marginTop: 5,
        padding: 10,
    },
    inputpass: {
        borderColor: "rgb(92, 110, 248)",
        borderWidth: 1,
        fontWeight: "bold",
        height: 40,
        marginBottom: 25,
        marginTop: 5,
        padding: 10,
    },
    inputpas: {
        borderColor: "rgb(92, 110, 248)",
        borderWidth: 1,
        fontWeight: "bold",
        height: 40,
        marginBottom: 1,
        marginTop: 5,
        padding: 10,
    },
    inputView: {
        width: "80%",
    },
    mainView: {
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        marginTop: 40,
    },
    title: {
        height: 50,
        textAlign: "left",
        width: "80%",
    },
    titleText: {
        color: "rgb(92, 110, 248)",
        fontSize: 20,
        fontWeight: "bold",
    },
    titleor: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
    },
    titlepass: {
        color: "#b7babf",
        fontSize: 11,
        fontWeight: "bold",
        marginBottom: 30,
    },
}

)

export default Register
