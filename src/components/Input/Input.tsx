import React, { InputHTMLAttributes } from "react";

export interface ILinkProps extends InputHTMLAttributes<HTMLInputElement> {
  fontSize?: string;
}

const Input = ({
  fontSize = "text-md",
  ...rest
}: ILinkProps) => {
  const style = `p-1 pb-2 pt-2 ${fontSize}`;

  return (
    <input
      className={`
        ${style} 
      `}
      {...rest}
    />
  );
};

export default Input;
