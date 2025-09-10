import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/src/constants/Colors';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { HapticTab } from '@/src/components/navigation/HapticTab';

export default function TabLayout() {

  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: Colors.custom.primary,
      tabBarInactiveTintColor: Colors.custom.tint,
      tabBarLabelStyle: { marginTop: 3 }, tabBarButton: HapticTab
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <AntDesign size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: 'Messages',
          headerTitle: '',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="comment-o" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome size={24} name="user-o" color={color} />,
        }}
      />
    </Tabs>
  );
}
