import React, { HTMLAttributes } from "react";

export interface IBannerMktProps extends HTMLAttributes<HTMLDivElement> {
  backgroundColor?: "#242237";
  width?: string;
  height?: string;
  fontFamily?: string;
}

const BannerMkt = ({
  fontFamily = "Poppins",
  backgroundColor = "#242237",
  width = "w-full",
  height = "0",
  ...rest
}: IBannerMktProps) => {
  const divStyle = `bg-angelBlack py-8 ${height} ${width} flex justify-center items-center`;
  const textStyle = "text-white font-normal";
  const font = `font-Poppins`;

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
