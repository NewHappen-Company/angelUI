import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Modal from './TestToStories';
import LoginApp from './LoginModalToStories';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'AngelUI/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = () => <Modal />;
const TemplateI: ComponentStory<typeof LoginApp> = () => <LoginApp />;

export const MainModal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MainModal.args = {};

export const LoginModal = TemplateI.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LoginModal.args = {};
