import React, { ButtonHTMLAttributes } from 'react';
import IDefaultProps from '../../../@types/defaults';
import { useLoadingButton } from '../../hooks/src/useLoadingButton';
import '../../styles/angel';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnType?: 'primary' | 'default' | 'outlined' | 'dashed' | 'text' | 'link';
  rounded?: boolean;
  shape?: 'rectangle' | 'round' | 'circle';
  size?: 'small' | 'medium' | 'large';
  danger?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
}

type IAngelButtonProps = IButtonProps & IDefaultProps;

const Button = ({
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
  bg,
  borderColor,
  hoverBorderColor,
  hoverText,
  btnType = 'default',
  rounded = true,
  shape = 'rectangle',
  size = 'medium',
  danger = false,
  isDisabled = false,
  isLoading = false,
  ...rest
}: IAngelButtonProps) => {
  const { styleLoading } = useLoadingButton();

  const style = 'pl-4 pr-4 pt-2 pb-2 min-w-fit border-solid border-0 pointer transition-all duration-300 hover:opacity-75';

  // BTN TYPES
  const defaultType = `${danger ? 'bg-angelRed' : 'text-angelBlack'} text-md ${
    danger ? 'bg-angelRedP5' : 'bg-angelBlackP5'
  } border ${danger ? 'bg-angelRedP5' : 'border-angelBlackP5'}`;
  const primaryType = `text-white ${
    danger ? 'bg-angelRedM' : 'bg-angel'
  } border ${danger ? 'bg-angelRedM' : bg || 'border-angel'}`;
  const dashedType = `text-angelBlack bg-transparent border-dashed border ${
    danger ? 'border-angelRedP3' : 'border-angelBlueP3'
  } ${danger ? 'hover:text-angelRedM' : 'hover:text-angel'} ${
    danger ? 'hover:border-angelRedM' : 'hover:border-angel'
  }`;
  const outlinedType = `text-white bg-transparent border border-white ${
    danger ? 'hover:text-angelRedM' : hoverText || 'hover:text-angel'
  } ${danger ? 'hover:border-angelRedM' : hoverBorderColor || 'hover:border-angel'}`;
  const textType = 'text-angelBlack bg-transparent border border-transparent hover:text-angelBlack hover:bg-angelBlackP5 hover:border-angelBlackBlackP5';
  const linkType = `${
    danger ? 'text-angelRedM' : 'text-angel'
  } bg-transparent border border-transparent`;

  // BTN RADIU
  const defaultRadius = 'rounded';

  // BTN SHAPES
  const roundShape = 'rounded-3xl';
  const circleShape = 'rounded-full pt-2 pb-2 pl-[.8rem] pr-[.8rem]';

  // BTN SIZES
  const smallSize = 'text-sm pt-[.3rem] pb-[.3rem] pl-[.8rem] pr-[.8rem]';
  const largeSize = 'text-lg pt-[.8rem] pb-[.8rem] pl-[1.3rem] pr-[1.3rem]';

  const defaults = `${bg} ${w} ${h} ${maxWidth} ${maxHeight} ${minWidth} ${minHeight} ${minWidth} ${minHeight} ${p} ${px} ${py} ${pt} ${pb} ${pl} ${pr} ${m} ${mx} ${my} ${mt} ${mb} ${ml} ${mr} ${borderColor}`;
  const states = `${isDisabled && 'cursor-not-allowed opacity-75'} ${isLoading && styleLoading}`;

  // SPINNER
  const spinnerStyles = `${size === 'small' ? 'spinner-ring-sm' : size === 'medium' ? 'spinner-ring-md' : size === 'large' ? 'spinner-ring-lg' : 'spinner-ring-sm'}`;

  return (
    <button
      className={`
        ${style}
        ${
          btnType === 'primary'
            ? primaryType
            : btnType === 'dashed'
              ? dashedType
              : btnType === 'outlined'
                ? outlinedType
                : btnType === 'text'
                  ? textType
                  : btnType === 'link'
                    ? linkType
                    : defaultType
        } 
        ${rounded && defaultRadius}
        ${
          shape === 'round' ? roundShape : shape === 'circle' ? circleShape : ''
        }
        ${size === 'small' ? smallSize : size === 'large' ? largeSize : ''}
        ${defaults}
        ${states}
      `}
      disabled={isDisabled || isLoading}
      {...rest}
    >
      { isLoading && (
      <div className={`${spinnerStyles}`}>
        <div />
        <div />
        <div />
        <div />
      </div>
      ) }
      {rest.children}
    </button>
  );
};

export default Button;
