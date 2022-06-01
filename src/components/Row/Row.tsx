import React, { HTMLAttributes } from "react";
 

export interface IRowProps extends HTMLAttributes<HTMLDivElement> {
  verticalAlign?: 'start' | 'end' | 'center' | 'baseline' |  'stretch';
  horizontalAlign?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  reverse?: boolean; 
  bg?: string; 
  w?: string;
  width?: string;
  h?: string;
  height?: string;
}

const Row = ({
  reverse = false,
  verticalAlign = 'center',
  horizontalAlign = 'start',
  h = "h-10",
  height,
  w = "w-full",
  width,
  bg = "bg-transparent",
  ...rest
}: IRowProps) => {
  const style = `flex ${reverse ? 'flex-row-reverse' : 'flex-row'}`;
  let defaults = `${bg} ${w || width} ${h || height}`;

  return (
    <div
      className={`
        ${style} 
        ${verticalAlign === 'start' ? 
          'items-start' : 
          verticalAlign === 'end' ? 
          'items-end' : 
          verticalAlign === 'center' ? 
          'items-center' : 
          verticalAlign === 'baseline' ? 
          'items-baseline' : 
          verticalAlign === 'stretch' ? 
          'items-stretch' : 'items-center'
        }
        ${horizontalAlign === 'start' ? 
          'justify-start' :
          horizontalAlign === 'end' ?
          'justify-end' :
          horizontalAlign === 'center' ?
          'justify-center' :
          horizontalAlign === 'between' ?
          'justify-between' :
          horizontalAlign === 'around' ?
          'justify-around' :
          horizontalAlign === 'evenly' ?
          'justify-evenly' : 'justify-start'
        }
        ${defaults}
      `}
      {...rest}
    />
  );
};

export default Row;
