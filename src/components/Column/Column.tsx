import React, { HTMLAttributes } from "react";
import IDefaultProps from "../../../@types/defaults";
import '../../styles/angel';

export interface IColumnProps extends HTMLAttributes<HTMLDivElement> {
  horizontalAlign?: 'start' | 'end' | 'center' | 'baseline' |  'stretch';
  verticalAlign?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  reverse?: boolean; 
  bg?: string; 
}

type IAngelColumnProps = IColumnProps & IDefaultProps;

const Column = ({
  h,
  w = "w-full",
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
  reverse = false,
  horizontalAlign = 'center',
  verticalAlign = 'start',
  bg = "bg-transparent",
  ...rest
}: IAngelColumnProps) => {
  const style = `flex ${reverse ? 'flex-col-reverse' : 'flex-col'}`;
  let defaults = `${w} ${h} ${maxWidth} ${maxHeight} ${minWidth} ${minHeight} ${minWidth} ${minHeight} ${p} ${px} ${py} ${pt} ${pb} ${pl} ${pr} ${m} ${mx} ${my} ${mt} ${mb} ${ml} ${mr}`;

  return (
    <div
      className={`
        ${style} 
        ${horizontalAlign === 'start' ? 
          'items-start' : 
          horizontalAlign === 'end' ? 
          'items-end' : 
          horizontalAlign === 'center' ? 
          'items-center' : 
          horizontalAlign === 'baseline' ? 
          'items-baseline' : 
          horizontalAlign === 'stretch' ? 
          'items-stretch' : 'items-center'
        }
        ${verticalAlign === 'start' ? 
          'justify-start' :
          verticalAlign === 'end' ?
          'justify-end' :
          verticalAlign === 'center' ?
          'justify-center' :
          verticalAlign === 'between' ?
          'justify-between' :
          verticalAlign === 'around' ?
          'justify-around' :
          verticalAlign === 'evenly' ?
          'justify-evenly' : 'justify-start'
        }
        ${defaults}
      `}
      {...rest}
    />
  );
};

export default Column;
