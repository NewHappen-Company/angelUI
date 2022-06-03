import React, { InputHTMLAttributes, ReactNode } from "react";
import IDefaultProps from "../../../@types/defaults";
import "../../styles/angel";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  fontSize?: string;
  bg?: string;
  phC?: string;
  legend?: string;
  isFieldset?: boolean;
}

type IAngelInputProps = IInputProps & IDefaultProps;

const Input = ({
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
  fontSize = "text-sm",
  bg = "bg-angelWhite",
  phC = "angelGray",
  legend,
  isFieldset,
  ...rest
}: IAngelInputProps) => {
  let placeholderColor = `placeholder-${phC}`;
  const style = `p-4 pb-2 pt-2 rounded font-Poppins ${fontSize} outline-none`;
  let defaults = `${bg} ${w} ${h} ${maxWidth} ${maxHeight} ${minWidth} ${minHeight} ${minWidth} ${minHeight} ${p} ${px} ${py} ${pt} ${pb} ${pl} ${pr} ${m} ${mx} ${my} ${mt} ${mb} ${ml} ${mr}`;

  // FIELDSET

  const [click, setClick] = React.useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const fieldset = `px-4 pb-3 pt-1.5 rounded font-Poppins ${fontSize} outline-none border-solid ${
    click ? "border-angel border-2" : "border-transparent border-2"
  }`;
  const style2 = `font-Poppins ${fontSize} outline-none`;
  let defaults2 = `${bg} ${maxWidth} ${maxHeight} ${minWidth} ${minHeight} ${minWidth} ${minHeight}`;

  if (!isFieldset) {
    return (
      <input
        className={`
        ${style}
        ${placeholderColor || "placeholder-angelGray"}
        ${defaults}
      `}
        {...rest}
      />
    );
  } else {
    return (
      <fieldset
        className={`${defaults}
  ${fieldset}`}
      >
        <legend className={`text-sm font-Poppins ${click ? "text-angel" : "legends-Gray"} px-1`}>
          {legend || "Label"}
        </legend>
        <input
          onFocus={handleClick}
          onBlur={handleClick}
          className={`

        ${style2}
        ${placeholderColor || "placeholder-angelGray"}
        ${defaults2}
      `}
          {...rest}
        />
      </fieldset>
    );
  }
};

export default Input;
