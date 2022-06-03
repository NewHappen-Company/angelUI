import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./Input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "AngelUI/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args}>{args.children}</Input>;

export const MainInput = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MainInput.args = {
  legend: "Input",
  placeholder: "Ex:. Nome completo",
  w: "w-64"
};