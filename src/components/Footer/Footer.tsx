import { format } from 'date-fns';
import React, { HTMLAttributes, ReactNode } from 'react';
import {
  FiFacebook, FiInstagram, FiTwitter, FiYoutube,
} from 'react-icons/fi';
import { IAngelDefaultProps } from '../../../@types/defaults';
import {
  AngelFooter, AngelFooterDiv, AngelFooterLink, AngelFooterName,
  AngelFooterSocial, AngelFooterSocialDiv, AngelFooterText, AngelFooterTitle, AngelFooterWrapper,
} from './styles';

export interface IFooterProps extends HTMLAttributes<HTMLElement> {
  description?: string;
  whoWeAre?: string;
  name?: string;
  privacity?: string;
  terms?: string;
  colorLink?: string;
  colorSocialButtons?: string;
  colorSocialIcons?: string;
  instagram?: string;
  facebook?: string;
  youtube?: string;
  twitter?: string;
  logo?: ReactNode;
  colorTitle?: string;
}
type IAngelFooter = IFooterProps & IAngelDefaultProps;

const Footer = ({
  width,
  bg,
  privacity,
  terms,
  description,
  whoWeAre,
  name,
  colorLink,
  colorSocialButtons,
  colorSocialIcons,
  instagram,
  facebook,
  youtube,
  twitter,
  logo,
  colorTitle,
}: IAngelFooter) => {
  return (
    <AngelFooter
      width={width}
      bg={bg}
    >
      <AngelFooterWrapper>
        <AngelFooterDiv>
          {logo}
          <AngelFooterSocialDiv>
            {instagram && (
              <AngelFooterSocial
                bg={colorSocialButtons}
                txtColor={colorSocialIcons}
                target="_blank"
                rel="noreferrer"
                href={instagram}
              >
                <FiInstagram />
              </AngelFooterSocial>
            )}
            {facebook && (
              <AngelFooterSocial
                bg={colorSocialButtons}
                txtColor={colorSocialIcons}
                target="_blank"
                rel="noreferrer"
                href={facebook}
              >
                <FiFacebook />
              </AngelFooterSocial>
            )}
            {youtube && (
              <AngelFooterSocial
                bg={colorSocialButtons}
                txtColor={colorSocialIcons}
                target="_blank"
                rel="noreferrer"
                href={youtube}
              >
                <FiYoutube />
              </AngelFooterSocial>
            )}
            {twitter && (
              <AngelFooterSocial
                bg={colorSocialButtons}
                txtColor={colorSocialIcons}
                target="_blank"
                rel="noreferrer"
                href={twitter}
              >
                <FiTwitter />
              </AngelFooterSocial>
            )}
          </AngelFooterSocialDiv>
          <div>
            {privacity && (
              <AngelFooterLink
                target="_blank"
                rel="noreferrer"
                href={privacity}
                txtColor={colorLink}
              >
                Privacidade
              </AngelFooterLink>
            )}
            {terms && (
              <AngelFooterLink
                target="_blank"
                rel="noreferrer"
                href={terms}
                txtColor={colorLink}
              >
                Termos
              </AngelFooterLink>
            )}
          </div>
          <AngelFooterName>
            {format(new Date(), 'yyyy')}
            ,
            {' '}
            {name}
          </AngelFooterName>
        </AngelFooterDiv>
        <AngelFooterDiv />
        <AngelFooterDiv>
          <AngelFooterTitle
            txtColor={colorTitle}
          >
            Nosso produto
          </AngelFooterTitle>
          <AngelFooterText>
            {description}
          </AngelFooterText>
        </AngelFooterDiv>
        <AngelFooterDiv>
          <AngelFooterTitle
            txtColor={colorTitle}
          >
            Quem somos
          </AngelFooterTitle>
          <AngelFooterText>
            {whoWeAre}
          </AngelFooterText>
        </AngelFooterDiv>
      </AngelFooterWrapper>
    </AngelFooter>
  );
};

export default Footer;
