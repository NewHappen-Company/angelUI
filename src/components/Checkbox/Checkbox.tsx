import React, { ButtonHTMLAttributes } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import IDefaultProps from '../../../@types/defaults';
import '../../styles/angel';

export interface ICheckboxProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  fontSize?: string;
  bg?: string;
  // eslint-disable-next-line no-unused-vars
  setIsChecked: (value: boolean) => void;
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
  setIsChecked,
  ...rest
}: IAngelCheckboxProps) => {
  const boxStyle = 'w-4 h-4 rounded items-center justify-center flex';
  const containerStyle = 'flex flex-row items-center gap-2';
  const defaults = ` ${p} ${px} ${py} ${pt} ${pb} ${pl} ${pr} ${m} ${mx} ${my} ${mt} ${mb} ${ml} ${mr}`;
  const defaultsBox = `bg-${bg} ${w} ${h} ${maxWidth} ${maxHeight} ${minWidth} ${minHeight} ${minWidth} ${minHeight}`;
  const childrenStyle = `${fontSize} ${defaults}`;
  const [checked, setChecked] = React.useState(false);

  return (
    <button
      className={`${containerStyle} ${defaults}`}
      onClick={() => {
        setChecked(!checked);
        setIsChecked(checked);
      }}
    >
      <div className={`${boxStyle} ${defaultsBox}`}>
        {checked ? <AiOutlineCheck className={`${w} ${h}`} /> : null}
      </div>
      <div className={`${childrenStyle}`}>{rest.children}</div>
    </button>
  );
};

export default Checkbox;
