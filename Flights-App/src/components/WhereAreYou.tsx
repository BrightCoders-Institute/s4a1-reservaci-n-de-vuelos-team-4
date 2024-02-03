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

    const [text, setText] = React.useState<string>('')
    

   
    
  
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

        const handleFilter = () =>{
          const suggestion = data.filter(function(country){
              return country.cities.find(city => city.startsWith(text) ) 
              
              
            
          })
          console.log("sug",suggestion)
        }

  
    return (
        <View style={styes.mainview}>
            <View style={styes.icon}>
                <Icon name ="arrow-back-ios" size={30} color="rgb(92, 110, 248)" onPress={() => navigation.goBack()}></Icon>
            </View>
            <View style={styes.textview}>
              <Text style={styes.textInfo}>Where are you now?</Text>
             
              
            </View>
            <View style={styes.inputView}>
              <TextInput style={styes.input} placeholder='Select location' onChangeText={setText} onChange={handleFilter}></TextInput>
                
            </View>
            <View style={styes.btnView}>
                <TouchableOpacity style={styes.btnStyle} onPress={handleNavigate}>
                    <Text style={styes.btnText}>Next</Text>
                </TouchableOpacity>
            </View>
            
        </View>
  )
}
const styes = StyleSheet.create({
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
        flex:1
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
