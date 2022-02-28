import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "AngelUI/Button/Sizes",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>{args.children}</Button>;

export const SmallButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SmallButton.args = {
  btnType: "primary",
  children: "Small Button",
  size: "small"
};

export const MediumButton = Template.bind({});
MediumButton.args = {
  btnType: "primary",
  children: "Medium Button",
  size: "medium"
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  btnType: "primary",
  children: "Medium Button",
  size: "large"
};