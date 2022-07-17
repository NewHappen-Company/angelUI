import React, { HTMLAttributes } from 'react';
import { animated } from 'react-spring';

export interface IAngelModalProps extends HTMLAttributes<HTMLDivElement> {
  animation: any;
}

const ModalOverlay = ({
  animation,
  ...rest
}: IAngelModalProps) => {
  const style = 'w-full h-full bg-black opacity-50 top-0 left-0 overflow-hidden p-0 border-0 overflow-x-hidden fixed';

  return (
    <animated.div {...rest} className={style} style={animation} />
  );
};

export default ModalOverlay;
