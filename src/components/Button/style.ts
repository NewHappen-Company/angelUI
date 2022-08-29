import styled from 'styled-components';
import { angelBlue, angelRed } from '../../../@types/colors';
import { IAngelDefaultProps } from '../../../@types/defaults';
import { IButtonProps } from './Button';

type IAngelButtonProps = IButtonProps & IAngelDefaultProps

const AngelButton = styled.button<IAngelButtonProps>`
  width: ${(props) => (props.width ? props.width / 4 : 0)}rem;
  height: ${(props) => (props.height ? `${props.height / 4}rem` : 'fit-content')};
  background: ${(props) => (props.bg ? props.bg : angelBlue)};
  padding: ${(props) => (props.p ? `${props.p / 4}rem` : '0.5rem 1rem 0.5rem 1rem')};
  padding-left: ${(props) => (props.pl && `${props.pl / 4}rem`)};
  padding-right: ${(props) => (props.pr && `${props.pr / 4}rem`)};
  padding-top: ${(props) => (props.pt && `${props.pt / 4}rem`)};
  padding-bottom: ${(props) => (props.pb && `${props.pb / 4}rem`)};
  margin: ${(props) => (props.m ? `${props.m / 4}rem` : '0rem 0rem 0rem 0rem')};
  margin-left: ${(props) => (props.ml && `${props.ml / 4}rem`)};
  margin-right: ${(props) => (props.mr && `${props.mr / 4}rem`)};
  margin-top: ${(props) => (props.mt && `${props.mt / 4}rem`)};
  margin-bottom: ${(props) => (props.mb && `${props.mb / 4}rem`)};
  min-width: ${(props) => (props.minWidth ? props.minWidth : 'fit-content')};
  border-style: ${(props) => (props.borderStyle ? props.borderStyle : 'solid')};
  border-width: ${(props) => ((props.borderStyle !== 'none' && props.borderStyle) ? props.borderSize || 1 : 0)}px;
  cursor: ${(props) => (props.cursor ? props.cursor : 'pointer')};
  border-radius: ${(props) => (props.radius ? props.radius === 'full' ? 9999999 : props.radius === 'none' ? 0 : Number(props.radius) : 4)}px;
  border-color: ${(props) => (props.borderColor ? props.borderColor : 'white')};
  color: ${(props) => (props.txtColor ? props.txtColor : 'white')};
  transition-property: all;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  transition-delay: 150ms;
  transition-duration: 300ms;

  &:hover {
    opacity: .75;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: .75;
  }
`;

const AngelOutlinedButton = styled.button<IAngelButtonProps>`
  width: ${(props) => (props.width ? props.width / 4 : 0)}rem;
  height: ${(props) => (props.height ? `${props.height / 4}rem` : 'fit-content')};
  background: transparent;
  padding: ${(props) => (props.p ? `${props.p / 4}rem` : '0.5rem 1rem 0.5rem 1rem')};
  padding-left: ${(props) => (props.pl && `${props.pl / 4}rem`)};
  padding-right: ${(props) => (props.pr && `${props.pr / 4}rem`)};
  padding-top: ${(props) => (props.pt && `${props.pt / 4}rem`)};
  padding-bottom: ${(props) => (props.pb && `${props.pb / 4}rem`)};
  margin: ${(props) => (props.m ? `${props.m / 4}rem` : '0rem 0rem 0rem 0rem')};
  margin-left: ${(props) => (props.ml && `${props.ml / 4}rem`)};
  margin-right: ${(props) => (props.mr && `${props.mr / 4}rem`)};
  margin-top: ${(props) => (props.mt && `${props.mt / 4}rem`)};
  margin-bottom: ${(props) => (props.mb && `${props.mb / 4}rem`)};
  min-width: ${(props) => (props.minWidth ? props.minWidth : 'fit-content')};
  border-style: solid;
  border-width: ${(props) => (props.borderSize ? props.borderSize : 1)}px;
  cursor: ${(props) => (props.cursor ? props.cursor : 'pointer')};
  border-radius: ${(props) => (props.radius ? props.radius === 'full' ? 9999999 : props.radius === 'none' ? 0 : Number(props.radius) : 4)}px;
  border-color: ${(props) => (props.borderColor ? props.borderColor : 'white')};
  color: ${(props) => (props.txtColor ? props.txtColor : 'white')};
  transition-property: all;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  transition-delay: 150ms;
  transition-duration: 300ms;

  &:hover {
    opacity: .75;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: .75;
  }
`;

