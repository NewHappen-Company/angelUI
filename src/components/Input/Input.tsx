import React, { InputHTMLAttributes } from "react";
import IDefaultProps from "../../../@types/defaults";
import '../../styles/angel';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  fontSize?: string;
  bg?: string; 
  phC?: string;
}

type IAngelInputProps = IInputProps & IDefaultProps;

const Input = ({
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
  fontSize = "text-sm",
  bg = "bg-angelWhite",
  phC = "angelGray",
  ...rest
}: IAngelInputProps) => {
  let placeholderColor = `placeholder-${phC}`;
  const style = `p-4 pb-2 pt-2 rounded font-Poppins ${fontSize} outline-none`;
  let defaults = `${bg} ${w} ${h} ${maxWidth} ${maxHeight} ${minWidth} ${minHeight} ${minWidth} ${minHeight} ${p} ${px} ${py} ${pt} ${pb} ${pl} ${pr} ${m} ${mx} ${my} ${mt} ${mb} ${ml} ${mr}`;

  return (
    <input
      className={`
        ${style} 
        ${placeholderColor || "placeholder-angelGray"}
        ${defaults}
      `}
      {...rest}
    />
  );
};

export default Input;
