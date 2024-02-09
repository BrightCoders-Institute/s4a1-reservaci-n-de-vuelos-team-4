import React, {useState, useEffect, useCallback} from 'react'
import { SafeAreaView, Text, View, FlatList, StyleSheet,TouchableOpacity } from 'react-native'
//import * as firebase from 'firebase/app'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import {loadInfo } from "../../firebaseConfig";
import Booking from './Booking';
import Icon from "react-native-vector-icons/MaterialIcons";
import { MyFlightsProps,MyFlightsNavigation } from 'rutes/RootStackParamList'
import { useFocusEffect } from '@react-navigation/native'


interface MyFlights {
  navigation: MyFlightsNavigation;
}

const MyFlights: React.FC<MyFlights>= ({navigation}) => {
    const [flights, setFlights] = useState<any>()
    const getData = async () =>{
        const flightsArr = await loadInfo()
        
        setFlights(flightsArr)
        
    }
    useFocusEffect(
      useCallback(() => {
        getData();
      }, [])
    );
    const handleNavigate = () =>{
      navigation.navigate("WhereAreYou")
    }
    
    
    return (
    
      
        <View style={styles.container}>
            <View style={{flex:1}}>
                <Text style={styles.title}>My flights </Text>
            </View>
            <View style={{flex:6}}>
              {
                flights &&
                <FlatList 
                data={flights}
                renderItem={({ item }) => <Booking from={item.from} to={item.to} fromIso3={item.fromIso3} toIso3={item.toIso3} date={item.date} passangers={item.passangers} />}>

                </FlatList>

              }
            </View>
            <View style={styles.btnContainer}>
                  <TouchableOpacity onPress={handleNavigate}>
                    <Icon name='add-circle' 
                    size={90}
                    color="#4867aa">  
                    </Icon>
                  </TouchableOpacity>
                </View>
           
        </View>

       
  
   
  )
}

const styles = StyleSheet.create({
    container:{
      display:"flex",
      flex:1,
      
    }, 
    
    btnContainer:{
      position:'absolute',
      bottom:20,
      left:0,
      right:0,
      alignItems:"center",
    },

    title:{
        fontWeight:'bold',
        fontSize:40,
        justifyContent:"flex-start",
        marginLeft:14,
        marginTop: 40,
        color: '#5C6EF8',
        
    
    },
    
})

export default MyFlights;
