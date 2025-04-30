import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import {Home} from "./source/screens/home.js";
import {Login} from "./source/screens/login.js";
import {Feed} from "./source/screens/feed.js";
import Counter from './source/screens/counter.js';
import Register from './source/screens/register.js';

import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Products from './source/screens/products.js';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

function Tabs() {

  const Tabs =  createBottomTabNavigator();

  return (
    <Tabs.Navigator
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
    <Tabs.Screen name='Home' component={Home}
      options={{
        tabBarIcon: () => (
          <Feather name="home" size={24} color="red" />
        ),
      }}
    />
    <Tabs.Screen name='Feed' component={Feed}
      options={{
        tabBarIcon: () => (
          <MaterialIcons name="feed" size={24} color="red" />
        ),
      }}
    />
    <Tabs.Screen name='Counter' component={Counter}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons name="counter" size={24} color="red" />
        ),
      }}
    />
        <Tabs.Screen name='Products' component={Products}
      options={{
        tabBarIcon: () => (
          <FontAwesome5 name="shopping-cart" size={24} color="red" />
        ),
      }}
    />
  </Tabs.Navigator>    
  )
}

export default function App() { 

const Stack = createStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Login}
          options={{
            headerStyle: {backgroundColor: "#000"},
            headerTintColor: "#DB0F00",
            headerTitleAlign: "center",
          }}
          />
          <Stack.Screen name='Register' component={Register}
          options={{
            headerStyle: {backgroundColor: "#000"},
            headerTintColor: "#DB0F00",
            headerTitleAlign: "center",
          }}
          />
          <Stack.Screen name='Tabs' component={Tabs}
          options={{
            headerShown: false
          }}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}