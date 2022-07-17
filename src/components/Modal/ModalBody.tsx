import React, { ReactNode } from 'react';

interface IAngelModalBodyProps {
  children: ReactNode;
}

const ModalBody = ({ children }: IAngelModalBodyProps) => {
  return (
    <div className="mt-4">
      {children}
    </div>
  );
};

export default ModalBody;
