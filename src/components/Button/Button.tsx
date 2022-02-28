import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  
}

const Button = (props: ButtonProps) => {
  return <button/>;
};

export default Button;