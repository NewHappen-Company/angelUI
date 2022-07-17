import React, { HTMLAttributes } from 'react';
import IDefaultProps from '../../../@types/defaults';
import '../../styles/angel';

export interface IBannerMktProps extends HTMLAttributes<HTMLDivElement> {
  backgroundColor?: '#242237';
  fontFamily?: string;
  fontSize?: string;
}

type IAngelBannerMktProps = IBannerMktProps & IDefaultProps;

const BannerMkt = ({
  w = 'w-full',
  h = 'h-0',
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
  fontFamily = 'font-Poppins',
  fontSize = 'text-md',
  ...rest
}: IAngelBannerMktProps) => {
  const divStyle = `flex justify-center items-center bg-angelBlack py-8 ${h} ${w}`;
  const textStyle = `text-white font-normal ${fontSize}`;

  const defaults = `${w} ${h} ${maxWidth} ${maxHeight} ${minWidth} ${minHeight} ${minWidth} ${minHeight} ${p} ${px} ${py} ${pt} ${pb} ${pl} ${pr} ${m} ${mx} ${my} ${mt} ${mb} ${ml} ${mr}`;

  return (
    <div
      className={`
        ${divStyle} 
        ${defaults}
      `}
      {...rest}
    >
      <h3
        className={`
      ${textStyle} 
      ${fontFamily}
    `}
        {...rest}
      >
        {rest.children}
      </h3>
    </div>
  );
};

export default BannerMkt;
