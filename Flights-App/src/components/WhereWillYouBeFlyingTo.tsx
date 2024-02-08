import React, { useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity,Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, WhereWillYouBeFlyingToNavigationProp, WhereWillYouBeFlyingToProp } from '../rutes/RootStackParamList';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Booking from './Booking';

interface WhereWillYouBeFlyingTo{
    route:WhereWillYouBeFlyingToProp;
    navigation:WhereWillYouBeFlyingToNavigationProp;
}
const  WhereWillYouBeFlyingTo :React.FC<WhereWillYouBeFlyingTo>=({route,navigation}) => {
  const location = route.params.from
  const [flyingTo,setFliyingTo] = React.useState<String>('')
  

  const handleNavigate = () =>{
    navigation.navigate("SelectDate",{to:flyingTo,from:location})
  }
    return (
        <View style={styles.mainview}>
            
            <View style={styles.icon}>
                <Icon style={styles.arrow} name ="arrow-back-ios" size={30} color="rgb(92, 110, 248)" onPress={() => navigation.goBack()}></Icon>
                <Booking from={location} /> 
            </View>
            <View style={styles.textview}>
                
              <Text style={styles.textInfo}>Where will you be flying to?</Text>
            </View>
            <View style={styles.inputView}>
                <TextInput style={styles.input} placeholder='Select location' onChangeText={setFliyingTo} />
            </View>
            <View >
                <TouchableOpacity style={styles.btnStyle} onPress={handleNavigate}>
                    <Text style={styles.btnText}>Next</Text>
                </TouchableOpacity>
            </View>
            
        </View>
  )
}
const styles = StyleSheet.create({
    mainview:{
        flex:1,
        padding:10,
    },

    arrow:{
      marginLeft: 14, 
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
      
      btnText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
      },
      textInfo:{
        marginLeft:14,
        fontWeight:"bold",
        fontSize:44,
        justifyContent:"flex-start",
      },
      textview:{
        
        width:"100%",
        justifyContent:"flex-start",
        flex:2

      },
      icon:{
        marginTop: 50,
        flex:1
      },
      btnView:{
        flex:1
      },
      inputView:{
        flex:3,
        width:"100%",
        marginLeft:14,
      },
      input:{
        width:"94%",
        borderBottomColor:"gray",
        borderBottomWidth:1
      }
})
export default WhereWillYouBeFlyingTo