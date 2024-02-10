import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type WhereWillYouBeFlyingToProp = RouteProp<RootStackParamList,"WhereWillYouBeFlyingTo"> 
export type WhereWillYouBeFlyingToNavigationProp = StackNavigationProp<RootStackParamList,"WhereWillYouBeFlyingTo">

export type SelectDateProps = RouteProp<RootStackParamList,"SelectDate">
export type SelectDateNavigationProps = StackNavigationProp<RootStackParamList,"SelectDate">

export type SelectPassengersProps = RouteProp<RootStackParamList,"SelectPassengers">
export type SelectPassengersNavigationProps = StackNavigationProp<RootStackParamList,"SelectPassengers">

export type WhereAreYouProp = RouteProp<RootStackParamList,"WhereAreYou">
export type WhereAreYouNavigationProp = StackNavigationProp<RootStackParamList,"WhereAreYou">

export type RequestReceivedProps = RouteProp<RootStackParamList,"RequestReceived">
export type RequestReceivedNavigationProp = StackNavigationProp<RootStackParamList,"RequestReceived">

export type MyFlightsProps = RouteProp<RootStackParamList,"MyFlights">
export type MyFlightsNavigation = StackNavigationProp<RootStackParamList,"MyFlights">

export type RootStackParamList = {
  Register: undefined;
  Login:undefined;
  Booking:{from?:String,to?:String,date?:String,passangers?:Number, fromIso3?:String, toIso3?:String};
  SelectDate:{from?:String,to?:String, fromIso3?:String, toIso3?:String};
  WhereAreYou:undefined;
  SelectPassengers:{from?:String,to?:String,date?:String,fromIso3?:String, toIso3?:String};
  WhereWillYouBeFlyingTo:{from?:String,fromIso3?:String};
  RequestReceived:{from?:String,to?:String,date?:String,passangers?:Number,fromIso3?:String, toIso3?:String};
  MyFlights:undefined;
}

export type RootStackRouteProps<T extends keyof RootStackParamList> = {
  navigation: RouteProp<RootStackParamList, T>;
};

