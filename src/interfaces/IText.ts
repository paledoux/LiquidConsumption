import { ReactNode } from "react";
import { StyleProp, TextProps, TextStyle } from "react-native";
import { COLOR, TEXT_VARIANTS } from "../assets/theme";

export default interface IText extends TextProps {
  children?: ReactNode;
  color?: keyof typeof COLOR;
  fontFamily?: TextStyle["fontFamily"];
  fontSize?: TextStyle["fontSize"];
  fontStyle?: TextStyle["fontStyle"];
  fontWeight?: TextStyle["fontWeight"];
  letterSpacing?: TextStyle["letterSpacing"];
  lineHeight?: TextStyle["lineHeight"];
  textAlign?: TextStyle["textAlign"];
  textDecorationLine?: TextStyle["textDecorationLine"];
  textDecorationStyle?: TextStyle["textDecorationStyle"];
  textDecorationColor?: keyof typeof COLOR;
  textShadowColor?: keyof typeof COLOR;
  textShadowOffset?: TextStyle["textShadowOffset"];
  textShadowRadius?: TextStyle["textShadowRadius"];
  textTransform?: TextStyle["textTransform"];
  variant?: keyof typeof TEXT_VARIANTS;
  style?: StyleProp<TextStyle>;
}
