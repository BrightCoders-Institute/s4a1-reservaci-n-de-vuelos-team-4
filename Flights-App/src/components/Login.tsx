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
    mainView:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginTop:40
        
    },
    input:{
        borderColor:"rgb(92, 110, 248)",
        height: 40,
        borderWidth: 1,
        padding: 10,
        marginTop:5,
        marginBottom:20,
        fontWeight:"bold"

    },
    inputView:{
        width:"80%",
  
    },
    title:{
        textAlign:"left",
        width:"80%",
        height:50
        
    
    },
    titleText:{
        color:"rgb(92, 110, 248)",
        fontSize:20,
        fontWeight:"bold"
      
    },
    btnContainer:{
        width:"80%",
        alignItems:"center",
        justifyContent:"center",
        
    },
    btnStyle:{
        width:"100%",
        padding: 12, 
        backgroundColor:"rgb(92, 110, 248)",
        shadowColor:"rgb(92, 110, 248)",
        borderRadius:10,
        marginBottom:10,
        marginTop:10,
        
        
    },
    btnText:{
        color:"white",
        fontWeight:"bold",
        textAlign:"center"
    }

})
