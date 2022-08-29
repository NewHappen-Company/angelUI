import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'AngelUI/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args}>{args.children}</Button>;
};

export const AngelButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AngelButton.args = {
  btnType: 'primary',
  children: 'My Angel Button',
};
