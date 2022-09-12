import React from "react";
import { View, Text, Pressable, PressableProps } from "react-native";

interface ButtonProps {
  title: string;
  onPress: PressableProps["onPress"];
}

const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <View style={{ backgroundColor: "red" }}>
        <Text>{title}</Text>
      </View>
    </Pressable>
  );
};

export default Button;
