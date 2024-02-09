import React, { useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity,Modal, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, WhereWillYouBeFlyingToNavigationProp, WhereWillYouBeFlyingToProp } from '../rutes/RootStackParamList';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Booking from './Booking';
import data from "../data/countrys";
interface WhereWillYouBeFlyingTo{
    route:WhereWillYouBeFlyingToProp;
    navigation:WhereWillYouBeFlyingToNavigationProp;
}
const  WhereWillYouBeFlyingTo :React.FC<WhereWillYouBeFlyingTo>=({route,navigation}) => {
  const from = route.params.from
  const fromIso3 = route.params.fromIso3
  const [flyingTo,setFliyingTo] = React.useState({
    to:'',
    toIso3:''
  })
  const [modalVisible, setModalVisible] = React.useState(false);

  const handleSelectCity = (city: string, iso3: string) => {

    setModalVisible(false)
    setFliyingTo({ to: city, toIso3: iso3 })
  }
  const RenderList = (item: any) => {
    return (
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>
          {item.item.iso3}
        </Text>

        <View style={{ marginLeft: 5 }}>
          {item.item.cities.map((city: string) => {
            return (
              <TouchableOpacity
                style={{ padding: 4, borderBottomColor: "gray" }}
                key={city}
                onPress={() => handleSelectCity(city, item.item.iso3)}
              >
                <Text style={{ fontSize: 20 }}>{city}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  const handleNavigate = () =>{
    navigation.navigate("SelectDate",{to:flyingTo.to,from:from,fromIso3:fromIso3, toIso3:flyingTo.toIso3})
  }
    return (
        <View style={styles.mainview}>
            
            <View style={styles.icon}>
                <Icon style={styles.arrow} name ="arrow-back-ios" size={30} color="rgb(92, 110, 248)" onPress={() => navigation.goBack()}></Icon>
                <Booking from={from} fromIso3={fromIso3} /> 
            </View>
            <View style={styles.textview}>
                
              <Text style={styles.textInfo}>Where will you be flying to?</Text>
            </View>
            <View style={styles.inputView}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View style={styles.input}>
            {
              flyingTo && <Text>{flyingTo.to + ", "}{flyingTo.toIso3}</Text>
            }
            {
              flyingTo.to == '' && <Text>Select location</Text>
            }

          </View>
        </TouchableOpacity>

        <Modal
          visible={modalVisible}
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
          animationType={'slide'}


        >

          <View style={{ flex: 1, justifyContent: "flex-end", }}>
            <View style={{ backgroundColor: 'white', padding: 20, alignSelf: "center", width: "100%", height: "55%" }}>
              <FlatList
                data={data}
                keyExtractor={item => item.iso3}
                renderItem={({ item }) => <RenderList item={item} />}

              >

              </FlatList>
            </View>
          </View>
        </Modal>
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