import React, { HTMLAttributes } from "react";

export interface IAdventagesProps extends HTMLAttributes<HTMLDivElement> {
  sideSize?: string;
}

const Adventages = ({ sideSize = "12", ...rest }: IAdventagesProps) => {
  const style = `rounded-xl bg-gradient-to-t from-angelGrayC4 to-angelGrayE2 w-${sideSize} h-${sideSize} flex justify-center items-center`;

  return (
    <div
      className={`
        ${style} 
      `}
      {...rest}
    />
  );
};

export default Adventages;
