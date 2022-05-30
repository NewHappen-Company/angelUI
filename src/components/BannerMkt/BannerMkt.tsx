import React, { HTMLAttributes } from "react";

export interface IBannerMktProps extends HTMLAttributes<HTMLDivElement> {
  backgroundColor?: "#242237";
  width?: string;
  height?: string;
  fontFamily?: string;
  fontSize?: string;
}

const BannerMkt = ({
  fontFamily = "font-Poppins",
  backgroundColor = "#242237",
  width = "w-full",
  height = "0",
  fontSize = "text-md",
  ...rest
}: IBannerMktProps) => {
  const divStyle = `bg-angelBlack py-8 ${height} ${width} flex justify-center items-center`;
  const textStyle = `text-white font-normal ${fontSize}`;
  const font = `${fontFamily}`;

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
      ${fontFamily === "Poppins" ? font : ""}
    `}
        {...rest}
      />
    </div>
  );
};

export default BannerMkt;
