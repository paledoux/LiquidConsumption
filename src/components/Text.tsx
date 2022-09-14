import React, { ReactNode } from "react";
import {
  StyleProp,
  StyleSheet,
  Text as RNText,
  TextProps,
  TextStyle,
} from "react-native";
import { COLOR, TEXT_VARIANTS } from "../assets/theme";
import IText from "../interfaces/IText";

const Text = ({
  children,
  color = "text",
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign,
  textDecorationLine,
  textDecorationStyle,
  textDecorationColor,
  textShadowColor,
  textShadowOffset,
  textShadowRadius,
  textTransform,
  variant,
  style,
  ...props
}: IText) => {
  const flattenStyle = StyleSheet.flatten([
    color !== undefined && { color: COLOR[color] },
    fontFamily !== undefined && { fontFamily: fontFamily },
    fontSize !== undefined && { fontSize: fontSize },
    fontStyle !== undefined && { fontStyle: fontStyle },
    fontWeight !== undefined && { fontWeight: fontWeight },
    letterSpacing !== undefined && { letterSpacing: letterSpacing },
    lineHeight !== undefined && { lineHeight: lineHeight },
    textAlign !== undefined && { textAlign: textAlign },
    textDecorationLine !== undefined && {
      textDecorationLine: textDecorationLine,
    },
    textDecorationStyle !== undefined && {
      textDecorationStyle: textDecorationStyle,
    },
    textDecorationColor !== undefined && {
      textDecorationColor: COLOR[textDecorationColor],
    },
    textShadowColor !== undefined && {
      textShadowColor: COLOR[textShadowColor],
    },
    textShadowOffset !== undefined && { textShadowOffset: textShadowOffset },
    textShadowRadius !== undefined && { textShadowRadius: textShadowRadius },
    textTransform !== undefined && { textTransform: textTransform },
    TEXT_VARIANTS[variant],
    style,
  ]) as TextStyle;

  return (
    <RNText style={flattenStyle} {...props}>
      {children}
    </RNText>
  );
};

export default Text;
