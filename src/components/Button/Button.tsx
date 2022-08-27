import React, { ButtonHTMLAttributes } from 'react';
import { IAngelDefaultProps } from '../../../@types/defaults';
import '../../styles/angel';
import {
  AngelButton, AngelDangerButton, AngelDashedButton, AngelLinkButton,
  AngelOutlinedButton, AngelTextButton,
} from './style';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnType?: 'primary' | 'default' | 'outlined' | 'dashed' | 'text' | 'link' | 'danger';
  isDisabled?: boolean;
  isLoading?: boolean;
}
type IAngelButtonProps = IButtonProps & IAngelDefaultProps;

const Button = ({
  bg,
  p,
  pl,
  pr,
  pt,
  pb,
  minWidth,
  borderStyle,
  borderSize,
  cursor,
  radius,
  txtColor,
  btnType,
  borderColor,
  isDisabled,
  isLoading,
  width,
  height,
  ...rest
}: IAngelButtonProps) => {
  if (btnType === 'outlined') {
    return (
      <AngelOutlinedButton
        width={width}
        height={height}
        p={p}
        pt={pt}
        pb={pb}
        pl={pl}
        pr={pr}
        minWidth={minWidth}
        borderSize={borderSize}
        cursor={cursor}
        radius={radius}
        txtColor={txtColor}
        btnType={btnType}
        borderColor={borderColor}
        disabled={isDisabled}
        {...rest}
      >
        { isLoading && (
          <div className="spinner-ring-sm">
            <div />
            <div />
            <div />
            <div />
          </div>
        ) }
        {rest.children}
      </AngelOutlinedButton>
    );
  } if (btnType === 'dashed') {
    return (
      <AngelDashedButton
        width={width}
        height={height}
        p={p}
        pt={pt}
        pb={pb}
        pl={pl}
        pr={pr}
        minWidth={minWidth}
        borderSize={borderSize}
        cursor={cursor}
        radius={radius}
        txtColor={txtColor}
        btnType={btnType}
        borderColor={borderColor}
        disabled={isDisabled}
        {...rest}
      >
        { isLoading && (
          <div className="spinner-ring-sm">
            <div />
            <div />
            <div />
            <div />
          </div>
        ) }
        {rest.children}
      </AngelDashedButton>
    );
  } if (btnType === 'text') {
    return (
      <AngelTextButton
        width={width}
        height={height}
        p={p}
        pt={pt}
        pb={pb}
        pl={pl}
        pr={pr}
        minWidth={minWidth}
        cursor={cursor}
        radius={radius}
        txtColor={txtColor}
        btnType={btnType}
        disabled={isDisabled}
        {...rest}
      >
        { isLoading && (
          <div className="spinner-ring-sm">
            <div />
            <div />
            <div />
            <div />
          </div>
        ) }
        {rest.children}
      </AngelTextButton>
    );
  } if (btnType === 'link') {
    return (
      <AngelLinkButton
        width={width}
        height={height}
        p={p}
        pt={pt}
        pb={pb}
        pl={pl}
        pr={pr}
        minWidth={minWidth}
        cursor={cursor}
        radius={radius}
        txtColor={txtColor}
        btnType={btnType}
        disabled={isDisabled}
        {...rest}
      >
        { isLoading && (
          <div className="spinner-ring-sm">
            <div />
            <div />
            <div />
            <div />
          </div>
        ) }
        {rest.children}
      </AngelLinkButton>
    );
  } if (btnType === 'danger') {
    return (
      <AngelDangerButton
        width={width}
        height={height}
        p={p}
        pt={pt}
        pb={pb}
        pl={pl}
        pr={pr}
        minWidth={minWidth}
        cursor={cursor}
        radius={radius}
        txtColor={txtColor}
        btnType={btnType}
        disabled={isDisabled}
        {...rest}
      >
        { isLoading && (
          <div className="spinner-ring-sm">
            <div />
            <div />
            <div />
            <div />
          </div>
        ) }
        {rest.children}
      </AngelDangerButton>
    );
  }

  return (
    <AngelButton
      width={width}
      height={height}
      bg={bg}
      p={p}
      pt={pt}
      pb={pb}
      pl={pl}
      pr={pr}
      minWidth={minWidth}
      borderStyle={borderStyle}
      borderSize={borderSize}
      cursor={cursor}
      radius={radius}
      txtColor={txtColor}
      btnType={btnType}
      borderColor={borderColor}
      disabled={isDisabled}
      {...rest}
    >
      { isLoading && (
        <div className="spinner-ring-sm">
          <div />
          <div />
          <div />
          <div />
        </div>
      ) }
      {rest.children}
    </AngelButton>
  );
};

export default Button;
