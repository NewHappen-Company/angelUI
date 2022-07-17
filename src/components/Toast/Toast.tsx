import React, { HTMLAttributes } from 'react';
import { FiInfo, FiX } from 'react-icons/fi';
import { animated } from 'react-spring';
import useToast from '../../contexts/src/ToastContext';

export interface IAngelToastProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  type?: 'info' | 'warning' | 'error' | 'success';
  title?: string;
  description?: string;
  withDecorator?: boolean;
  withIcon?: boolean;
  animation: any;
}

const ToastComponent = ({
  id,
  type = 'info',
  title,
  description,
  withDecorator = false,
  withIcon = true,
  animation,
  ...rest
}: IAngelToastProps) => {
  const { removeToast } = useToast();

  const toastStyleDefault = 'w-80 items-center flex flex-col rounded mb-4 relative';
  const toastIconViewStyle = 'w-8 h-8 rounded mr-4 flex items-center justify-center min-w-8';
  const toastViewStyle = `flex w-full items-center ${description ? 'px-4 py-4' : 'p-4'}`;
  const toastDecoratorStyle = 'w-full h-2 rounded-t';
  const toastTitleStyle = 'text-md font-bold select-none';
  const toastSubtitleStyle = 'text-sm select-none';
  const toastContentStyle = 'flex flex-col';
  const toastButtonStyle = 'absolute top-2 right-4 w-6 h-6 rounded hover:bg-angelBlue.25 transition-all duration-300 flex items-center justify-center';

  // Info Type
  const toastStyleInfo = 'bg-angelBlue.05';
  const toastIconStyleInfo = 'bg-angelBlue.25';
  const toastStyleTitleInfo = 'text-angelBlueTitle';
  const toastDecoratorStyleInfo = 'bg-angelBlue.25Full';
  const toastStyleSubtitleInfo = 'text-angelBlueSubtitle';

  return (
    <animated.div
      className={`
        ${toastStyleDefault}
        ${type === 'info' ? toastStyleInfo : ''}
      `}
      style={animation}
      {...rest}
    >
      <button className={`${toastButtonStyle}`} onClick={() => removeToast(id)}>
        <FiX style={{ color: '#143D63' }} />
      </button>
      { withDecorator && (
        <div className={`${toastDecoratorStyle} ${toastDecoratorStyleInfo}`} />
      ) }
      <div className={`${toastViewStyle}`}>
        { withIcon && (
          <div className={`${toastIconViewStyle} ${toastIconStyleInfo}`}>
            {type === 'info' && <FiInfo style={{ color: '#143D63' }} />}
          </div>
        ) }
        <div className={`${toastContentStyle}`}>
          <h1 className={`${toastTitleStyle} ${toastStyleTitleInfo}`}>{title}</h1>
          <p className={`${toastSubtitleStyle} ${toastStyleSubtitleInfo}`}>{description}</p>
        </div>
      </div>
    </animated.div>
  );
};

export default ToastComponent;
