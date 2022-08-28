import React, {
  DetailedHTMLProps, HTMLAttributes, ReactNode,
} from 'react';
import { FiMenu } from 'react-icons/fi';
import IDefaultProps from '../../../@types/defaults';
import getResponsive from '../../utils/src/getResponsive';
import Button from '../Button';
import { IButtonProps } from '../Button/Button';
import IconButton from '../IconButton';

interface IOptionButton extends IButtonProps {}
type IOptionButtonStyle = IOptionButton & IDefaultProps;

export interface IHeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>{
  buttonStyleOne?: IOptionButtonStyle;
  buttonOneText?: string;
  buttonStyleTwo?: IOptionButtonStyle;
  buttonTwoText?: string;
  buttonOneClick?: () => void;
  buttonTwoClick?: () => void;
  redirectOnClickLogo?: () => void;
  children?: ReactNode;
  logo?: ReactNode;
}

type IAngelHeaderProps = IHeaderProps & IDefaultProps;

const Header = ({
  buttonStyleOne,
  buttonOneText,
  buttonStyleTwo,
  buttonTwoText,
  buttonOneClick,
  buttonTwoClick,
  redirectOnClickLogo,
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
  logo,
  children,
}: IAngelHeaderProps) => {
  const stylePointer = `h-16 ${redirectOnClickLogo && 'pointer'}`;
  const style = 'flex w-full items-center justify-center';
  const defaults = `${bg} ${w} ${h || 'h-24'} ${maxWidth} ${maxHeight} ${minWidth} ${minHeight} ${minWidth} ${minHeight} ${p} ${px || 'px-4'} ${py} ${pt} ${pb} ${pl} ${pr} ${m} ${mx} ${my} ${mt} ${mb} ${ml} ${mr}`;

  const getSize = getResponsive();

  if (getSize.width !== 640) {
    return (
      <header className={`${style} ${defaults}`}>
        <div className="flex w-full max-w-6xl justify-between">
          <div className="flex items-center">
            { redirectOnClickLogo ? (
              <button onClick={redirectOnClickLogo} className={stylePointer}>
                {logo}
              </button>
            ) : logo }
            <nav className="mr-4">
              {children}
            </nav>
          </div>

          <div className="flex items-center">
            { buttonTwoText && (
              <Button
                mr="mr-4"
                rounded
                shape="round"
                btnType={buttonStyleTwo?.btnType || 'outlined'}
                w="w-36"
                h="h-10"
                {...buttonStyleTwo}
                onClick={buttonTwoClick}
              >
                {buttonTwoText}
              </Button>
            ) }
            <Button
              mr="mr-4"
              rounded
              shape="round"
              btnType={buttonStyleOne?.btnType || 'primary'}
              w="w-36"
              h="h-10"
              {...buttonStyleOne}
              onClick={buttonOneClick}
            >
              {buttonOneText || 'Opção 1'}
            </Button>
          </div>
        </div>
      </header>
    );
  }
  return (
    <header className={`${style} ${defaults}`}>
      <div className="flex w-full max-w-6xl justify-between">
        <div className="flex items-center">
          <IconButton bg="bg-gray">
            <FiMenu />
          </IconButton>
          { redirectOnClickLogo ? (
            <button onClick={redirectOnClickLogo}>
              {logo}
            </button>
          ) : logo }
        </div>
      </div>
    </header>
  );
};

export default Header;
