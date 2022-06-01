import React, { HTMLAttributes } from "react";
import "../../../styles/angel.ts";

export interface IColumnProps extends HTMLAttributes<HTMLDivElement> {
  horizontalAlign?: 'start' | 'end' | 'center' | 'baseline' |  'stretch';
  verticalAlign?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  reverse?: boolean; 
  bg?: string; 
  w?: string;
  width?: string;
  h?: string;
  height?: string;
}

const Column = ({
  reverse = false,
  horizontalAlign = 'center',
  verticalAlign = 'start',
  h = "h-auto",
  height,
  w = "w-full",
  width,
  bg = "bg-transparent",
  ...rest
}: IColumnProps) => {
  const style = `flex ${reverse ? 'flex-col-reverse' : 'flex-col'}`;
  let defaults = `${bg} ${w || width} ${h || height}`;

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
