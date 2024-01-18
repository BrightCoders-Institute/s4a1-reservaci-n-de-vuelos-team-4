import React, {useState} from "react";
import { View,Text,TextInput,SafeAreaView,StyleSheet, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from '../rutes/RootStackParamList';
import { TouchableOpacity } from "react-native-gesture-handler";


type RegisterNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>
type RegisterProps = {
    navigation: RegisterNavigationProp;
}

const Register:React.FC<RegisterProps> = ({ navigation }) => {
    const [user,setUser] = React.useState('')
    const [password,setPassword] = React.useState('')
    const [email,setEmail] = React.useState('')

    const handleRegister = () => {
        console.log("Datos registrados:", user, password, email)
    }

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

                <View> 
                    <TouchableOpacity onPress={handleRegister} style = {styles.btnStyle}>
                        <Text style={styles.btnText}>Sing Up with google</Text>
                    </TouchableOpacity>
                    <Text style={styles.titleoror}>or</Text>
                    <Button title="Sign Up whith Google" onPress={handleRegister}/>
                </View>
            </View>
            <Text onPress={() => navigation.navigate('Login')}>
                Aready have an account? Click here to login!
            </Text>
        </View>
      </SafeAreaView>
    );
    
}
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
        titlepass:{
            fontSize: 12,
            fontWeight: "bold",
        
        },
        titleoror:{
            fontSize: 15,
            fontWeight: "bold",
            textAlign: "center",
        },
        btnStyle:{
            width: "100%",
            padding: 12, 
            backgroundColor: "rgb(92, 110, 248)",
            shadowColor: "rgb(92, 110, 248)",
            borderRadius: 10,
            marginBottom: 10,
            marginTop: 10,
        },
        btnText:{
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
        }
    }
)

export default Register
