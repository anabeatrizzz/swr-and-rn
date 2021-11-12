import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Posts from '../pages/posts';
import Users from '../pages/users';

const { Navigator, Screen } = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="posts" component={Posts} />
      <Screen name="users" component={Users} />
    </Navigator>
  )
}