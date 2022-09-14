import React, { ReactNode } from "react";
import {
  StyleProp,
  StyleSheet,
  Text as RNText,
  TextProps,
  TextStyle,
  ViewStyle,
} from "react-native";
import { idText } from "typescript";
import { COLOR } from "../assets/theme";

interface IText extends TextProps {
  children?: ReactNode;
  color?: keyof typeof COLOR;
  style?: StyleProp<TextStyle>;
}

const Text = ({ children, color = "text", style, ...props }: IText) => {
  const flattenStyle = StyleSheet.flatten([
    {
      color: COLOR[color],
    },
    style,
  ]);

  return (
    <RNText style={flattenStyle} {...props}>
      {children}
    </RNText>
  );
};

export default Text;
