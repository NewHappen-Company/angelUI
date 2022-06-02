import React, { Children, HTMLAttributes, ReactNode } from "react";
import Button from "../Button";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export interface IAccordionProps extends HTMLAttributes<HTMLDivElement> {
  height?: string;
  width?: string;
  text?: ReactNode;
  children?: ReactNode;
  color?: string;
  titleFontSize?: string;
  textFontSize?: string;
  border?: "border-b" | "border-0";
}

const Accordion = ({
  height = "h-full",
  width = "w-full",
  color = "text-white",
  titleFontSize = "text-2xl",
  textFontSize = "text-dm",
  border = "border-b",
  children,
  text,
  ...rest
}: IAccordionProps) => {
  const style = `${border} border-solid ${height} ${width} ${color}`;
  const titleDivstyle = `flex justify-between items-center font-bold ${titleFontSize}`;
  const textDivStyle = `${textFontSize} p-2 text-justify`;

  const [click, setClick] = React.useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div
      className={`
        ${style} 
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
