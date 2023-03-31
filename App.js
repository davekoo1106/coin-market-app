import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Icon } from '@rneui/themed';
import { Text, View } from 'react-native';


import HomeScreen from './screens/HomeScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import ProfileScreen from './screens/ProfileScreen';
import PriceScreen from './screens/PriceScreen';
import PortfolioScreen from './screens/PortfolioScreen';
import TradeScreen from './screens/TradeScreen';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#F58549"
        }}
      >
        <Tab.Screen 
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarLabel:'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon 
                name = "home" color={color} size={size}
              />
            )
          }}
        />
        <Tab.Screen 
          name="Search"
          component={PortfolioScreen}
          options={{
            tabBarLabel: 'Portfolio',
            tabBarIcon: ({ color, size }) => (
              <Icon 
                name = "pie-chart" color={color} size={size}
              />
            ),
          }}
        />
        <Tab.Screen 
          name="Trade"
          component={TradeScreen}
          options={{
            tabBarLabel: 'Trade',
            tabBarIcon: ({ color, size }) => (
              <Icon 
                name = "sync" color={color} size={size}
              />
            )
          }}
        />
        <Tab.Screen 
          name="Prices"
          component={PriceScreen}
          options={{
            tabBarLabel: 'Prices',
            tabBarIcon: ({ color, size }) => (
              <Icon 
                name = "bar-chart" color={color} size={size}
              />
            )
          }}
        />
        <Tab.Screen 
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Icon 
                name = "person" color={color} size={size}
              />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

