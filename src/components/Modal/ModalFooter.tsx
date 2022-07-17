import React, { ReactNode } from 'react';

interface IAngelModalFooterProps {
  children: ReactNode;
}

const ModalFooter = ({ children }: IAngelModalFooterProps) => {
  return (
    <div className="mt-4 flex justify-end">
      {children}
    </div>
  );
};

export default ModalFooter;
