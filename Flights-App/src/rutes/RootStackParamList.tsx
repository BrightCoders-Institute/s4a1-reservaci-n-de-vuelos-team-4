import { RouteProp } from '@react-navigation/native';
import React from 'react';

export type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  Login:undefined;
  Booking:undefined;
  SelectDate:React.FC;
  WhereAreYou:React.FC;
  SelectPassengers:React.FC;
  WhereWillYouBeFlyingTo:React.FC;
};

export type RootStackRouteProps<T extends keyof RootStackParamList> = {
  navigation: RouteProp<RootStackParamList, T>;
};
