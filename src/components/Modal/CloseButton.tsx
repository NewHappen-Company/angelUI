import React, { ButtonHTMLAttributes } from 'react';
import { FiX } from 'react-icons/fi';
import IDefaultProps from '../../../@types/defaults';

export interface ICloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClose?: () => void;
}

type IAngelButtonProps = ICloseButtonProps & IDefaultProps;

const CloseButton = ({ onClose }: IAngelButtonProps) => {
  return (
    <button className="p-2 rounded-full bg-slate-100 flex items-center justify-content absolute top-2 right-2 transition-all duration-300 hover:opacity-75" onClick={onClose}>
      <FiX style={{ opacity: 0.5 }} />
    </button>
  );
};

export default CloseButton;
