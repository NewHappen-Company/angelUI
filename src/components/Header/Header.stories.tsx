/* eslint-disable no-console */
/* eslint-disable no-undef */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header, { IHeaderProps } from './Header';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'AngelUI/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = (
  args: JSX.IntrinsicAttributes & IHeaderProps,
) => <Header {...args} />;

export const HeaderDisplay = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HeaderDisplay.args = {
  pt: 5,
  pb: 5,
  buttonOneText: 'Começar',
  buttonTwoText: 'Login',
  buttonStyleOne: {
    btnType: 'primary',
  },
  logo: (<img
    alt="angel logo"
    src="https://raw.githubusercontent.com/NewHappen-Company/angelUI/main/logo/angelLogo-colored@2x.png?raw=true"
    style={{ width: 150 }}
  />),
  children: (
    <>
      <a href="sobre">Sobre</a>
      <a href="produtos">Produtos</a>
      <a href="duvidas">Dúvidas</a>
      <a href="componentes">Componentes</a>
    </>
  ),
  redirectOnClickLogo: () => {
    console.log('redirectOnClickLogo');
  },
};
