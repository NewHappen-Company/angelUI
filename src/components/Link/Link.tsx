import React, { AnchorHTMLAttributes } from "react";
import IDefaultProps from "../../../@types/defaults";
import '../../styles/angel';

export interface ILinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  color?: "white" | "blue";
  fontFamily?: string;
  fontWeight?: "semibold" | "regular";
  textDecoration?: string;
  fontSize?: string;
}

type IAngelLinkProps = ILinkProps & IDefaultProps;

const Link = ({
  h,
  w,
  maxHeight,
  maxWidth,
  p,
  px,
  py,
  pt,
  pb,
  pl,
  pr,
  m,
  mx,
  my,
  mt,
  mb,
  ml,
  mr,
  minHeight,
  minWidth,
  color = "blue",
  fontFamily = "font-Poppins",
  fontWeight = "regular",
  textDecoration = "no-underline",
  fontSize = "text-md",
  ...rest
}: IAngelLinkProps) => {
  const style = `no-underline transition-all duration-300 hover:opacity-60 ${fontSize}`;

  //  LINK WIGHTS
  const regular = `font-normal`;
  const semibold = `font-semibold`;

  const white = `text-white`;
  const blue = `text-angel`;

  let defaults = `${w} ${h} ${maxWidth} ${maxHeight} ${minWidth} ${minHeight} ${minWidth} ${minHeight} ${p} ${px} ${py} ${pt} ${pb} ${pl} ${pr} ${m} ${mx} ${my} ${mt} ${mb} ${ml} ${mr}`;

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
        ${defaults}
      `}
      {...rest}
    />
  );
};

export default Link;
