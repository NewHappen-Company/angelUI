import React, {
  DetailedHTMLProps, HTMLAttributes, ReactNode, useState,
} from 'react';
import { angelBlue } from '../../../@types/colors';
import { IAngelDefaultProps } from '../../../@types/defaults';
import Button, { IButtonProps } from '../Button/Button';
import {
  AngelHamburguer,
  AngelHamburguerIcon,
  AngelHeader, AngelHeaderNav, AngelHeaderNormalDiv, AngelHeaderNormalDivInRight,
  AngelHeaderOverlay,
  AngelHeaderWrapper,
} from './styles';

interface IOptionButton extends IButtonProps {}
type IOptionButtonStyle = IOptionButton & IAngelDefaultProps;

export interface IHeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>{
  buttonStyleOne?: IOptionButtonStyle;
  buttonOneText?: string;
  buttonStyleTwo?: IOptionButtonStyle;
  buttonTwoText?: string;
  buttonOneClick?: () => void;
  buttonTwoClick?: () => void;
  redirectOnClickLogo?: () => void;
  navPosition?: 'left' | 'right';
  children?: ReactNode;
  logo?: ReactNode;
}

type IAngelHeaderProps = IHeaderProps &
Omit<IAngelDefaultProps,
'minWidth' | 'maxWidth' | 'minHeight' |
'maxHeight' | 'borderStyle' | 'borderSize' |
'cursor' | 'radius' | 'borderColor'
>;

const Header = ({
  buttonTwoText,
  buttonStyleTwo,
  buttonTwoClick,
  buttonStyleOne,
  buttonOneClick,
  buttonOneText,
  redirectOnClickLogo,
  logo,
  bg,
  height,
  width,
  p,
  pt,
  pb,
  pl,
  pr,
  m,
  mt,
  mb,
  mr,
  ml,
  txtColor,
  navPosition = 'left',
  children,
}: IAngelHeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openOverlay, setOpenOverlay] = useState('initial_overlay');
  const [heightHeader, setHeightHeader] = useState(0);

  const animationHamburger = () => {
    if (!menuOpen === false) {
      setOpenOverlay('over_close');
    } else {
      setOpenOverlay('over_open');
    }
    setMenuOpen(!menuOpen);
    const h = document.querySelector('header');
    if (h) {
      setHeightHeader(h.offsetHeight);
    }
  };

  return (
    <>
      <AngelHeaderOverlay
        id={`${openOverlay || 'initial_overlay'}`}
        height={heightHeader}
      >
        { children }
        { buttonTwoText && (
          <Button
            btnType={buttonStyleTwo?.btnType || 'outlined'}
            radius={buttonStyleTwo?.radius || 'full'}
            borderColor={buttonStyleTwo?.borderColor || angelBlue}
            txtColor={buttonStyleTwo?.txtColor || `${angelBlue} !important`}
            mr={buttonStyleTwo?.mr || 4}
            pl={buttonStyleTwo?.pl || 6}
            pr={buttonStyleTwo?.pr || 6}
            {...buttonStyleTwo}
            onClick={buttonTwoClick}
          >
            {buttonTwoText}
          </Button>
        ) }
        <Button
          btnType={buttonStyleOne?.btnType || 'primary'}
          radius={buttonStyleOne?.radius || 'full'}
          txtColor={buttonStyleTwo?.txtColor || '#FFF !important'}
          pl={buttonStyleOne?.pl || 6}
          pr={buttonStyleOne?.pr || 6}
          {...buttonStyleOne}
          onClick={buttonOneClick}
        >
          {buttonOneText || 'Opção 1'}
        </Button>
      </AngelHeaderOverlay>
      <AngelHeader
        bg={bg}
        height={height}
        width={width}
        m={m}
        ml={ml}
        mr={mr}
        mt={mt}
        mb={mb}
        p={p}
        pt={pt}
        pb={pb}
      >
        <AngelHeaderWrapper
          p={p}
          pl={pl}
          pr={pr}
          pt={pt}
          pb={pb}
        >
          <AngelHeaderNormalDiv>
            { redirectOnClickLogo ? (
              <button onClick={redirectOnClickLogo}>
                {logo}
              </button>
            ) : logo }
            { navPosition === 'left' && (
              <AngelHeaderNav txtColor={txtColor}>
                {children}
              </AngelHeaderNav>
            ) }
          </AngelHeaderNormalDiv>

          <AngelHeaderNormalDivInRight>
            { navPosition === 'right' && (
              <AngelHeaderNav txtColor={txtColor}>
                {children}
              </AngelHeaderNav>
            ) }
            { buttonTwoText && (
              <Button
                btnType={buttonStyleTwo?.btnType || 'outlined'}
                radius={buttonStyleTwo?.radius || 'full'}
                borderColor={buttonStyleTwo?.borderColor || angelBlue}
                txtColor={buttonStyleTwo?.txtColor || angelBlue}
                ml={buttonStyleTwo?.ml || 4}
                mr={buttonStyleTwo?.mr || 4}
                pl={buttonStyleTwo?.pl || 6}
                pr={buttonStyleTwo?.pr || 6}
                {...buttonStyleTwo}
                onClick={buttonTwoClick}
              >
                {buttonTwoText}
              </Button>
            ) }
            <Button
              btnType={buttonStyleOne?.btnType || 'primary'}
              radius={buttonStyleOne?.radius || 'full'}
              pl={buttonStyleOne?.pl || 6}
              pr={buttonStyleOne?.pr || 6}
              {...buttonStyleOne}
              onClick={buttonOneClick}
            >
              {buttonOneText || 'Opção 1'}
            </Button>
            <AngelHamburguer id="menuForHeader">
              <AngelHamburguerIcon
                txtColor={txtColor}
                id={`${menuOpen ? 'open' : 'close'}`}
                onClick={animationHamburger}
              >
                <div />
              </AngelHamburguerIcon>
            </AngelHamburguer>
          </AngelHeaderNormalDivInRight>
        </AngelHeaderWrapper>
      </AngelHeader>
    </>
  );
};

export default Header;
