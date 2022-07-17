import React from 'react';
import { ToastContextProvider } from '../../contexts/src/ToastContext';
import Foo from './Foo';

export default function App() {
  return (
    <ToastContextProvider>
      <Foo />
    </ToastContextProvider>
  );
}
