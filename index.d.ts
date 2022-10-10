import { Component } from "react";
import { ViewProps } from "react-native";

export type Point = $ReadOnly<{ x: Float; y: Float }>;

export interface LinearGradientProps extends ViewProps {
  start?: Point;
  end?: Point;
  colors: Array<string>;
  locations?: Array<Float>;
  useAngle?: boolean;
  angleCenter?: Point;
  angle?: Float;
}
export default class LinearGradient extends Component<
  LinearGradientProps,
  any
> {
  static defaultProps: {
    colors: string[];
  };
  render(): JSX.Element;
}
