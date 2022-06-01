import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Row, { IRowProps } from "./Row";
import Button from "../Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "AngelUI/Layout/Row",
  component: Row,
} as ComponentMeta<typeof Row>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Row> = (args: JSX.IntrinsicAttributes & IRowProps) => <Row {...args}>{args.children}</Row>;

export const ReverseRow = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ReverseRow.args = {
  horizontalAlign: "start",
  reverse: true,
  w: 'w-64',
  bg: 'bg-angelWhite',
  h: 'h-12',
  children: <>
    <Button btnType="primary" size="small">Button 1</Button>
    <Button btnType="primary" size="small">Button 2</Button>
  </>
};