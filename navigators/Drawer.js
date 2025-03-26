import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {Home} from "./source/screens/home.js";
import {Login} from "./source/screens/login.js";

export default function Drawer() { 

  const Drawer =  createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Login' component={Login}/>
        <Drawer.Screen name='Home' component={Home}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}