import React, { HTMLAttributes } from "react";
import IDefaultProps from "../../../@types/defaults";
import '../../styles/angel';

export interface IBannerMktProps extends HTMLAttributes<HTMLDivElement> {
  backgroundColor?: "#242237";
  fontFamily?: string;
  fontSize?: string;
}

type IAngelBannerMktProps = IBannerMktProps & IDefaultProps;

const BannerMkt = ({
  w = "w-full",
  h = "h-0",
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
  fontFamily = "font-Poppins",
  backgroundColor = "#242237",
  fontSize = "text-md",
  ...rest
}: IAngelBannerMktProps) => {
  const divStyle = `bg-angelBlack py-8 ${h} ${w} flex justify-center items-center`;
  const textStyle = `text-white font-normal ${fontSize}`;

  let defaults = `${w} ${h} ${maxWidth} ${maxHeight} ${minWidth} ${minHeight} ${minWidth} ${minHeight} ${p} ${px} ${py} ${pt} ${pb} ${pl} ${pr} ${m} ${mx} ${my} ${mt} ${mb} ${ml} ${mr}`;

  return (
    <div
      className={`
        ${divStyle} 
      `}
      {...rest}
    >
      <h3
        className={`
      ${textStyle} 
      ${fontFamily}
      ${defaults}
    `}
        {...rest}
      />
    </div>
  );
};

export default BannerMkt;
