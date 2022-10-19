import React from "react";
import { IconProps } from "../types";
export function WrapLinesIcon(props: IconProps) {
  const {
    title = "Wrap-lines-icon",
    size,
    color,
    width,
    height,
    titleId,
  } = props;

  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      width={size || width || "20px"}
      height={size || height || "20px"}
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.5 4.6189C1.5 4.06661 1.94772 3.6189 2.5 3.6189H17.5C18.0523 3.6189 18.5 4.06661 18.5 4.6189C18.5 5.17118 18.0523 5.6189 17.5 5.6189H2.5C1.94772 5.6189 1.5 5.17118 1.5 4.6189Z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.5 14.6189C1.5 14.0666 1.94772 13.6189 2.5 13.6189H6.5C7.05228 13.6189 7.5 14.0666 7.5 14.6189C7.5 15.1712 7.05228 15.6189 6.5 15.6189H2.5C1.94772 15.6189 1.5 15.1712 1.5 14.6189Z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.5 9.6189C1.5 9.06661 1.94772 8.6189 2.5 8.6189H16C17.3807 8.6189 18.5 9.73818 18.5 11.1189V13.1189C18.5 14.4996 17.3807 15.6189 16 15.6189H13.5V13.6189H16C16.2761 13.6189 16.5 13.395 16.5 13.1189V11.1189C16.5 10.8428 16.2761 10.6189 16 10.6189H2.5C1.94772 10.6189 1.5 10.1712 1.5 9.6189Z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
      <path
        d="M13.5996 11.8567V17.3812L8.94739 14.6186L13.5996 11.8567Z"
        fill={color || "var(--expo-theme-icon-default)"}
      />
    </svg>
  );
}
