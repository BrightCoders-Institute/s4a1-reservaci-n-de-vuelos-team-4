import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from "../components/Register";
import Login from "../components/Login";
import Booking from "../components/Booking";

import { RootStackParamList } from './RootStackParamList';
import WhereAreYou from '../components/WhereAreYou';
import SelectPassengers from '../components/SelectPassengers';
import WhereWillYouBeFlyingTo from '../components/WhereWillYouBeFlyingTo';
import SelectDate from '../components/SelectDate';
import RequestReceived from '../components/RequestReceived';
import MyFlights from '../components/MyFlights';



const Stack = createNativeStackNavigator();

function MyStack () {

    return(
        <Stack.Navigator initialRouteName='Login'>
             <Stack.Screen name ="Login" component={Login} options={{headerShown: false}}/>
             <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
             <Stack.Screen name="Booking" component={Booking} options={{headerShown: false}} />
             <Stack.Screen name="WhereAreYou" component={WhereAreYou} options={{headerShown: false}} />
             <Stack.Screen name="SelectPassengers" component={SelectPassengers} options={{headerShown: false}} />
             <Stack.Screen name="WhereWillYouBeFlyingTo" component={WhereWillYouBeFlyingTo} options={{headerShown: false}} />
             <Stack.Screen name="SelectDate" component={SelectDate} options={{headerShown:false}}/>
             <Stack.Screen name="RequestReceived" component={RequestReceived} options={{ headerShown: false }} />
             <Stack.Screen name="MyFlights" component={MyFlights} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
// <Stack.Screen name="Booking" component={} options={{headerShown:false}}/> 

export default function Navigation() {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }

