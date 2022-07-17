import React, { useState } from 'react';
import Button from '../Button';
import Column from '../Column';

interface IFooProps {
  execute: () => void;
}

export default function Foo({ execute }: IFooProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleClick() {
    setIsLoading(true);

    setTimeout(() => {
      execute();
      setIsLoading(false);
    }, 500);
  }

  return (
    <div>
      <h1>Wow! It&apos;s a modal!</h1>
      <Column>
        <Button
          btnType="primary"
          isLoading={isLoading}
          onClick={handleClick}
        >
          Generate a modal
        </Button>
      </Column>
      <h1>Wow! It&apos;s a modal!</h1>
      <Column>
        <Button
          btnType="primary"
          isLoading={isLoading}
          onClick={handleClick}
        >
          Generate a modal
        </Button>
      </Column>
      <h1>Wow! It&apos;s a modal!</h1>
      <Column>
        <Button
          btnType="primary"
          isLoading={isLoading}
          onClick={handleClick}
        >
          Generate a modal
        </Button>
      </Column>
      <h1>Wow! It&apos;s a modal!</h1>
      <Column>
        <Button
          btnType="primary"
          isLoading={isLoading}
          onClick={handleClick}
        >
          Generate a modal
        </Button>
      </Column>
      <h1>Wow! It&apos;s a modal!</h1>
      <Column>
        <Button
          btnType="primary"
          isLoading={isLoading}
          onClick={handleClick}
        >
          Generate a modal
        </Button>
      </Column>
      <h1>Wow! It&apos;s a modal!</h1>
      <Column>
        <Button
          btnType="primary"
          isLoading={isLoading}
          onClick={handleClick}
        >
          Generate a modal
        </Button>
      </Column>
      <h1>Wow! It&apos;s a modal!</h1>
      <Column>
        <Button
          btnType="primary"
          isLoading={isLoading}
          onClick={handleClick}
        >
          Generate a modal
        </Button>
      </Column>
      <h1>Wow! It&apos;s a modal!</h1>
      <Column>
        <Button
          btnType="primary"
          isLoading={isLoading}
          onClick={handleClick}
        >
          Generate a modal
        </Button>
      </Column>
      <h1>Wow! It&apos;s a modal!</h1>
      <Column>
        <Button
          btnType="primary"
          isLoading={isLoading}
          onClick={handleClick}
        >
          Generate a modal
        </Button>
      </Column>
      <h1>Wow! It&apos;s a modal!</h1>
      <Column>
        <Button
          btnType="primary"
          isLoading={isLoading}
          onClick={handleClick}
        >
          Generate a modal
        </Button>
      </Column>
      <h1>Wow! It&apos;s a modal!</h1>
      <Column>
        <Button
          btnType="primary"
          isLoading={isLoading}
          onClick={handleClick}
        >
          Generate a modal
        </Button>
      </Column>
      <h1>Wow! It&apos;s a modal!</h1>
      <Column>
        <Button
          btnType="primary"
          isLoading={isLoading}
          onClick={handleClick}
        >
          Generate a modal
        </Button>
      </Column>
      <h1>Wow! It&apos;s a modal!</h1>
      <Column>
        <Button
          btnType="primary"
          isLoading={isLoading}
          onClick={handleClick}
        >
          Generate a modal
        </Button>
      </Column>
      <h1>Wow! It&apos;s a modal!</h1>
      <Column>
        <Button
          btnType="primary"
          isLoading={isLoading}
          onClick={handleClick}
        >
          Generate a modal
        </Button>
      </Column>
      <h1>Wow! It&apos;s a modal!</h1>
      <Column>
        <Button
          btnType="primary"
          isLoading={isLoading}
          onClick={handleClick}
        >
          Generate a modal
        </Button>
      </Column>
      <h1>Wow! It&apos;s a modal!</h1>
      <Column>
        <Button
          btnType="primary"
          isLoading={isLoading}
          onClick={handleClick}
        >
          Generate a modal
        </Button>
      </Column>
    </div>
  );
}
