import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  ProfileScreen,
  EditScreen,
  HistoryScreen,
  LanguageScreen,
  HelpScreen,
} from '../index';

const profileStack = createStackNavigator();

const ProfileNavigation = () => {
  return (
    <profileStack.Navigator initialRouteName="ProfileScreen">
      <profileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <profileStack.Screen
        name="EditProfile"
        component={EditScreen}
        options={{headerShown: false}}
      />
      <profileStack.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{headerShown: false}}
      />
      <profileStack.Screen
        name="LanguageScreen"
        component={LanguageScreen}
        options={{headerShown: false}}
      />
      <profileStack.Screen
        name="HelpScreen"
        component={HelpScreen}
        options={{headerShown: false}}
      />
    </profileStack.Navigator>
  );
};

export default ProfileNavigation;
