import styled from 'styled-components';
import { angelGray, angelGray100, angelGrayP65 } from '../../../@types/colors';
import { IAngelDefaultProps } from '../../../@types/defaults';

export const AngelFooter = styled.footer<IAngelDefaultProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width || '100%'};
  background: ${(props) => props.bg || '#000'};
`;

export const AngelFooterWrapper = styled.div<IAngelDefaultProps>`
  display: flex;
  width: 100%;
  max-width: 72rem;
  justify-content: space-between;
  padding-left: ${(props) => (props.pl && props.pl !== 0 ? `${props.pl / 4}rem` : props.p ? `${props.p / 4}rem` : '1rem')};
  padding-right: ${(props) => (props.pr && props.pr !== 0 ? `${props.pr / 4}rem` : props.p ? `${props.p / 4}rem` : '1rem')};
  padding-top: ${(props) => (props.pt && props.pt !== 0 ? `${props.pt / 4}rem` : props.p ? `${props.p / 4}rem` : '5rem')};
  padding-bottom: ${(props) => (props.pb && props.pb !== 0 ? `${props.pb / 4}rem` : props.p ? `${props.p / 4}rem` : '5rem')};
  margin-left: ${(props) => (props.ml && props.ml !== 0 ? `${props.ml / 4}rem` : props.m ? `${props.m / 4}rem` : '0rem')};
  margin-right: ${(props) => (props.mr && props.mr !== 0 ? `${props.mr / 4}rem` : props.m ? `${props.m / 4}rem` : '0rem')};
  margin-top: ${(props) => (props.mt && props.mt !== 0 ? `${props.mt / 4}rem` : props.m ? `${props.m / 4}rem` : '0rem')};
  margin-bottom: ${(props) => (props.mb && props.mb !== 0 ? `${props.mb / 4}rem` : props.m ? `${props.m / 4}rem` : '0rem')};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AngelFooterDiv = styled.p<IAngelDefaultProps>`
  width: 23%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const AngelFooterName = styled.span`
  margin-top: .7rem;
  color: ${angelGray};
`;

export const AngelFooterLink = styled.a<IAngelDefaultProps>`
  color: ${(props) => props.txtColor || '#fff'};
  margin-right: 2.5rem;
  transition: all;
  transition-duration: 300ms;

  &:hover {
    opacity: .75;
    text-decoration: underline;
  }
`;

export const AngelFooterSocialDiv = styled.div`
  display: flex;
  margin-bottom: 2rem;
  margin-top: 2rem;
`;

export const AngelFooterSocial = styled.a<IAngelDefaultProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  border-radius: .25rem;
  margin-right: 1.25rem;
  background: ${(props) => props.bg || angelGray100};
  color: ${(props) => props.txtColor || angelGrayP65};
  transition: all;
  transition-duration: 300ms;

  &:hover {
    opacity: .75;
  }
`;

export const AngelFooterTitle = styled.h1<IAngelDefaultProps>`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => props.txtColor || '#FFF'};
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`;

export const AngelFooterText = styled.p<IAngelDefaultProps>`
  color: ${angelGray};
  text-align: justify;
`;
