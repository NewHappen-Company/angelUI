import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Column, { IColumnProps } from "./Column";
import Button from "../Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "AngelUI/Layout/Column/VerticalAlign",
  component: Column,
} as ComponentMeta<typeof Column>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Column> = (args: JSX.IntrinsicAttributes & IColumnProps) => <Column {...args}>{args.children}</Column>;

export const StartColumn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
StartColumn.args = {
  verticalAlign: "start",
  w: 'w-40',
  bg: 'bg-angelWhite',
  h: 'h-64',
  children: <>
    <Button btnType="primary" size="small">Button 1</Button>
    <Button btnType="primary" size="small">Button 2</Button>
  </>
};

export const EndColumn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EndColumn.args = {
  verticalAlign: "end",
  w: 'w-40',
  bg: 'bg-angelWhite',
  h: 'h-64',
  children: <>
    <Button btnType="primary" size="small">Button 1</Button>
    <Button btnType="primary" size="small">Button 2</Button>
  </>
};

export const CenterColumn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CenterColumn.args = {
  verticalAlign: "center",
  w: 'w-40',
  bg: 'bg-angelWhite',
  h: 'h-64',
  children: <>
    <Button btnType="primary" size="small">Button 1</Button>
    <Button btnType="primary" size="small">Button 2</Button>
  </>
};

export const BetweenColumn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BetweenColumn.args = {
  verticalAlign: "between",
  w: 'w-40',
  bg: 'bg-angelWhite',
  h: 'h-64',
  children: <>
    <Button btnType="primary" size="small">Button 1</Button>
    <Button btnType="primary" size="small">Button 2</Button>
  </>
};

export const AroundColumn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AroundColumn.args = {
  verticalAlign: "around",
  w: 'w-40',
  bg: 'bg-angelWhite',
  h: 'h-64',
  children: <>
    <Button btnType="primary" size="small">Button 1</Button>
    <Button btnType="primary" size="small">Button 2</Button>
  </>
};

export const EvenlyColumn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EvenlyColumn.args = {
  verticalAlign: "evenly",
  w: 'w-40',
  bg: 'bg-angelWhite',
  h: 'h-64',
  children: <>
    <Button btnType="primary" size="small">Button 1</Button>
    <Button btnType="primary" size="small">Button 2</Button>
  </>
};