import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

interface BookingProps {
    from?: String;
    to?: String;
}
const Booking: React.FC<BookingProps> = ({ from, to }) => {
    return (
        <SafeAreaView>
            <View style={styles.mainView}>
                <View style={styles.infoFlight}>

                    <View style={styles.infoStarting}>
                        <Text style={styles.textInfo}>{from}</Text>
                        <Text style={styles.textInfo2}> Serbia </Text>

                    </View>

                    <View>
                        <Icon name='airplanemode-active' size={30} color="#4867aa" style={{ transform: [{ rotate: '90deg' }] }} />
                    </View>
                
                        
                        <View style={styles.infoDestination}>

        {
            to != undefined &&
            <View>
            <Text style={styles.textInfoDestination}>{to}</Text>
            <Text style={styles.textInfo2}> Netherlands </Text>

        </View>


        }
                           

                        </View>
                    



                </View>

            </View>
        </SafeAreaView>
    )
}
export default Booking

const styles = StyleSheet.create({

    mainView: {
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        borderBottomColor: "gray",
        borderBottomWidth: 0.5,
        margin: 15,
        width: "auto"




    },
    infoFlight: {

        flexDirection: 'row',
        alignItems: 'center',

    },

    infoStarting: {


        flex: 1,
        alignItems: 'flex-start', // Alinear a la izquierda
    },

    infoDestination: {


        flex: 1,
        alignItems: 'flex-end', // Alinear a la derecha
    },
    textInfo: {

        fontWeight: "bold",
        fontSize: 25,
    },
    textInfoDestination: {
        fontWeight: "bold",
        fontSize: 25,
    },
    textInfo2: {

        color: 'gray',
    },
    input: {
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        borderTopWidth: 0,


    },
    inputView: {
        alignItems: "center",
        display: "flex",
        justifyContent: "center",

    }
});
