import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Button } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const tabBarColor = isDark ? '#131517' : '#ffffff';

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: tabBarColor,  // Top bar header color
          elevation: 0, // Android: remove shadow
          shadowOpacity: 0, // iOS: remove shadow
          borderBottomWidth: 0, // remove border line
        },
        headerTitleStyle: {
          color: isDark ? '#fff' : '#000', // Set header text color
          fontSize: 20,  // You can also adjust the font size
        },
        headerRight: () => (
          <Button title="Info" onPress={() => alert('Info button pressed!')} />
        ),
        tabBarStyle: {
          backgroundColor: tabBarColor, // Tab bar color
          position: Platform.OS === 'ios' ? 'absolute' : 'relative',
          borderTopWidth: 0, // remove tab bar border
          elevation: 0, // Android
          shadowOpacity: 0, // iOS
        },
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarActiveTintColor: isDark ? '#fff' : '#000',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
