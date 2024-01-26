import { useState } from 'react'
import * as React from "react"
import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity,Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../rutes/RootStackParamList';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebaseConfig";

import { GoogleSignin, } from '@react-native-google-signin/google-signin';

import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';


type LoginNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
type LoginProps = {
  navigation: LoginNavigationProp;
};

const Login:React.FC <LoginProps> = () => {
    const [user,setUser] = React.useState('')
    const [password,setPassword] = React.useState('')
    const [borderColor, setBorderColor] = React.useState('rgb(92, 110, 248)')
    const navigation = useNavigation()

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleUserFirebase = () => {
        signInWithEmailAndPassword(auth, user, password)
        .then((userCredential) => {
            // Signed in 
            console.log("User login!")
            const user = userCredential.user;
            console.log("user", user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if(errorMessage == 'auth/user-not-found'){
              Alert.alert("Este usuario no esta registrado")
            } else {
              console.log("error", errorCode, errorMessage)
            }
            
            Alert.alert(errorMessage)
            // ..
        });
    }

    const handleSubmit = () => {
        //fetch
        
       
        //navigation.navogate("home")
        if(user.trim() === '' || password.trim() === '' ){
          Alert.alert("Todos los campos son obligatorios");
          setBorderColor('red')
        } else {
          handleUserFirebase()
          
        }
        
    }


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

    
   
   return (
    <SafeAreaView>
        <View style={styles.mainView}>
            <View style={styles.title}>
            <Text style={styles.titleText}>Login</Text>
            </View>
     
        <View style={styles.inputView}>

            <Text>Email *</Text>
            <TextInput onChangeText={setUser} style={[styles.input,{borderColor:borderColor}]} ></TextInput>

            <Text>Password *</Text>

            <TextInput onChangeText={setPassword} style={[styles.input,{borderColor:borderColor}]} secureTextEntry></TextInput>
        </View>


        <View style={styles.btnContainer}>
            <TouchableOpacity style = {styles.btnStyle} onPress={handleSubmit}>
                <Text style={styles.btnText}>Log in</Text>
            </TouchableOpacity>

            <Text>or</Text>

            <TouchableOpacity style = {styles.btnStyle} onPress={handleSubmitgGoogle}>
                <Text style={styles.btnText}>Log in with google</Text>
            </TouchableOpacity>
        </View>
        <Text onPress={()=>navigation.navigate("Register")}> Don't have an account?</Text>
      
    </View>
    </SafeAreaView>
    
  )
}

export default Login
const styles = StyleSheet.create({
    mainView: {
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        marginTop: 40,
      },
      
      input: {
        borderWidth: 1,
        fontWeight: "bold",
        height: 40,
        marginBottom: 20,
        marginTop: 5,
        padding: 10,
      },
      
      inputView: {
        width: "80%",
        marginTop: 13,
      },
      
      title: {
        height: 50,
        width: "80%",
        marginTop: 20,
      },
      
      titleText: {
        color: "rgb(92, 110, 248)",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
      },
      
      btnContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        marginTop: 9, 
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
      }
})
