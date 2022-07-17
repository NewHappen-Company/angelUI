import React, { useState } from 'react';
import Button from '../Button';
import Column from '../Column';
import Input from '../Input';
import Foo from './Foo';
import Modal from './Modal';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';

export default function LoginApp() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <>
      <Foo execute={() => setIsOpen(true)} />
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalHeader>
          <h1 className="text-xl font-bold">Login Modal</h1>
        </ModalHeader>

        <ModalBody>
          <Column w="w-full">
            <Input isFieldset legend="E-mail" w="w-full" mb="mb-4" placeholder="Digite seu e-mail aqui" />
            <Input isFieldset legend="Senha" w="w-full" placeholder="Digite sua senha aqui" type="password" />
          </Column>
        </ModalBody>

        <ModalFooter>
          <Button size="small" mr="mr-4" onClick={handleClose}>Cancelar</Button>
          <Button btnType="primary" size="small" onClick={handleClose}>Entrar</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
