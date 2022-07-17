import React, { useState } from 'react';
import useToast from '../../contexts/src/ToastContext';
import Button from '../Button';
import Column from '../Column';
import Input from '../Input';

export default function Foo() {
  const [text, setText] = useState<string>('');
  const [textII, setTextII] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { addToast } = useToast();

  function handleClick() {
    setIsLoading(true);
    addToast({
      title: text || 'Title',
      description: textII || 'Description',
      position: 'top-right',
      duration: 3000,
      withDecorator: true,
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }

  return (
    <div>
      <h1>Create a toast</h1>
      <Column>
        <Input
          placeholder="Ex: I'm a toast!"
          isFieldset
          legend="Title"
          value={text}
          onChange={(e) => setText(e.target.value)}
          mb="mb-4"
        />
        <Input
          placeholder="Ex: About my toast"
          isFieldset
          legend="Description"
          value={textII}
          onChange={(e) => setTextII(e.target.value)}
          mb="mb-4"
        />
        <Button
          btnType="primary"
          isLoading={isLoading}
          onClick={handleClick}
        >
          Generate a toast
        </Button>
      </Column>
    </div>
  );
}
