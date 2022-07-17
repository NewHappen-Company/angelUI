/* eslint-disable react/jsx-props-no-spreading */
import React, { HTMLAttributes, ReactNode, useRef } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import Button from '../Button';
import IDefaultProps from '../../../@types/defaults';

export interface IAccordionProps extends HTMLAttributes<HTMLDivElement> {
  text?: ReactNode;
  children?: ReactNode;
  color?: string;
  titleFontSize?: string;
  textFontSize?: string;
  border?: 'border-b' | 'border-0';
}

type IAngelAccordionProps = IAccordionProps & IDefaultProps;

const Accordion = ({
  h = 'h-full',
  w = 'w-full',
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
  color = 'text-white',
  titleFontSize = 'text-2xl',
  textFontSize = 'text-dm',
  border = 'border-b',
  children,
  text,
  ...rest
}: IAngelAccordionProps) => {
  const [click, setClick] = React.useState(false);

  const chevron = click
    ? 'transition-transform duration-300 transform rotate-180'
    : 'transition-transform duration-300 transform';

  const style = `${border} border-solid ${color} `;
  const titleDivstyle = `flex justify-between items-center font-bold ${titleFontSize} flex justify-between`;
  const textDivStyle = `${textFontSize} pt-2 px-2 text-justify overflow-hidden max-h-0 transition-all duration-300 flex mb-2`;

  const defaults = `${w} ${h} ${maxWidth} ${maxHeight} ${minWidth} ${minHeight} ${minWidth} ${minHeight} ${p} ${px} ${py} ${pt} ${pb} ${pl} ${pr} ${m} ${mx} ${my} ${mt} ${mb} ${ml} ${mr}`;

  const handleClick = () => {
    setClick(!click);
  };

  const refTab = useRef<HTMLDivElement>(null);
  const tabHeight = refTab.current?.scrollHeight;

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
          <BsChevronDown style={{ fill: 'white' }} className={chevron} />
        </Button>
      </div>
      <div
        ref={refTab}
        className={textDivStyle}
        style={{ maxHeight: click ? `${tabHeight}px` : '10px' }}
        {...rest}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
