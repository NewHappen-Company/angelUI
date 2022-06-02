import React, { ButtonHTMLAttributes } from "react";
import IDefaultProps from "../../../@types/defaults";

export interface IIconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  sideSize?: string;
}

type IAngelIconButtonProps = IIconButtonProps & IDefaultProps;

const IconButton = ({ 
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
  sideSize = "12", 
  ...rest
}: IAngelIconButtonProps) => {
  const style = `h-${sideSize} w-${sideSize} flex justify-center items-center rounded-md bg-angelBlack2 pointer transition-all duration-300 hover:opacity-75`;

  let defaults = `${w} ${h} ${maxWidth} ${maxHeight} ${minWidth} ${minHeight} ${minWidth} ${minHeight} ${p} ${px} ${py} ${pt} ${pb} ${pl} ${pr} ${m} ${mx} ${my} ${mt} ${mb} ${ml} ${mr}`;

  return (
    <button
      className={`
        ${style} 
        ${defaults}
      `}
      {...rest}
    />
  );
};

export default IconButton;
