import React, { AnchorHTMLAttributes } from "react";
import '../../styles/angel';

export interface ILinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  color?: "white" | "blue";
  fontFamily?: string;
  fontWeight?: "semibold" | "regular";
  textDecoration?: string;
  fontSize?: string;
}

const Link = ({
  color = "blue",
  fontFamily = "font-Poppins",
  fontWeight = "regular",
  textDecoration = "no-underline",
  fontSize = "text-md",
  ...rest
}: ILinkProps) => {
  const style = `no-underline transition-all duration-300 hover:opacity-60 ${fontSize}`;

  //  LINK WIGHTS
  const regular = `font-normal`;
  const semibold = `font-semibold`;

  const white = `text-white`;
  const blue = `text-angel`;

  return (
    <a
      className={`
        ${style} 
        ${fontFamily}
        ${
          fontWeight === "regular"
            ? regular
            : fontWeight === "semibold"
            ? semibold
            : ""
        }
        ${color === "white" ? white : color === "blue" ? blue : ""}
      `}
      {...rest}
    />
  );
};

export default Link;
