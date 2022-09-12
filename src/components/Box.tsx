import React, { ReactNode } from "react";
import { View, ViewProps, ViewStyle, StyleSheet } from "react-native";

interface IBox extends ViewProps, ViewStyle {
  children?: ReactNode;
  backgroundColor?: keyof typeof COLOR;
}

const palette = {
  white: "#fff",
  lightGray: "#e5e5e5",
  lightGray2: "#eff0f1",
  lightGray3: "#C9C9C9",
  darkBlueBlack: "#1c1c1e",
  mainBlue: "#004E7D",
  black: "#000000",
  lightBlack: "#1E1E1E",
  lightPink: "#fce5fc",
  lightPink2: "rgba(252, 229, 252,0.7)",
  red: "#F32013",
};

const COLOR = {
  primary: palette.mainBlue,
  background: palette.lightGray3,
  text: palette.darkBlueBlack,
  accessory: palette.mainBlue,
  alert: palette.red,
};

const Box = ({ children, backgroundColor, ...props }: IBox) => {
  const style = StyleSheet.flatten([
    {
      backgroundColor: COLOR[backgroundColor],
    },
  ]);

  return (
    <View style={style} {...props}>
      {children}
    </View>
  );
};

export default Box;
