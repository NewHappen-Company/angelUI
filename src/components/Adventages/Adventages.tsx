import React, { HTMLAttributes } from "react";
import IDefaultProps from "../../../@types/defaults";

export interface IAdventagesProps extends HTMLAttributes<HTMLDivElement> {
  sideSize?: string;
}

type IAngelAdventagesProps = IAdventagesProps & IDefaultProps;

const Adventages = ({ 
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
}: IAngelAdventagesProps) => {
  const style = `rounded-xl bg-gradient-to-t from-angelGrayC4 to-angelGrayE2 w-${sideSize} h-${sideSize} flex justify-center items-center`;

  let defaults = `${w} ${h} ${maxWidth} ${maxHeight} ${minWidth} ${minHeight} ${minWidth} ${minHeight} ${p} ${px} ${py} ${pt} ${pb} ${pl} ${pr} ${m} ${mx} ${my} ${mt} ${mb} ${ml} ${mr}`;

  return (
    <div
      className={`
        ${style} 
        ${defaults}
      `}
      {...rest}
    />
  );
};

export default Adventages;
