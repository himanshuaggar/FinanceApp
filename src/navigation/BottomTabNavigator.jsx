import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import StatstScreen from '../screens/StatstScreen';
import CardScreen from '../screens/CardScreen';
import {
  HomeIcon,
  CreditCardIcon,
  QrCodeIcon,
} from 'react-native-heroicons/outline';
import QRScannerScreen from '../screens/QrCodeScree';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: 'transparent',
          position: 'absolute',
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            backgroundColor: '#F1F9F6',
            display: "flex",
            position: 'absolute',
            borderTopWidth: 0,
            elevation: 0,
            width: 160,
            marginHorizontal: 120,
            marginBottom: 20,
            borderRadius: 10,
            shadowColor: '#000000',
            shadowOffset: {width: 10, height: 20},
            shadowOpacity: 0.9,
            shadowRadius: 10,
            elevation: 5,
          },
        ],
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <HomeIcon
                size={30}
                strokeWidth={1}
                color="black"
                style={{color: focused ? 'black' : 'gray'}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="QrScreen"
        component={QRScannerScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <QrCodeIcon
                size={30}
                strokeWidth={1}
                color="black"
                style={{color: focused ? 'black' : 'gray'}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Card"
        component={CardScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <CreditCardIcon
                size={30}
                strokeWidth={1}
                color="black"
                style={{color: focused ? 'black' : 'gray'}}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
