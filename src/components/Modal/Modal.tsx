import React, {
  HTMLAttributes, ReactNode, useEffect, useState,
} from 'react';
import { animated, useTransition } from 'react-spring';
import IDefaultProps from '../../../@types/defaults';
import CloseButton from './CloseButton';
import ModalOverlay from './ModalOverlay';

export interface IModalProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => any;
}

type IAngelModalProps = IModalProps & IDefaultProps;

const Modal = ({
  children,
  size = 'md',
  isOpen = true,
  onClose,
}: IAngelModalProps) => {
  const [show, setShow] = useState<string[]>([]);
  const [realIsOpen, setRealIsOpen] = useState(isOpen);
  const style = 'w-full p-6 bg-white rounded relative';
  const sizeStyle = `min-h-max ${size === 'sm' ? 'max-w-sm' : size === 'md' ? 'max-w-md' : size === 'lg' ? 'max-w-lg' : size === 'xl' ? 'max-w-xl' : size === '2xl' ? 'max-w-2xl' : size === '3xl' ? 'max-w-3xl' : size === '4xl' ? 'max-w-4xl' : size === '5xl' ? 'max-w-5xl' : 'max-w-full'}`;

  const transition = useTransition(
    show,
    {
      from: { top: '-120%', opacity: 0 },
      enter: { top: '0%', opacity: 1 },
      leave: { top: '-120%', opacity: 0 },
    },
  );

  const transitionOverlay = useTransition(
    show,
    {
      from: { opacity: 0 },
      enter: { opacity: 0.5 },
      leave: { opacity: 0 },
    },
  );

  function executeLeaveAnimation() {
    setShow([]);
    setTimeout(() => {
      const body = document.querySelector('body');
      if (body) {
        body.classList.remove('overflow-hidden');
      }
      setRealIsOpen(false);
      onClose();
    }, 100);
  }

  useEffect(() => {
    if (isOpen) {
      setShow(['show']);
      setRealIsOpen(true);
      const body = document.querySelector('body');
      if (body) {
        body.classList.add('overflow-hidden');
      }
    } else {
      executeLeaveAnimation();
    }
  }, [isOpen]);

  if (realIsOpen) {
    return (
      <div className="overflow-hidden w-full h-full">
        {transitionOverlay((styles, item) => item && (<ModalOverlay animation={styles} />))}
        <div className="w-full absolute flex items-center justify-center mt-10 top-0">
          {transition((styles, item) => item && (
            <animated.div className={`${style} ${sizeStyle}`} style={styles}>
              <CloseButton onClose={executeLeaveAnimation} />
              <div>
                {children}
              </div>
            </animated.div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export default Modal;
