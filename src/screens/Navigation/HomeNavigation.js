import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, GameIntro, GameLogin, GameQuiz} from '../index';
import {images, SIZES, COLORS, icons, FONTS} from '../../constants';

const gameStack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <gameStack.Navigator initialRouteName="HomeScreen">
      <gameStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <gameStack.Screen
        name="GameIntro"
        component={GameIntro}
        options={{
          headerShown: false,
        }}
      />
      <gameStack.Screen
        name="GameLogin"
        component={GameLogin}
        options={{
          headerShown: false,
        }}
      />
      <gameStack.Screen
        name="GameQuiz"
        component={GameQuiz}
        options={{
          headerShown: false,
        }}
      />
    </gameStack.Navigator>
  );
}
