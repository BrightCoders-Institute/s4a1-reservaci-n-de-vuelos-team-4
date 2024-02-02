import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
export type WhereWillYouBeFlyingToProp = RouteProp<RootStackParamList,"WhereWillYouBeFlyingTo"> 
export type WhereWillYouBeFlyingToNavigationProp = StackNavigationProp<RootStackParamList,"WhereWillYouBeFlyingTo">

export type SelectDateProps = RouteProp<RootStackParamList,"SelectDate">
export type SelectDateNavigationProps = StackNavigationProp<RootStackParamList,"SelectDate">

export type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  Login:undefined;
  Booking:{from:String,to:String};
  SelectDate:{from:String,to:String};
  WhereAreYou:React.FC;
  SelectPassengers:React.FC;
  WhereWillYouBeFlyingTo:{from:String};
   }

export type RootStackRouteProps<T extends keyof RootStackParamList> = {
  navigation: RouteProp<RootStackParamList, T>;
};

