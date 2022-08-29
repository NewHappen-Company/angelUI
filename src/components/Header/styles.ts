import styled, { keyframes } from 'styled-components';
import { IAngelDefaultProps, IResp } from '../../../@types/defaults';

const overlayAnimation = keyframes`
  0% { height: 0; display: none; background: transparent; opacity: 0; }
  100% { 
    height: 100%; 
    background: #f2f2f2; 
    opacity: 1; 
  }
`;

const overlayAnimationOut = keyframes`
  0% { height: 100%; display: flex; background: #f2f2f2; opacity: 1; }
  100% { height: 0; display: none; background: transparent; opacity: 0; }
`;

export const AngelHeader = styled.header<IAngelDefaultProps>`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.bg && props.bg};
  height: ${(props) => (props.height ? `${props.height / 4}rem` : 'auto')};
  width: ${(props) => (props.width ? `${props.width / 4}rem` : '100%')};
  padding-left: ${(props) => (props.pl && props.pl !== 0 ? `${props.pl / 4}rem` : props.p ? `${props.p / 4}rem` : '0rem')};
  padding-right: ${(props) => (props.pr && props.pr !== 0 ? `${props.pr / 4}rem` : props.p ? `${props.p / 4}rem` : '0rem')};
  padding-top: ${(props) => (props.pt && props.pt !== 0 ? `${props.pt / 4}rem` : props.p ? `${props.p / 4}rem` : '0rem')};
  padding-bottom: ${(props) => (props.pb && props.pb !== 0 ? `${props.pb / 4}rem` : props.p ? `${props.p / 4}rem` : '0rem')};
  margin-left: ${(props) => (props.ml && props.ml !== 0 ? `${props.ml / 4}rem` : props.m ? `${props.m / 4}rem` : '0rem')};
  margin-right: ${(props) => (props.mr && props.mr !== 0 ? `${props.mr / 4}rem` : props.m ? `${props.m / 4}rem` : '0rem')};
  margin-top: ${(props) => (props.mt && props.mt !== 0 ? `${props.mt / 4}rem` : props.m ? `${props.m / 4}rem` : '0rem')};
  margin-bottom: ${(props) => (props.mb && props.mb !== 0 ? `${props.mb / 4}rem` : props.m ? `${props.m / 4}rem` : '0rem')};
`;

export const AngelHeaderWrapper = styled.div<IAngelDefaultProps>`
  display: flex;
  width: 100%;
  max-width: 72rem;
  justify-content: space-between;
  padding-left: ${(props) => (props.pl && props.pl !== 0 ? `${props.pl / 4}rem` : props.p ? `${props.p / 4}rem` : '1rem')};
  padding-right: ${(props) => (props.pr && props.pr !== 0 ? `${props.pr / 4}rem` : props.p ? `${props.p / 4}rem` : '1rem')};
  padding-top: ${(props) => (props.pt && props.pt !== 0 ? `${props.pt / 4}rem` : props.p ? `${props.p / 4}rem` : '0.5rem')};
  padding-bottom: ${(props) => (props.pb && props.pb !== 0 ? `${props.pb / 4}rem` : props.p ? `${props.p / 4}rem` : '0.5rem')};
  margin-left: ${(props) => (props.ml && props.ml !== 0 ? `${props.ml / 4}rem` : props.m ? `${props.m / 4}rem` : '0rem')};
  margin-right: ${(props) => (props.mr && props.mr !== 0 ? `${props.mr / 4}rem` : props.m ? `${props.m / 4}rem` : '0rem')};
  margin-top: ${(props) => (props.mt && props.mt !== 0 ? `${props.mt / 4}rem` : props.m ? `${props.m / 4}rem` : '0rem')};
  margin-bottom: ${(props) => (props.mb && props.mb !== 0 ? `${props.mb / 4}rem` : props.m ? `${props.m / 4}rem` : '0rem')};
`;

export const AngelHeaderNormalDiv = styled.div<IResp>`
  display: flex;
  align-items: center;
  width: 100%;

  nav {
    display: flex;
  }

  @media(max-width: 640px) {
    nav {
      display: none;
    }
  }
`;

export const AngelHeaderNormalDivInRight = styled.div<IResp>`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;

  nav {
    display: flex;
  }

  button {
    display: flex;
  }

  #menuForHeader {
    display: none;
  }

  @media(max-width: 640px) {
    nav {
      display: none;
    }

    button {
      display: none;
    }

    #menuForHeader {
      display: flex;
    }
  }
`;

export const AngelHeaderNav = styled.nav<IAngelDefaultProps>`
  width: 70%;
  margin-left: 1.5rem;

  display: flex;
  align-items: center;
  
  >* {
    margin-right: 1rem;
    color: ${(props) => props.txtColor || '#222222'};
    transition-property: all;
    transition-timing-function: cubic-bezier(.4, 0, .2, 1);
    transition-delay: 150ms;
    transition-duration: 300ms;
  }

  >*:hover {
    text-decoration: underline;
    opacity: .75;
  }
`;

export const AngelHamburguer = styled.button``;

export const AngelHamburguerIcon = styled.div<IAngelDefaultProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  transition: all .5s ease-in-out;
  border: 2px solid transparent;

  >* {
    width: 1.5rem;
    height: 2px;
    background: ${(props) => props.txtColor || '#222222'};
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255, 101, 47, .2);
    transition: all .5s ease-in-out;
  }

  >*::before, >*::after {
    content: '';
    left: 0.125rem;
    position: absolute;
    width: 1.5rem;
    height: 2px;
    background: ${(props) => props.txtColor || '#222222'};
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255, 101, 47, .2);
    transition: all .5s ease-in-out;
  }

  >*::before {
    transform: translateY(-8px);
  }

  >*::after {
    transform: translateY(8px);
  }

  &#open >* {
    transform: translateX(-20px);
    background: transparent;
    box-shadow: none;
  }

  &#open >*::before {
    transform: rotate(45deg) translate(12px, -12px);
  }

  &#open >*::after {
    transform: rotate(-45deg) translate(12px, 12px);
  }

  @media(max-width: 640px) {
    &#open >*::before, &#open >*::after {
      background: #222222;
    }
  }
`;

export const AngelHeaderOverlay = styled.div<IResp>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: ${(props) => (props.height ? props.height + 10 : 200)}px;
  padding-left: 1rem;
  padding-right: 1rem;
  flex-direction: column !important;

  &#over_open {
    height: 100%;
    display: flex;
    flex-direction: column;
    animation: 700ms 1 forwards ${overlayAnimation};
  }

  &#over_close {
    display: hidden;
    flex-direction: column;
    padding-top: 0;
    animation: 700ms 1 forwards ${overlayAnimationOut}
  }

  &#initial_overlay {
    display: none;
  }

  >* {
    width: 100%;
    text-align: center;
    margin-bottom: .5rem;
    color: ${(props) => props.txtColor || '#222222'};
    transition-property: all;
    transition-timing-function: cubic-bezier(.4, 0, .2, 1);
    transition-delay: 150ms;
    transition-duration: 300ms;
  }

  button:first-of-type {
    margin-top: 10px;
  }

  >*:hover {
    text-decoration: underline;
    opacity: .75;
  }
`;
