import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "AngelUI/Button/Types",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>{args.children}</Button>;

export const PrimaryButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryButton.args = {
  btnType: "primary",
  children: "Primary Button"
};

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  btnType: "outlined",
  children: "Outlined Button"
};

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  children: "Default Button"
};

export const DashedButton = Template.bind({});
DashedButton.args = {
  btnType: "dashed",
  children: "Dashed Button"
};

export const TextButton = Template.bind({});
TextButton.args = {
  btnType: "text",
  children: "Text Button"
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  btnType: "link",
  children: "Link Button"
};