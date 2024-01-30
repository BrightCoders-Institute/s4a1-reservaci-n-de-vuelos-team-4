import React, { useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity,Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../rutes/RootStackParamList';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Booking from './Booking';
const  WhereWillYouBeFlyingTo :React.FC=() => {

  const navigation = useNavigation()
    const [countries, setContries] = React.useState([])
    const [filter,setFilter] = React.useState<string>('')

    const getData = async () =>{
        const res = await fetch('https://countriesnow.space/api/v0.1/countries')
        const data = await res.json()
        setContries(data)

    }
    const handleFilterChange = (text:string):void => {
        setFilter(text)
    }    
 const handleFilter = (text:string):void =>{ 
    const filtered = countries.filter((item:any) => {
        return item.country.toLowerCase().includes(text.toLowerCase());
      });
      setFilter(text);
      console.log(filtered);
    }
    useEffect(() =>{
        getData()
    },[])
  
    return (
        <View style={styes.mainview}>
            
            <View style={styes.icon}>
                <Icon name ="arrow-back-ios" size={30} color="rgb(92, 110, 248)" onPress={() => navigation.goBack()}></Icon>
                <Booking/> 
            </View>
            <View style={styes.textview}>
                
              <Text style={styes.textInfo}>Where will you be flying to?</Text>
            </View>
            <View style={styes.inputView}>
                <TextInput style={styes.input} placeholder='Select location' onChangeText={(text: string) => handleFilter(text)}value={filter} />
            </View>
            <View style={styes.btnView}>
                <TouchableOpacity style={styes.btnStyle}>
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
        fontSize:48,
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
export default WhereWillYouBeFlyingTo