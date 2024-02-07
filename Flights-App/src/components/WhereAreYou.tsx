import React, { useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity,Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, WhereAreYouNavigationProp, WhereAreYouProp } from '../rutes/RootStackParamList';
import Icon from 'react-native-vector-icons/MaterialIcons'
import data from "../data/countrys"
import AutoComplete from "react-native-autocomplete-input"


interface WhereAreYou{
  route:WhereAreYouProp,
  navigation:WhereAreYouNavigationProp;
}

const  WhereAreYou :React.FC<WhereAreYou>=({navigation}) => {

   
        const handleNavigate = () =>{
          navigation.navigate('WhereWillYouBeFlyingTo',{from:text})
        }
        const handleCountryChange = () =>{
        }
   interface City{
    city:string[];
    country:string;
    iso3:string
   }
        const renderList = ({item}:{item:City}) =>{
          
          <View>
            <Text>{item.city}</Text>
          </View>
        }
        const [ query,setQuery] = React.useState('')
        const handleFilter = (text:string) =>{
            if(text.length > 3) {

            }
          const suggestion = data.filter(function(country){
              return country.cities.find(city => city.startsWith(text) ) 
              
              
            
          })
          console.log("sug",suggestion)
        }

  
    return (
      <View style={styles.mainview}>
            <View style={styles.icon}>
                <Icon name ="arrow-back-ios" size={30} color="rgb(92, 110, 248)" onPress={() => navigation.goBack()}></Icon>
            </View>
            <View style={styles.textview}>
              <Text style={styles.textInfo}>Where are you now?</Text>
            </View>
            <View style={styles.inputView}>
              <TextInput style={styles.input} placeholder='Select location' onChangeText={handleFilter} ></TextInput>
                
            </View>
            <View style={styles.btnView}>
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
        marginLeft:10
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
      textInfo:{
        fontWeight:"bold",
        fontSize:50,
        justifyContent:"flex-start",
      },
      textview:{
        width:"100%",
        justifyContent:"flex-start",
        flex:2
      },
      icon:{
        flex:1,
        marginTop: 50,
      },
      btnView:{
        flex:1
      },
      inputView:{
        flex:3,
        width:"100%"
      },
      input:{
        width:"100%",
        borderBottomColor:"gray",
        borderBottomWidth:1
      }
})
export default WhereAreYou
