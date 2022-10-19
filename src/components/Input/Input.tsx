import React, { InputHTMLAttributes } from 'react';
import IDefaultProps from '../../../@types/defaults';
import { useActiveInputProps } from '../../hooks/src/useActiveInput';
import '../../styles/angel';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  fontSize?: string;
  bg?: string;
  phC?: string;
  legend?: string;
  isFieldset?: boolean;
  activeColor?: string;
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
  fontSize = 'text-sm',
  bg = 'angelWhite',
  phC = 'angelGray',
  legend,
  isFieldset,
  activeColor,
  ...rest
}: IAngelInputProps) => {
  const { isActive, onBlur, onFocus } = useActiveInputProps();
  const borderActiveColor = activeColor
    ? `border-${activeColor.split('-')[1]}`
    : 'border-angel';
  const legendActiveColor = activeColor
    ? `text-${activeColor.split('-')[1]}`
    : 'text-angel';

  const placeholderColor = `placeholder-${phC}`;
  const style = `p-4 pb-2 pt-2 rounded font-Poppins ${fontSize} outline-none`;
  const defaults = `bg-${bg} ${w} ${h} ${maxWidth} ${maxHeight} ${minWidth} ${minHeight} ${minWidth} ${minHeight} ${p} ${px} ${py} ${pt} ${pb} ${pl} ${pr} ${m} ${mx} ${my} ${mt} ${mb} ${ml} ${mr}`;

  const fieldset = `transition-colors duration-500 px-4 pb-3 pt-1.5 rounded font-Poppins ${fontSize} outline-none border-solid ${
    isActive ? `${borderActiveColor} border-2` : 'border-transparent border-2'
  }`;

  const style2 = `font-Poppins ${fontSize} outline-none w-full`;
  const defaults2 = `${bg} ${maxWidth} ${maxHeight} ${minWidth} ${minHeight} ${minWidth} ${minHeight}`;
  const legendStyle = `text-sm font-Poppins transition-colors duration-500 ${
    isActive ? legendActiveColor : 'legends-Gray'
  } px-1`;

  if (!isFieldset) {
    return (
      <input
        className={`
          ${style}
          ${placeholderColor || 'placeholder-angelGray'}
          ${defaults}
        `}
        {...rest}
      />
    );
  }
  return (
    <fieldset
      className={`
          ${defaults}
          ${fieldset}
        `}
    >
      <legend className={legendStyle}>{legend || 'Label'}</legend>
      <input
        className={`
            ${style2}
            ${placeholderColor || 'placeholder-angelGray'}
            ${defaults2}
          `}
        onFocus={onFocus}
        onBlur={onBlur}
        {...rest}
      />
    </fieldset>
  );
};

export default Input;
