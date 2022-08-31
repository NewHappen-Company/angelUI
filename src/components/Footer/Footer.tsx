import React, { HTMLAttributes } from 'react';
import { IAngelDefaultProps } from '../../../@types/defaults';

interface IFooterProps extends HTMLAttributes<HTMLElement> {}
type IAngelFooter = IFooterProps & IAngelDefaultProps;

const Footer = ({
  children,
}: IAngelFooter) => {
  return (
    <footer>
      {children}
    </footer>
  );
};

export default Footer;
