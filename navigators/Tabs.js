import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Home} from "./source/screens/home.js";
import {Login} from "./source/screens/login.js";

export default function Tabs() { 

  const Tabs =  createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name='Login' component={Login}/>
        <Tabs.Screen name='Home' component={Home}/>
      </Tabs.Navigator>
    </NavigationContainer>
  );
}