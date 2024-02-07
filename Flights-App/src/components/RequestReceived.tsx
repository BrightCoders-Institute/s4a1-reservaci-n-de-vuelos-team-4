import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
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
  const to = route.params.to
  const from = route.params.from
  const date = route.params.date
  const passangers = route.params.passangers

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
                <Icon name ="arrow-back-ios" size={30} color="rgb(92, 110, 248)" onPress={() => navigation.goBack()}></Icon>
                <Booking to={'MEx'} from={'USA'} date = {'06/feb/2024'} passangers={4}/>
      </View>
      <View style={styles.textView}>
        <Text style={styles.title}>Your request was received.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Finish</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:10,
    marginLeft:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
    buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  textView:{  
    width:"100%",
    justifyContent:"flex-start",
    flex:2
  },
  button: {
    backgroundColor: "rgb(92, 110, 248)",
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
    padding: 12,
    shadowColor: "rgb(92, 110, 248)",
    width: "100%",
  },
  title: {
    fontWeight:"bold",
    fontSize:49,
    justifyContent:"flex-start",
  },
  icon:{
    flex:1
  }
});

export default RequestReceived;
