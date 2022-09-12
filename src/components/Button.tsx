import React from "react";
import { View, Text, Pressable, PressableProps } from "react-native";
import Box from "./Box";

interface ButtonProps {
  title: string;
  onPress: PressableProps["onPress"];
}

const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <Box backgroundColor="background">
        <Text>{title}</Text>
      </Box>
    </Pressable>
  );
};

export default Button;
