import React, { InputHTMLAttributes } from "react";
import '../../styles/angel';

export interface ILinkProps extends InputHTMLAttributes<HTMLInputElement> {
  fontSize?: string;
  bg?: string; 
  phC?: string;
  w?: string;
  width?: string;
  h: 'h-10' | 'h-40' | 'h-56' | 'h-64' | 'h-96';
  height: 'h-10' | 'h-40' | 'h-56' | 'h-64' | 'h-96';
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
  const style = `p-4 pb-2 pt-2 rounded font-Poppins ${fontSize} outline-none ${bg} ${w || width}`;
  let defaults = `${bg} ${w || width} ${h || "h-56"}`;

  return (
    <input
      className={`
        ${style} 
        ${placeholderColor || "placeholder-angelGray"}
        ${h || height}
      `}
      {...rest}
    />
  );
};

export default Input;
