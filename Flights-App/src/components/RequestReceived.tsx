import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import {RequestReceivedNavigationProp, RequestReceivedProps} from "../rutes/RootStackParamList"
import Icon from 'react-native-vector-icons/MaterialIcons'
import Booking from './Booking';

interface RequestReceived {
  navigation: RequestReceivedNavigationProp;
  route: RequestReceivedProps;
};

const RequestReceived: React.FC<RequestReceived> = ({ navigation, route}) => {
  const handleFinish = () => {
    // Navegar a otra pantalla o realizar cualquier acción necesaria al hacer clic en "Finish"
  };
  
  //const to = route.params.to
  //const from = route.params.from
  //const date = route.params.date
  //const passangers = route.params.passangers
  const handleNavigate = () =>{

  }

  return (
    <SafeAreaView style={styles.container}> 
    <Icon style={styles.arrow} name ="arrow-back-ios" size={30} color="rgb(92, 110, 248)"  onPress={() => navigation.goBack()}></Icon>
      <View style={styles.icon}>
        
        <Booking to={'MEX'} from={'USA'} date = {'06/feb/2024'} passangers={4}/>
      </View>
      <View style={styles.textView}>
        <Text style={styles.title}>Your request was received.</Text>
        
      </View>
      <View >
        <TouchableOpacity style={styles.btnStyle} onPress={handleNavigate}>
            <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    padding:10,
    
  },
  btnStyle: {
    alignSelf:'center',
    backgroundColor: "rgb(92, 110, 248)",
    borderRadius: 10,
    marginBottom: 50,
    marginTop: 10,
    padding: 12,
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    elevation: 23,
    shadowColor: "rgb(92, 110, 248)",
    width: "92%",
  },

  arrow:{
    
    marginLeft:14,
    marginTop:65,
    marginBottom: 5,

  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",

  },
  textView:{  
    width:"100%",
    justifyContent:"flex-start",
    flex:2,
  },
  title: {
    fontWeight:"bold",
    fontSize:40,
    justifyContent:"flex-start",
    marginLeft:30,
  },
  icon:{
    marginTop: 60, 
    display:"flex",
    width:"100%",
    paddingTop:'40%',
  }
});

export default RequestReceived;
