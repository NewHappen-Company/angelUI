import React, { InputHTMLAttributes, useState } from "react";
import IDefaultProps from "../../../@types/defaults";
import { useActiveInputProps } from "../../hooks/src/useActiveInput";
import "../../styles/angel";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  fontSize?: string;
  bg?: string;
  phC?: string;
  legend?: string;
  isFieldset?: boolean;
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
  legend,
  isFieldset,
  ...rest
}: IAngelInputProps) => {  
  const { isActive, onBlur, onFocus } = useActiveInputProps();

  let placeholderColor = `placeholder-${phC}`;
  const style = `p-4 pb-2 pt-2 rounded font-Poppins ${fontSize} outline-none`;
  let defaults = `${bg} ${w} ${h} ${maxWidth} ${maxHeight} ${minWidth} ${minHeight} ${minWidth} ${minHeight} ${p} ${px} ${py} ${pt} ${pb} ${pl} ${pr} ${m} ${mx} ${my} ${mt} ${mb} ${ml} ${mr}`;

  const fieldset = `px-4 pb-3 pt-1.5 rounded font-Poppins ${fontSize} outline-none border-solid ${
    isActive ? "border-angel border-2" : "border-transparent border-2"
  }`;
  const style2 = `font-Poppins ${fontSize} outline-none`;
  let defaults2 = `${bg} ${maxWidth} ${maxHeight} ${minWidth} ${minHeight} ${minWidth} ${minHeight}`;

  if (!isFieldset) {
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
  } else {
    return (
      <fieldset
        className={`
          ${defaults}
          ${fieldset}`}
        >
        <legend className={`text-sm font-Poppins ${isActive ? "text-angel" : "legends-Gray"} px-1`}>
          {legend || "Label"}
        </legend>
        <input
          className={`
            ${style2}
            ${placeholderColor || "placeholder-angelGray"}
            ${defaults2}
          `}
          onFocus={onFocus}
          onBlur={onBlur}
          {...rest}
        />
      </fieldset>
    );
  }
};

export default Input;
