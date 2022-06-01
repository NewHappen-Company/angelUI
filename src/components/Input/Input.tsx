import React, { InputHTMLAttributes } from "react";
import "../../../styles/angel.ts";

export interface ILinkProps extends InputHTMLAttributes<HTMLInputElement> {
  fontSize?: string;
  bg?: string; 
  phC?: string;
  w?: string;
  width?: string;
  h?: string;
  height?: string;
}

const Input = ({
  h = "h-10",
  height,
  w = "w-full",
  width,
  fontSize = "text-sm",
  bg = "bg-angelWhite",
  phC = "angelGray",
  ...rest
}: ILinkProps) => {
  let placeholderColor = `placeholder-${phC}`;
  const style = `p-4 pb-2 pt-2 rounded font-Poppins ${fontSize} outline-none ${bg} ${w || width} ${h || height}`;

  return (
    <input
      className={`
        ${style} 
        ${placeholderColor || "placeholder-angelGray"}
      `}
      {...rest}
    />
  );
};

export default Input;
