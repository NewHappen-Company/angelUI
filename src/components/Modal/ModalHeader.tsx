import React, { ReactNode } from 'react';

interface IAngelModalHeaderProps {
  children: ReactNode;
}

const ModalHeader = ({ children }: IAngelModalHeaderProps) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default ModalHeader;
