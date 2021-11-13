import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cities from '../pages/cities';
import Neighborhoods from '../pages/neighborhoods';

const { Navigator, Screen } = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="cities" component={Cities} />
      <Screen name="neighborhoods" component={Neighborhoods} />
    </Navigator>
  )
}