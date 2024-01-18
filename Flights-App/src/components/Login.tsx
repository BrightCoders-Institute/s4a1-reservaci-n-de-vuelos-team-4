import React from 'react'
import {View,Text, TextInput,StyleSheet, SafeAreaView,TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../rutes/RootStackParamList';

type LoginNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
type LoginProps = {
  navigation: LoginNavigationProp;
};

const Login:React.FC <LoginProps>= ({ navigation }) => {
    const [user,setUser] = React.useState('')
    const [password,setPassword] = React.useState('')
    //const navigation = useNavigation()

        const handleSubmit = () => {
            //fetch
            console.log("userData", user,password)
            //navigation.navogate("home")
        }
  return (
    <SafeAreaView>
        <View style={styles.mainView}>
            <View style={styles.title}>
            <Text style={styles.titleText}>Login</Text>
            </View>
     
      <View style={styles.inputView}>
            <Text>Email*</Text>
          <TextInput onChangeText={setUser} style={styles.input}></TextInput>

          <Text>Password*</Text>
          <TextInput  onChangeText={setPassword} style={styles.input} secureTextEntry></TextInput>
      </View>


      <View style={styles.btnContainer}>
     <TouchableOpacity style = {styles.btnStyle} onPress={() => handleSubmit}>
        <Text style={styles.btnText}>Log in</Text>
     </TouchableOpacity>

     <Text>or</Text>

     <TouchableOpacity style = {styles.btnStyle}>
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
        borderColor: "rgb(92, 110, 248)",
        borderWidth: 1,
        fontWeight: "bold",
        height: 40,
        marginBottom: 20,
        marginTop: 5,
        padding: 10,
      },
      
      inputView: {
        width: "80%",
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
      
      btnContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
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
