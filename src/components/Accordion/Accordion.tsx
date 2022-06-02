import React, { Children, HTMLAttributes, ReactNode } from "react";
import Button from "../Button";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import IDefaultProps from "../../../@types/defaults";

export interface IAccordionProps extends HTMLAttributes<HTMLDivElement> {
  text?: ReactNode;
  children?: ReactNode;
  color?: string;
  titleFontSize?: string;
  textFontSize?: string;
  border?: "border-b" | "border-0";
}

type IAngelAccordionProps = IAccordionProps & IDefaultProps;

const Accordion = ({
  h = "h-full",
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
  color = "text-white",
  titleFontSize = "text-2xl",
  textFontSize = "text-dm",
  border = "border-b",
  children,
  text,
  ...rest
}: IAngelAccordionProps) => {
  const style = `${border} border-solid ${color}`;
  const titleDivstyle = `flex justify-between items-center font-bold ${titleFontSize}`;
  const textDivStyle = `${textFontSize} p-2 text-justify`;

  let defaults = `${w} ${h} ${maxWidth} ${maxHeight} ${minWidth} ${minHeight} ${minWidth} ${minHeight} ${p} ${px} ${py} ${pt} ${pb} ${pl} ${pr} ${m} ${mx} ${my} ${mt} ${mb} ${ml} ${mr}`;

  const [click, setClick] = React.useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div
      className={`
        ${style} 
        ${defaults}
      `}
      {...rest}
    >
      <div className={titleDivstyle} {...rest}>
        {text}
        <Button btnType="text" shape="circle" onClick={handleClick}>
          {click ? (
            <BsChevronUp style={{ fill: "white" }} />
          ) : (
            <BsChevronDown style={{ fill: "white" }} />
          )}
        </Button>
      </div>
      <div className={click ? textDivStyle : "hidden"} {...rest}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;