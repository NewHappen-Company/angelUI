import React, { ButtonHTMLAttributes } from "react";
import "./button.css";
import "./dangerButtons.css";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnType?: "primary" | "default" | "outlined" | "dashed" | "text" | "link";
  rounded?: boolean;
  shape?: "rectangle" | "round" | "circle";
  size?: "small" | "medium" | "large";
  danger?: boolean;
}

const Button = ({ 
  btnType = "default",
  rounded = true,
  shape = "rectangle",
  size = "medium",
  danger = false,
  ...rest 
}: IButtonProps) => {
  return(
    <button 
      className={`
        ${btnType} 
        ${rounded && "rounded"}
        ${shape}
        ${size}
        ${danger && "danger"}
      `} 
      {...rest}
    />
  );
};

export default Button;