import React, {useState, useEffect} from 'react'
import { SafeAreaView, Text, View, FlatList, StyleSheet,TouchableOpacity } from 'react-native'
//import * as firebase from 'firebase/app'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { firebaseConfig, loadInfo } from "../../firebaseConfig";
import Booking from './Booking';

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

const MyFlights: React.FC = () => {
    const [flights, setFlights] = useState<any>([])
    const getData = async () =>{
        const data = await loadInfo()
        console.log(data)
        setFlights(data)
    }
    useEffect(() => {
        // const loadFlights = async() =>{
        //     try{
            
        //         const userId = firebase.auth().currentUser?.uid
        //         if(userId){
        //             const snapshot = await firebase.firestore().collection('flights').where('userID', '==', userId).get();
        //             const updatedFlights: any[] = []
        //             snapshot.forEach(doc => {
        //                 updatedFlights.push({id:doc.id, ...doc.data()})
        //             })
        //             setFlights(updatedFlights)
        //         }
                
        //     } catch(error){
        //         console.error(error)
        //     }
        // }
        getData()
       
            
    },[])
    
  return (
    <SafeAreaView>
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>My flights </Text>
            </View>
            {/* {flights.map((item:any) =>{
                <Booking from={item.from} to={item.to} fromIso3={item.fromIso3} toIso3={item.toIso3} date={item.date} passangers={item.passangers} />
            })} */}
            <View>
                
            </View>

            <View>
               <TouchableOpacity style={styles.btnStyle}>
                  <Text style={styles.btnText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>


    </SafeAreaView>
   
  )
}

const styles = StyleSheet.create({
    container:{
    }, 

    title:{
        fontWeight:'bold',
        fontSize:40,
        justifyContent:"flex-start",
        marginLeft:14,
        marginTop: 50,
        color: '#5C6EF8',
    },
    btnStyle: {
      alignSelf:'center',
      backgroundColor: "rgb(92, 110, 248)",
      borderRadius: 50,
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
  
    btnText: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    
})

export default MyFlights;
