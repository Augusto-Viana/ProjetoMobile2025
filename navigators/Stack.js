import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Home} from "./source/screens/home.js";
import {Login} from "./source/screens/login.js";

export default function Stack() { 

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Home' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}