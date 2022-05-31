import React, { AnchorHTMLAttributes } from "react";

export interface ILinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  color?: "white" | "blue";
  fontFamily?: string;
  fontWeight?: "semibold" | "regular";
  textDecoration?: "none";
  fontSize?: string;
}

const Link = ({
  color = "blue",
  fontFamily = "font-Poppins",
  fontWeight = "regular",
  textDecoration = "none",
  fontSize = "text-md",
  ...rest
}: ILinkProps) => {
  const style = `no-underline transition-all duration-300 hover:opacity-60 ${fontSize}`;

  //  LINK WIGHTS
  const regular = `font-normal`;
  const semibold = `font-semibold`;
  const font = `${fontFamily}`;

  const white = `text-white`;
  const blue = `text-angel`;

  return (
    <a
      className={`
        ${style} 
        ${fontFamily === "Poppins" ? font : ""}
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
