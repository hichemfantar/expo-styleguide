import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
export default function ClipboardIcon(props: IconProps) {
  const { size, color, width, height } = props;
  return (
    <Svg
      viewBox="0 0 20 20"
      fill="none"
      width={size || width || 20}
      height={size || height || 20}
      {...props}
    >
      <Path
        d="M13.333 3.333H15A1.667 1.667 0 0116.667 5v11.667A1.666 1.666 0 0115 18.333H5a1.667 1.667 0 01-1.667-1.666V5A1.667 1.667 0 015 3.333h1.667"
        stroke={color || "#000"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.786 10.841h.625v-1.25h-.625v1.25zm-6.4 0h6.4v-1.25h-6.4v1.25zm6.4 3h.625v-1.25h-.625v1.25zm-6.4 0h6.4v-1.25h-6.4v1.25z"
        fill={color || "#000"}
      />
      <Path
        d="M12.5 1.667h-5c-.46 0-.833.45-.833 1.006v2.013c0 .556.373 1.006.833 1.006h5c.46 0 .833-.45.833-1.006V2.673c0-.556-.373-1.006-.833-1.006z"
        stroke={color || "#000"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
