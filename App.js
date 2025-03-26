import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Home} from "./source/screens/home.js";
import {Login} from "./source/screens/login.js";

import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

export default function App() { 

  const Tabs =  createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName='Login'
        screenOptions={{
          tabBarActiveTintColor: "#DB0F00",
          tabBarInactiveTintColor: "#FFF",
          tabBarActiveBackgroundColor: "#000",
          tabBarInactiveBackgroundColor: "#222222",
          headerStyle: {backgroundColor: "#000"},
          headerTintColor: "#DB0F00",
          headerTitleAlign: "center",
          tabBarStyle: {backgroundColor: "#DB0F00"},
        }}  
      >
        <Tabs.Screen name='Login' component={Login}
          options={{
            tabBarIcon: () => (
              <AntDesign name="login" size={24} color="red" />
            ),
          }}
        />
        <Tabs.Screen name='Home' component={Home}
          options={{
            tabBarIcon: () => (
              <Feather name="home" size={24} color="red" />
            ),
          }}
        
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}