const AngelDashedButton = styled.button<IAngelButtonProps>`
  width: ${(props) => (props.width ? props.width / 4 : 0)}rem;
  height: ${(props) => (props.height ? `${props.height / 4}rem` : 'fit-content')};
  background: transparent;
  padding: ${(props) => (props.p ? `${props.p / 4}rem` : '0.5rem 1rem 0.5rem 1rem')};
  padding-left: ${(props) => (props.pl && `${props.pl / 4}rem`)};
  padding-right: ${(props) => (props.pr && `${props.pr / 4}rem`)};
  padding-top: ${(props) => (props.pt && `${props.pt / 4}rem`)};
  padding-bottom: ${(props) => (props.pb && `${props.pb / 4}rem`)};
  margin: ${(props) => (props.m ? `${props.m / 4}rem` : '0rem 0rem 0rem 0rem')};
  margin-left: ${(props) => (props.ml && `${props.ml / 4}rem`)};
  margin-right: ${(props) => (props.mr && `${props.mr / 4}rem`)};
  margin-top: ${(props) => (props.mt && `${props.mt / 4}rem`)};
  margin-bottom: ${(props) => (props.mb && `${props.mb / 4}rem`)};
  min-width: ${(props) => (props.minWidth ? props.minWidth : 'fit-content')};
  border-style: dashed;
  border-width: ${(props) => (props.borderSize ? props.borderSize : 1)}px;
  cursor: ${(props) => (props.cursor ? props.cursor : 'pointer')};
  border-radius: ${(props) => (props.radius ? props.radius === 'full' ? 9999999 : props.radius === 'none' ? 0 : Number(props.radius) : 4)}px;
  border-color: ${(props) => (props.borderColor ? props.borderColor : 'white')};
  color: ${(props) => (props.txtColor ? props.txtColor : 'white')};
  transition-property: all;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  transition-delay: 150ms;
  transition-duration: 300ms;

  &:hover {
    opacity: .75;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: .75;
  }
`;

const AngelTextButton = styled.button<IAngelButtonProps>`
  width: ${(props) => (props.width ? props.width / 4 : 0)}rem;
  height: ${(props) => (props.height ? `${props.height / 4}rem` : 'fit-content')};
  background: transparent;
  padding: ${(props) => (props.p ? `${props.p / 4}rem` : '0.5rem 1rem 0.5rem 1rem')};
  padding-left: ${(props) => (props.pl && `${props.pl / 4}rem`)};
  padding-right: ${(props) => (props.pr && `${props.pr / 4}rem`)};
  padding-top: ${(props) => (props.pt && `${props.pt / 4}rem`)};
  padding-bottom: ${(props) => (props.pb && `${props.pb / 4}rem`)};
  margin: ${(props) => (props.m ? `${props.m / 4}rem` : '0rem 0rem 0rem 0rem')};
  margin-left: ${(props) => (props.ml && `${props.ml / 4}rem`)};
  margin-right: ${(props) => (props.mr && `${props.mr / 4}rem`)};
  margin-top: ${(props) => (props.mt && `${props.mt / 4}rem`)};
  margin-bottom: ${(props) => (props.mb && `${props.mb / 4}rem`)};
  min-width: ${(props) => (props.minWidth ? props.minWidth : 'fit-content')};
  border-style: none;
  border-width: 0;
  cursor: ${(props) => (props.cursor ? props.cursor : 'pointer')};
  border-radius: ${(props) => (props.radius ? props.radius === 'full' ? 9999999 : props.radius === 'none' ? 0 : Number(props.radius) : 4)}px;
  border-color: none;
  color: ${(props) => (props.txtColor ? props.txtColor : 'white')};
  transition-property: all;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  transition-delay: 150ms;
  transition-duration: 300ms;

  &:hover {
    opacity: .75;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: .75;
  }
`;

