import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  Login:undefined;
};

export type RootStackRouteProps<T extends keyof RootStackParamList> = {
  navigation: RouteProp<RootStackParamList, T>;
};
