import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function HomeScreen ( {navigation} ) {
  return (
    <View style={styles.container}>
      <Button title="Go to profile" 
              onPress={ ()=>navigation.navigate("Profile")}
      />
    </View>
  );
};

function profileScreen() {
  return (
    <View style={styles.container}>
      <Text>This is my profile.</Text>
    </View>
  );
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
            name="Home"
            component={HomeScreen}
            options={ {title:"Welcome"} }
        />
        <Stack.Screen 
            name="Profile"
            component={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
