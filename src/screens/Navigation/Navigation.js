import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {images, SIZES, COLORS, icons, FONTS} from '../../constants';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  LoginScreen,
  OtpScreen,
  PhoneLogin,
  HomeScreen,
  GameScreen,
  ProfileNavigation,
  HomeNavigation,
  ProfileScreen,
} from '../index';
import {useTranslation} from 'react-i18next';

const AuthStack = createStackNavigator();
const MainStack = createBottomTabNavigator();
const RootStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName="LanguageLogin">
      <AuthStack.Screen
        name="LanguageLogin"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="PhoneLogin"
        component={PhoneLogin}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="OTP"
        component={OtpScreen}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};

const MainNavigator = () => {
  const {i18n, t} = useTranslation();
  return (
    <MainStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarStyle: {
          height: 95,
          elevation: 5,
          textAlign: 'center',
          justifyContent: 'center',
        },
        tabBarIconStyle: {marginTop: 12},
        tabBarLabelStyle: {
          fontWeight: '500',
          fontSize: 14,
          lineHeight: 15,
          paddingBottom: 30,
          paddingTop: 5,
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
      }}>
      <MainStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: t('common:all-games-bottom-tab'),
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={icons.packman_2} size={24} />
            ) : (
              <Image source={icons.packman_1} size={24} />
            ),
        }}
      />
      <MainStack.Screen
        name="Game"
        component={GameScreen}
        options={{
          headerShown: false,
          tabBarLabel: t('common:play-game-bottom-tab'),
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={icons.game_app_2} size={24} />
            ) : (
              <Image source={icons.game_app_1} size={24} />
            ),
        }}
      />
      <MainStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarLabel: t('common:profile-bottom-tab'),
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={icons.user2} size={24} />
            ) : (
              <Image source={icons.user1} size={24} />
            ),
        }}
      />
    </MainStack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Auth">
        <RootStack.Screen name="Auth" component={AuthNavigator} />
        <RootStack.Screen name="Main" component={MainNavigator} />
        <RootStack.Screen name="HomeNavigation" component={HomeNavigation} />
        <RootStack.Screen
          name="ProfileNavigation"
          component={ProfileNavigation}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
