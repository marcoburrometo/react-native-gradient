import React, { FC } from "react";
import { processColor } from "react-native";

const RNLinearGradientView =
  require(".src//LinearGradientViewNativeComponent").default;

export const LinearGradient = ({ colors, ...rest }) => {
  return <RNLinearGradientView {...rest} colors={colors.map(processColor)} />;
};
