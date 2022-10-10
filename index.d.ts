import { Component } from "react";

export type Point = $ReadOnly<{ x: Float; y: Float }>;

export interface LinearGradientProps {
  start?: Point;
  end?: Point;
  colors: Array<ColorValue>;
  locations?: Array<Float>;
  useAngle?: boolean;
  angleCenter?: Point;
  angle?: Float;
}

export const LinearGradient: Component<LinearGradientProps>;