const AngelLinkButton = styled.button<IAngelButtonProps>`
  width: ${(props) => (props.width ? props.width / 4 : 0)}rem;
  height: ${(props) => (props.height ? `${props.height / 4}rem` : 'fit-content')};
  background: transparent;
  padding: ${(props) => (props.p ? `${props.p / 4}rem` : '0.5rem 1rem 0.5rem 1rem')};
  padding-left: ${(props) => (props.pl && `${props.pl / 4}rem`)};
  padding-right: ${(props) => (props.pr && `${props.pr / 4}rem`)};
  padding-top: ${(props) => (props.pt && `${props.pt / 4}rem`)};
  padding-bottom: ${(props) => (props.pb && `${props.pb / 4}rem`)};
  margin: ${(props) => (props.m ? `${props.m / 4}rem` : '0rem 0rem 0rem 0rem')};
  margin-left: ${(props) => (props.ml && `${props.ml / 4}rem`)};
  margin-right: ${(props) => (props.mr && `${props.mr / 4}rem`)};
  margin-top: ${(props) => (props.mt && `${props.mt / 4}rem`)};
  margin-bottom: ${(props) => (props.mb && `${props.mb / 4}rem`)};
  min-width: ${(props) => (props.minWidth ? props.minWidth : 'fit-content')};
  border-style: none;
  border-width: 0;
  cursor: ${(props) => (props.cursor ? props.cursor : 'pointer')};
  border-radius: ${(props) => (props.radius ? props.radius === 'full' ? 9999999 : props.radius === 'none' ? 0 : Number(props.radius) : 4)}px;
  border-color: none;
  color: ${(props) => (props.txtColor ? props.txtColor : 'white')};
  transition-property: all;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  transition-delay: 150ms;
  transition-duration: 300ms;

  &:hover {
    opacity: .75;
    text-decoration: underline;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: .75;
  }
`;

const AngelDangerButton = styled.button<IAngelButtonProps>`
  width: ${(props) => (props.width ? props.width / 4 : 0)}rem;
  height: ${(props) => (props.height ? `${props.height / 4}rem` : 'fit-content')};
  background: ${angelRed};
  padding: ${(props) => (props.p ? `${props.p / 4}rem` : '0.5rem 1rem 0.5rem 1rem')};
  padding-left: ${(props) => (props.pl && `${props.pl / 4}rem`)};
  padding-right: ${(props) => (props.pr && `${props.pr / 4}rem`)};
  padding-top: ${(props) => (props.pt && `${props.pt / 4}rem`)};
  padding-bottom: ${(props) => (props.pb && `${props.pb / 4}rem`)};
  margin: ${(props) => (props.m ? `${props.m / 4}rem` : '0rem 0rem 0rem 0rem')};
  margin-left: ${(props) => (props.ml && `${props.ml / 4}rem`)};
  margin-right: ${(props) => (props.mr && `${props.mr / 4}rem`)};
  margin-top: ${(props) => (props.mt && `${props.mt / 4}rem`)};
  margin-bottom: ${(props) => (props.mb && `${props.mb / 4}rem`)};
  min-width: ${(props) => (props.minWidth ? props.minWidth : 'fit-content')};
  border-style: none;
  border-width: 0;
  cursor: ${(props) => (props.cursor ? props.cursor : 'pointer')};
  border-radius: ${(props) => (props.radius ? props.radius === 'full' ? 9999999 : props.radius === 'none' ? 0 : Number(props.radius) : 4)}px;
  border-color: none;
  color: ${(props) => (props.txtColor ? props.txtColor : 'white')};
  transition-property: all;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  transition-delay: 150ms;
  transition-duration: 300ms;

  &:hover {
    opacity: .75;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: .75;
  }
`;

export {
  AngelButton, AngelOutlinedButton, AngelDashedButton, AngelTextButton,
  AngelLinkButton, AngelDangerButton,
};
