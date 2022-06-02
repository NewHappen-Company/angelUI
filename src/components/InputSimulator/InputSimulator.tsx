import React, { ButtonHTMLAttributes } from "react";
import IDefaultProps from "../../../@types/defaults";
import '../../styles/angel';

export interface IInputSimulatorProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

type IAngelInputSimulatorProps = IInputSimulatorProps & IDefaultProps;

const InputSimulator = ({ 
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
  children,
  ...rest 
}: IAngelInputSimulatorProps) => {
  const simulatePlaceholderAlign = 'flex items-center justify-start';
  const style = `min-w-fit w-64 rounded border-solid border-2 border-white pointer transition-all duration-300 hover:opacity-75 relative`;
  const styleDiv = `rounded-[.15rem] w-full h-full pl-4 pr-4 pt-2 pb-2 bg-white opacity-50`;
  const styleDivAbsolute = `rounded-[.15rem] w-full h-full pl-4 pr-4 pt-2 pb-2 ${simulatePlaceholderAlign} absolute top-0 left-0`;
  const stylePlaceholder = `text-sm text-white`;

  let defaults = `${w} ${h} ${maxWidth} ${maxHeight} ${minWidth} ${minHeight} ${minWidth} ${minHeight} ${p} ${px} ${py} ${pt} ${pb} ${pl} ${pr} ${m} ${mx} ${my} ${mt} ${mb} ${ml} ${mr}`;

  return(
    <button 
      className={`
        ${style}
        ${defaults}
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