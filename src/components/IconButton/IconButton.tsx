import React, { ButtonHTMLAttributes } from "react";

export interface IIconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  sideSize?: string;
}

const IconButton = ({ sideSize = "12", ...rest }: IIconButtonProps) => {
  const style = `h-${sideSize} w-${sideSize} flex justify-center items-center rounded-md bg-angelBlack2 pointer transition-all duration-300 hover:opacity-75`;

  return (
    <button
      className={`
        ${style} 
      `}
      {...rest}
    />
  );
};

export default IconButton;
