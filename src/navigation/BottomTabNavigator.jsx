import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import StatstScreen from '../screens/StatstScreen';
import CardScreen from '../screens/CardScreen';
import QRScannerScreen from '../screens/QrCodeScree';
import { HomeIcon, CreditCardIcon, QrCodeIcon} from 'react-native-heroicons/outline';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { TransitionPresets } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let IconComponent;
          let iconName;

          switch (route.name) {
            case 'Home':
              IconComponent = HomeIcon;
              iconName = 'Home';
              break;
            case 'QrScreen':
              IconComponent = QrCodeIcon;
              iconName = 'QRScannerScreen';
              break;
            case 'Card':
              IconComponent = CreditCardIcon;
              iconName = 'CardScreen';
              break;
          }

          return (
            <IconComponent
              size={30}
              strokeWidth={1}
              color={focused ? 'black' : 'gray'}
            />
          );
        },
        tabBarStyle: {
          backgroundColor: '#F1F9F6',
          display: 'flex',
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
        tabBarShowLabel: false,
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="QrScreen" component={QRScannerScreen} />
      <Tab.Screen name="Card" component={CardScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
