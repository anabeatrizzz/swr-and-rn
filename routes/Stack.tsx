import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './Tabs';

const { Navigator, Screen } = createStackNavigator();

export default function Stack(){
  return(
    <NavigationContainer>
      <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="tabs"
      >
        <Screen name="tabs" component={Tabs} />
      </Navigator>
    </NavigationContainer>
  )
}