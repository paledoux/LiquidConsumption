import React, { ReactNode } from "react";
import { Pressable, PressableProps } from "react-native";
import Box from "./Box";

interface ButtonProps extends PressableProps {
  onPress: PressableProps["onPress"];
  children: ReactNode;
}

const Button = ({ onPress, children, ...props }: ButtonProps) => {
  return (
    <Pressable onPress={onPress} {...props}>
      <Box
        min-height={45}
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        backgroundColor="primary"
        padding="m"
        margin="m"
        borderRadius="s"
      >
        {children}
      </Box>
    </Pressable>
  );
};

export default Button;
