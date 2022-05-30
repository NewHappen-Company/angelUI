import React, { AnchorHTMLAttributes } from "react";

export interface ILinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  color?: "white" | "blue";
  fontFamily?: string;
  fontWeight?: "semibold" | "regular";
  textDecoration?: "none";
}

const Link = ({
  color = "blue",
  fontFamily = "Poppins",
  fontWeight = "regular",
  textDecoration = "none",
  ...rest
}: ILinkProps) => {
  const style = "no-underline transition-all duration-300 hover:opacity-60";

  //  LINK WIGHTS
  const regular = `font-normal`;
  const semibold = `font-semibold`;
  const font = `font-Poppins`;

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
