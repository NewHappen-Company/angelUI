import React, { useState } from 'react';
import Button from '../Button';
import Foo from './Foo';
import Modal from './Modal';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <>
      <Foo execute={() => setIsOpen(true)} />
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalHeader>
          <h1>Title Modal</h1>
        </ModalHeader>

        <ModalBody>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod,
            nisi vel consectetur
          </p>
        </ModalBody>

        <ModalFooter>
          <Button btnType="primary" size="small">Button</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
