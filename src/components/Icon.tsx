import React, { ComponentProps } from "react";
import { View, Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { COLOR } from "../assets/theme";

interface IconProps {
  name: ComponentProps<typeof Feather>["name"];
  size?: number;
  color?: keyof typeof COLOR;
}

const Icon = ({ name, size = 32, color = "icon" }: IconProps) => {
  return <Feather name={name} size={size} color={COLOR[color]} />;
};

export default Icon;
