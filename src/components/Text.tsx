import React, { ReactNode } from "react";
import { StyleSheet, Text as RNText, TextProps, TextStyle } from "react-native";
import { COLOR } from "../assets/theme";

interface IText extends TextProps, TextStyle {
  children?: ReactNode;
  color?: keyof typeof COLOR;
}

const Text = ({ children, color, ...props }: IText) => {
  const style = StyleSheet.flatten([
    {
      color: COLOR[color],
    },
  ]);

  return (
    <RNText style={style} {...props}>
      {children}
    </RNText>
  );
};

export default Text;
