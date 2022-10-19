import React, { HTMLAttributes } from 'react';
import IDefaultProps from '../../../@types/defaults';
import '../../styles/angel';

export interface ICheckboxProps extends HTMLAttributes<HTMLElement> {
  fontSize?: string;
  bg?: string;
}

type IAngelCheckboxProps = ICheckboxProps & IDefaultProps;

const Checkbox = ({
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
  fontSize = 'text-sm',
  bg = 'angelWhite',
  ...rest
}: IAngelCheckboxProps) => {
  const boxStyle = 'w-4 h-4 rounded ';
  const containerStyle = 'flex flex-row items-center gap-2';
  const defaults = ` ${p} ${px} ${py} ${pt} ${pb} ${pl} ${pr} ${m} ${mx} ${my} ${mt} ${mb} ${ml} ${mr}`;
  const defaultsBox = `bg-${bg} ${w} ${h} ${maxWidth} ${maxHeight} ${minWidth} ${minHeight} ${minWidth} ${minHeight}`;
  const childrenStyle = `${fontSize} ${defaults}`;

  return (
    <div className={`${containerStyle} ${defaults}`}>
      <div className={`${boxStyle} ${defaultsBox}`} />
      <div className={`${childrenStyle}`}>{rest.children}</div>
    </div>
  );
};

export default Checkbox;
