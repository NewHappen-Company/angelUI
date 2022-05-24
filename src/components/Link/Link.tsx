import React, { AnchorHTMLAttributes } from "react";
import "./link.css";

export interface ILinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  color?: "white" | "blue";
  fontFamily?: string,
  fontWeight?: "semibold" | "regular",
  textDecoration?: "none",
}

const Link = ({
  color = "blue",
  fontFamily = "Poppins",
  fontWeight = "regular",
  textDecoration = "none",
  ...rest
}: ILinkProps) => {
  return (
    <a
      className={`
        ${color} 
        ${fontFamily}
        ${fontWeight}
        ${textDecoration}
      `}
      {...rest}
    />
  );
};

export default Link;
