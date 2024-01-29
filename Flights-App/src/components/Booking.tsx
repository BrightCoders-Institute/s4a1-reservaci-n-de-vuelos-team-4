import React from 'react'
import { View, Text, SafeAreaView,StyleSheet,TextInput } from 'react-native'

const Booking:React.FC = () => {
  return (
    <SafeAreaView>
        <View style={styles.mainView}>
            <View style={styles.infoFlight}>

                <View style={styles.infoStarting}>
                 <Text style= {styles.textInfo}> BEG </Text>
                 <Text style= {styles.textInfo2}> Serbia </Text>
                 <View style={styles.lineHorizontal} />
                </View>

                <View style={styles.infoDestination}>
                 <Text style= {styles.textInfoDestination}> AMS </Text>
                 <Text style= {styles.textInfo2}> Netherlands </Text>
                 <View style={styles.lineHorizontal} />
               </View>

            </View> 
            <View style={styles.inputView}>
                <TextInput style={styles.input} placeholder='Select location'/>
            </View>
               
        </View>
    </SafeAreaView>
  )
}
export default Booking

const styles = StyleSheet.create({

    mainView:{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        marginTop: 40,
    },
    infoFlight:{
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-between',
    }, 

    infoStarting:{
        flex: 1,
        alignItems: 'flex-start', // Alinear a la izquierda
    },

    infoDestination:{
        flex: 1,
        alignItems: 'flex-end', // Alinear a la derecha
    },
    textInfo:{
        marginRight: '70%', 
        fontWeight:"bold", 
        fontSize: 26,
    }, 
    textInfoDestination:{
        fontWeight:"bold", 
        fontSize: 26,
    },
    textInfo2:{
        marginTop: 1,
        marginLeft: 2,
        color: 'gray', 
    },
    lineHorizontal:{
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        width: 160, 
    },
    input:{
        borderBottomColor:"gray",
        borderBottomWidth:1,
        borderTopWidth:0,
        
       
    },
    inputView:{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        
    }
    });
