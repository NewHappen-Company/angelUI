/* eslint-disable no-unused-vars */
import React, {
  useCallback, useContext, useState, createContext,
} from 'react';
import { v4 as uuid } from 'uuid';
import { useTransition } from 'react-spring';
import Toast from '../../components/Toast';

interface IToastProps {
  id: string;
  title: string;
  description?: string;
  position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  duration?: number;
  withDecorator?: boolean;
  withIcon?: boolean;
}

interface ToastContextData {
  addToast:(data: IToastProps) => void;
  removeToast:(id: string) => void;
}

const ToastContext = createContext({} as ToastContextData);

export function ToastContextProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<IToastProps[]>([]);
  const wrapper = `${toasts.length ? `toasts-wrapper-${toasts[toasts.length - 1].position}` : 'toasts-wrapper-top-right'}`;

  const addToast = useCallback(
    ({
      title,
      description,
      position = 'top-right',
      duration = 3000,
      withDecorator = false,
      withIcon = true,
    }: IToastProps) => {
      const id = uuid();
      const newToast = {
        id,
        title,
        description,
        position,
        duration,
        withDecorator,
        withIcon,
      };
      setToasts((toastsOld) => [...toastsOld, newToast]);
      setTimeout(() => setToasts((toastsI) => toastsI.slice(1)), duration);
    },
    [setToasts],
  );

  const removeToast = useCallback((id: string) => {
    setToasts((state) => state.filter((messages) => messages.id !== id));
  }, []);

  const messageWithTransitions = useTransition(
    toasts,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div className={`${wrapper}`}>
        {messageWithTransitions((props, toast) => (
          <Toast
            key={toast.id}
            id={toast.id}
            withDecorator={toast.withDecorator}
            title={toast.title}
            description={toast.description}
            withIcon={toast.withIcon}
            animation={props}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export default function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}
