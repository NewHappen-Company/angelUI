import React, { ButtonHTMLAttributes } from "react";
import "./button.css";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnType?: "primary" | "default" | "outlined" | "dashed" | "text" | "link";
  rounded?: boolean;
  shape?: "rectangle" | "round" | "circle";
  size?: "small" | "medium" | "large";
}

const Button = ({ 
  btnType = "default",
  rounded = true,
  shape = "rectangle",
  size = "medium",
  ...rest 
}: IButtonProps) => {
  return(
    <button 
      className={`
        ${btnType} 
        ${rounded && "rounded"}
        ${shape}
        ${size}
      `} 
      {...rest}
    />
  );
};

export default Button;