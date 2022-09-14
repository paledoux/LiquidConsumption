import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import AddConsumptionScreen from "./src/screens/AddConsumptionScreen";
import AddRecipientScreen from "./src/screens/AddRecipientScreen";

export type RootStackParamList = {
  Home: undefined;
  AddConsumption: Consumption;
  AddRecipient: undefined;
};

export type Consumption = {
  name: string;
  quantity: number;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="AddConsumption"
          options={{ headerShown: false }}
          component={AddConsumptionScreen}
        />
        <Stack.Screen
          name="AddRecipient"
          options={{ headerShown: false }}
          component={AddRecipientScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({

// });
