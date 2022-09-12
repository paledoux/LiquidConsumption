import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Pressable } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import Button from "../components/Button";

const HomeScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Home">) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Ajouter une consomation"
        onPress={() => navigation.navigate("AddConsumption")}
      />
    </View>
  );
};

export default HomeScreen;
