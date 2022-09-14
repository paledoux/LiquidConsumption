import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import Button from "../components/Button";
import Box from "../components/Box";

const HomeScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Home">) => {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Button
        title="Ajouter une consomation"
        onPress={() => navigation.navigate("AddConsumption")}
      />
      <Button
        title="Ajouter une consomation"
        onPress={() => navigation.navigate("AddConsumption")}
      />
    </Box>
  );
};

export default HomeScreen;
