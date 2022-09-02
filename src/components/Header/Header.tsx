/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-param-reassign */
import React, {
  DetailedHTMLProps, HTMLAttributes, ReactNode, useEffect, useState,
} from 'react';
import { angelBlue } from '../../../@types/colors';
import { IAngelDefaultProps } from '../../../@types/defaults';
import Button, { IButtonProps } from '../Button/Button';
import {
  AngelAnchorForButton,
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
  breakpoint?: number;
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
  breakpoint,
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

  const findParentByTagName = (el: any, tagName: string) => {
    let parent = el;
    while (parent !== null && parent.tagName !== tagName.toUpperCase()) {
      parent = parent.parentNode;
    }

    return parent;
  };

  const handleAnchorClick = (e: any) => {
    e = e || window.event;
    if (findParentByTagName(e.target || e.srcElement, 'A')) {
      setOpenOverlay('over_close');
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleAnchorClick, false);
  }, []);

  return (
    <>
      <AngelHeaderOverlay
        id={`${openOverlay || 'initial_overlay'}`}
        height={heightHeader}
      >
        { children }
        { buttonTwoText && (
          <AngelAnchorForButton style={{ width: '100%' }}>
            <Button
              btnType={buttonStyleTwo?.btnType || 'outlined'}
              radius={buttonStyleTwo?.radius || 'full'}
              borderColor={buttonStyleTwo?.borderColor || angelBlue}
              txtColor={buttonStyleTwo?.txtColor || `${angelBlue} !important`}
              mr={buttonStyleTwo?.mr || 4}
              pl={buttonStyleTwo?.pl || 6}
              pr={buttonStyleTwo?.pr || 6}
              style={{ width: '100%' }}
              {...buttonStyleTwo}
              onClick={buttonTwoClick}
            >
              {buttonTwoText}
            </Button>
          </AngelAnchorForButton>
        ) }
        <AngelAnchorForButton style={{ width: '100%' }}>
          <Button
            btnType={buttonStyleOne?.btnType || 'primary'}
            radius={buttonStyleOne?.radius || 'full'}
            txtColor={buttonStyleTwo?.txtColor || '#FFF !important'}
            pl={buttonStyleOne?.pl || 6}
            pr={buttonStyleOne?.pr || 6}
            style={{ width: '100%' }}
            {...buttonStyleOne}
            onClick={buttonOneClick}
          >
            {buttonOneText || 'Opção 1'}
          </Button>
        </AngelAnchorForButton>
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
          <AngelHeaderNormalDiv breakpoint={breakpoint}>
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

          <AngelHeaderNormalDivInRight breakpoint={breakpoint}>
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
                breakpoint={breakpoint}
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
