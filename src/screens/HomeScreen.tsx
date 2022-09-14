import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import Button from "../components/Button";
import Box from "../components/Box";
import Text from "../components/Text";
import Icon from "../components/Icon";

const HomeScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Home">) => {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Button onPress={() => navigation.navigate("AddConsumption")}>
        <Text style={{ fontWeight: "bold" }}>Ajouter une consomation</Text>
        <Icon name="plus" size={64} />
      </Button>
    </Box>
  );
};

export default HomeScreen;
