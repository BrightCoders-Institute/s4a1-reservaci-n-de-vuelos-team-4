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

export type RootStackParamList = {
  Home: {userID:Number};
  Register: undefined;
  Login:undefined;
  Booking:{from?:String,to?:String,date?:String,passangers?:Number};
  SelectDate:{from?:String,to?:String};
  WhereAreYou:{from?:String,to?:String,date?:String,passangers:Number};
  SelectPassengers:{};
  WhereWillYouBeFlyingTo:{from?:String};
  RequestReceived:{from?:String,to?:String,date?:String,passangers?:Number};
}

export type RootStackRouteProps<T extends keyof RootStackParamList> = {
  navigation: RouteProp<RootStackParamList, T>;
};

