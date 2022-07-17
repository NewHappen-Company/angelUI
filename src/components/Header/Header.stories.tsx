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
  buttonOneText: 'Começar',
  buttonTwoText: 'Login',
  buttonStyleOne: {
    btnType: 'primary',
  },
  redirectOnClickLogo: () => {
    console.log('redirectOnClickLogo');
  },
};
