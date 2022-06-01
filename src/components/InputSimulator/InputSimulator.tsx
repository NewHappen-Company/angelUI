import React, { ButtonHTMLAttributes } from "react";
import "../../../styles/angel.ts";

export interface IInputSimulatorProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  w?: string; // width
  width?: string; // width
  h? : string; // height
  height?: string; // height
}

const InputSimulator = ({ 
  children,
  width, w,
  height, h,
  ...rest 
}: IInputSimulatorProps) => {
  const simulatePlaceholderAlign = 'flex items-center justify-start';
  const style = `min-w-fit ${w || width || 'w-64'} ${h || height} rounded border-solid border-2 border-white pointer transition-all duration-300 hover:opacity-75 relative`;
  const styleDiv = `rounded-[.15rem] w-full h-full pl-4 pr-4 pt-2 pb-2 bg-white opacity-50`;
  const styleDivAbsolute = `rounded-[.15rem] w-full h-full pl-4 pr-4 pt-2 pb-2 ${simulatePlaceholderAlign} absolute top-0 left-0`;
  const stylePlaceholder = `text-sm text-white`;

  return(
    <button 
      className={`
        ${style}
      `} 
      {...rest}
    >
      <div className={`${styleDiv}`}>
        <span className={`${stylePlaceholder}`}>{children}</span>
      </div>
      <div className={`${styleDivAbsolute}`}>
        <span className={`${stylePlaceholder}`}>{children}</span>
      </div>
    </button>
  );
};

export default InputSimulator;