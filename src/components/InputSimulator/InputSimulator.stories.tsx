import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputSimulator from "./InputSimulator";
import '../styles/tailwind.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "AngelUI/InputSimulator/Main",
  component: InputSimulator,
} as ComponentMeta<typeof InputSimulator>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputSimulator> = (args) => <InputSimulator {...args}>{args.children}</InputSimulator>;

export const MainInputSimulator = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MainInputSimulator.args = {
  children: 'I am an input simulator',
};