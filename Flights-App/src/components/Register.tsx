import React from "react";
import { useState } from 'react';
import { View,Text,TextInput,SafeAreaView,StyleSheet, Button, TouchableOpacity,} from "react-native";
import Checkbox from 'expo-checkbox';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from '../rutes/RootStackParamList';




type RegisterNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>
type RegisterProps = {
    navigation: RegisterNavigationProp;
}

const Register:React.FC<RegisterProps> = ({ navigation }) => {
    const [user,setUser] = useState('')
    const [password,setPassword] = React.useState('')
    const [email,setEmail] = React.useState('')
    const [borderColor, setBorderColor] = React.useState('rgb(92, 110, 248)')
    
    const handleRegister = () => {
        console.log("Datos registrados:", user, password, email); 
         if(user.trim() === '' || password.trim() === '' || email === '' ){
             alert("Todos los campos son obligatorios");
             setBorderColor('red')
            } else {
              // navigation.navigate('Home')
              alert("Datos correctos")
            }
        
    }

    const [isCheckedAT, setCheckedAT] = useState(false);
    const [isCheckedSU, setCheckedSU] = useState(false);

    return (

      <SafeAreaView>
        <View style={styles.mainView}>
            <Text>Sign Up</Text>
            <View style={styles.inputView}>
                <Text>Fisrt Name</Text>
                <TextInput placeholder="useless placeholder" onChangeText={setUser} style={styles.input}></TextInput>

                <Text>Email</Text>
                <TextInput placeholder="useless placeholder" onChangeText={setUser} style={styles.input}></TextInput>
    
                <Text>Password</Text>
                <TextInput placeholder="useless placeholder" onChangeText={setPassword} style={styles.input} secureTextEntry></TextInput>
                <Text style={styles.titlepass} >Use 8 or more characters whith a mix of letters, numbers and symbols.</Text>

                    <View style={styles.section}>
                        <Checkbox style={styles.checkbox} value={isCheckedAT} onValueChange={setCheckedAT} color={isCheckedAT ? '#5C6EF8' : undefined}/>
                        <Text style={styles.checkboxText}>I agree to the Terms and Privacy Policy</Text>
                    </View>
                    
                    <View style={styles.section}>
                        <Checkbox style={styles.checkbox} value={isCheckedSU} onValueChange={setCheckedSU} color={isCheckedSU ? '#5C6EF8' : undefined}/>
                        <Text style={styles.checkboxText}>Subscribe for select product update</Text>
                    </View>

                    <TouchableOpacity onPress={handleRegister} style = {styles.btnStyle}>
                        <Text style={styles.btnText}>Sing Up</Text>
                    </TouchableOpacity>
                    <Text style={styles.titleor}>or</Text>
                    <TouchableOpacity onPress={handleRegister} style = {styles.btnStyle}>
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
        container: {
            flex: 1,
            marginHorizontal: 16,
            marginVertical: 32,
        },
        section: {
            flexDirection: 'row',
            alignItems: 'center',
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
            fontSize: 12,
            fontWeight: "bold",
        },
    }
)

export default Register
