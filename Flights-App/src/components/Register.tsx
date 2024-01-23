import React from "react";
import { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, StyleSheet, Button, TouchableOpacity, Alert } from "react-native";
import Checkbox from 'expo-checkbox';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from '../rutes/RootStackParamList';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebaseConfig";
import { GoogleSignin,GoogleSigninButton,statusCodes } from '@react-native-google-signin/google-signin';


type RegisterNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>
type RegisterProps = {
    navigation: RegisterNavigationProp;
}

GoogleSignin.configure({
    webClientId: '885739237783-fgeania0rflru8p4a0geegsm3udp0due.apps.googleusercontent.com', // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
    scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    hostedDomain: '', // specifies a hosted domain restriction
    forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    accountName: '', // [Android] specifies an account name on the device that should be used
    iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
    profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
});




const Register: React.FC<RegisterProps> = ({ navigation }) => {
    const [user, setUser] = useState('')
    const [password, setPassword] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [borderColor, setBorderColor] = React.useState('rgb(92, 110, 248)')


    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
   

    
    const handleUserFirebase = () => {
        createUserWithEmailAndPassword(auth, email, password)
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

    const handleSubmitgGoogle = async () => {
        console.log("google")
       
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
           console.log(userInfo)
          } catch (error:any) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
              // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
              // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
              // play services not available or outdated
            } else {
              
              console.log(" some other error happened")
            }
          }
    }

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
                    <TouchableOpacity onPress={handleSubmitgGoogle} style={styles.btnStyle}>
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
