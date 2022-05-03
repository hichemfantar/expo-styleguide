import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconProps } from "../types";
export default function ErrorIcon(props: SvgProps & IconProps) {
  const { size, color, width, height } = props;
  return (
    <Svg
      width={size || width || 20}
      height={size || height || 20}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.167 1.667a2.5 2.5 0 00-2.5 2.5v11.666a2.5 2.5 0 002.5 2.5h11.666a2.5 2.5 0 002.5-2.5V4.167a2.5 2.5 0 00-2.5-2.5H4.167zm3.089 4.41a.833.833 0 00-1.179 1.179L8.821 10l-2.744 2.744a.833.833 0 101.179 1.178L10 11.178l2.744 2.744a.833.833 0 101.178-1.178L11.178 10l2.744-2.744a.833.833 0 10-1.178-1.179L10 8.821 7.256 6.077z"
        fill={color || "#000"}
      />
    </Svg>
  );
}
