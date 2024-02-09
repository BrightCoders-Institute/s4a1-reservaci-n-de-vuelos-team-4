import { useState } from 'react'
import * as React from "react"
import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity,Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../rutes/RootStackParamList';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebaseConfig";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin, } from '@react-native-google-signin/google-signin';

import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';


type LoginNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
type LoginProps = {
  navigation: LoginNavigationProp;
};

const Login:React.FC<LoginProps> = ({navigation}) => {
    const [user,setUser] = React.useState('')
    const [password,setPassword] = React.useState('')
    const [borderColor, setBorderColor] = React.useState('rgb(92, 110, 248)')
    const [errors,setErrors] = React.useState({
      email:'',
      password:''

    })
  

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleNavigate = (userUID:String) =>{
      navigation.navigate("MyFlights",{userUID:userUID})
    }

    const handleUserFirebase = () => {
        signInWithEmailAndPassword(auth, user, password)
        .then((userCredential) => {
            // Signed in 
          
            const user = userCredential.user;
           
            console.log("uid", user.uid)
            AsyncStorage.setItem('userID',user.uid)
            handleNavigate(user.uid)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if(errorMessage == 'auth/user-not-found'){
              Alert.alert("Este usuario no esta registrado")
            } else {
              console.log("error", errorCode, errorMessage)
            }
            
            Alert.alert("Ocurrio un error en el servidor")
            // ..
        });
    }

    const handleSubmit = () => {
        if(user.trim() === '' && password.trim() === ''){
          setErrors({
            ...errors,
            email:"El email no puede estar vacío",
            password:"La contraseña no puede estar vacía"
          })
          
        }else if(user.trim() === ''){
          setErrors({
            ...errors,
            email:"El correo no puede estar vacía"
          })
        
        }
        else if(password.trim() === ''){
          setErrors({
            ...errors,
            password:"La contraseña no puede estar vacía"
          })
         

      
        }
        else{
          setErrors({
            ...errors,
            email:'',
            password:''
          })
          handleUserFirebase()
        }
        
    }


    const handleSubmitgGoogle = async  () => {

  
      try{
       
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
              {
                errors.email && 
                <Text style={{color:"red"}}>{errors.email}</Text>
              }
            <Text>Password *</Text>

            <TextInput onChangeText={setPassword} style={[styles.input,{borderColor:borderColor}]} secureTextEntry></TextInput>
            {
                errors.password && 
                <Text style={{color:"red"}}>{errors.password}</Text>
              }
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
        <Text onPress={()=>navigation.navigate("Register")}>    Don't have an account?</Text>
        <TouchableOpacity style = {styles.btnStyle} onPress={()=>navigation.navigate("Booking")}>
                <Text style={styles.btnText}>Booking</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.btnStyle} onPress={()=>navigation.navigate("WhereAreYou")}>
                <Text style={styles.btnText}>Where</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.btnStyle} onPress={()=>navigation.navigate("SelectPassengers")}>
                <Text style={styles.btnText}>Passagers</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style = {styles.btnStyle} onPress={()=>navigation.navigate("SelectDate")}>
                <Text style={styles.btnText}>Select Date</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.btnStyle} onPress={()=>navigation.navigate("WhereWillYouBeFlyingTo")}>
                <Text style={styles.btnText}>WhereWillYouBeFlyingTo</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.btnStyle} onPress={()=>navigation.navigate("RequestReceived")}>
                <Text style={styles.btnText}>RequestReceived</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.btnStyle} onPress={()=>navigation.navigate("MyFlights")}>
                <Text style={styles.btnText}>MyFlights</Text>
            </TouchableOpacity>
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
