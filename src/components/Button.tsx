import React from "react";
import { Pressable, PressableProps } from "react-native";
import Box from "./Box";
import Text from "./Text";

interface ButtonProps {
  title: string;
  onPress: PressableProps["onPress"];
}

const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <Box
        height={45}
        justifyContent="center"
        flexDirection="row"
        alignItems="center"
        backgroundColor="primary"
        padding="m"
        margin="m"
        borderRadius="s"
      >
        <Text color="text">{title}</Text>
      </Box>
    </Pressable>
  );
};

export default Button;
