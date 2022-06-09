import React, { ReactNode } from "react";
import { ToastContextProvider } from './ToastContext';

interface AngelProviderProps {
  children: ReactNode;
}

const AngelProvider = ({ children }: AngelProviderProps) => {
  return (
    <ToastContextProvider>
      {children}
    </ToastContextProvider>
  );
};

export default AngelProvider;
