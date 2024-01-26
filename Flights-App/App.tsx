import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Register from './src/components/Register';
import { RootStackParamList } from './src/rutes/RootStackParamList';
import Navigation  from './src/rutes/Navigation';



const Stack = createStackNavigator<RootStackParamList>();
export default function App():React.JSX.Element {

  return (
  <Navigation/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
