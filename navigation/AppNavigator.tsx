import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList, TabParamList } from './types';

// Screens
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CoursesScreen from '../screens/CoursesScreen';

// Stack Navigator
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

// Tab Navigator
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: '#888',
        tabBarLabelStyle: { fontSize: 12 },
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="HomeTab" 
        component={HomeScreen} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }: { color: string, size: number }) => (
            <TabIcon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="ProfileTab" 
        component={ProfileScreen} 
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }: { color: string, size: number }) => (
            <TabIcon name="person" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="CoursesTab" 
        component={CoursesScreen} 
        options={{
          tabBarLabel: 'Cursos',
          tabBarIcon: ({ color, size }: { color: string, size: number }) => (
            <TabIcon name="menu-book" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Simple Tab Icon component using colored squares
const TabIcon = ({ name, color, size }: { name: string, color: string, size: number }) => (
  <View 
    style={{ 
      width: size, 
      height: size, 
      backgroundColor: color,
      borderRadius: size / 4,
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <Text style={{ color: 'white', fontWeight: 'bold' }}>
      {name.charAt(0).toUpperCase()}
    </Text>
  </View>
);

// Main Navigator
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Tabs" component={TabNavigator} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Courses" component={CoursesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
