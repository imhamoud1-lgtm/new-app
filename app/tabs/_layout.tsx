import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Tabs } from 'expo-router';

export default function RootLayout() {
  return (
    <Tabs
      initialRouteName="profile"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}