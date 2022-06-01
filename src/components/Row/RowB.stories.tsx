import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Row, { IRowProps } from "./Row";
import Button from "../Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "AngelUI/Layout/Row/HorizontalAlign",
  component: Row,
} as ComponentMeta<typeof Row>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Row> = (args: JSX.IntrinsicAttributes & IRowProps) => <Row {...args}>{args.children}</Row>;

export const StartRow = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
StartRow.args = {
  horizontalAlign: "start",
  w: 'w-64',
  bg: 'bg-angelWhite',
  h: 'h-12',
  children: <>
    <Button btnType="primary" size="small">Button 1</Button>
    <Button btnType="primary" size="small">Button 2</Button>
  </>
};

export const EndRow = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EndRow.args = {
  horizontalAlign: "end",
  w: 'w-64',
  bg: 'bg-angelWhite',
  h: 'h-12',
  children: <>
    <Button btnType="primary" size="small">Button 1</Button>
    <Button btnType="primary" size="small">Button 2</Button>
  </>
};

export const CenterRow = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CenterRow.args = {
  horizontalAlign: "center",
  w: 'w-64',
  bg: 'bg-angelWhite',
  h: 'h-12',
  children: <>
    <Button btnType="primary" size="small">Button 1</Button>
    <Button btnType="primary" size="small">Button 2</Button>
  </>
};

export const BetweenRow = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BetweenRow.args = {
  horizontalAlign: "between",
  w: 'w-64',
  bg: 'bg-angelWhite',
  h: 'h-12',
  children: <>
    <Button btnType="primary" size="small">Button 1</Button>
    <Button btnType="primary" size="small">Button 2</Button>
  </>
};

export const AroundRow = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AroundRow.args = {
  horizontalAlign: "around",
  w: 'w-64',
  bg: 'bg-angelWhite',
  h: 'h-12',
  children: <>
    <Button btnType="primary" size="small">Button 1</Button>
    <Button btnType="primary" size="small">Button 2</Button>
  </>
};

export const EvenlyRow = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EvenlyRow.args = {
  horizontalAlign: "evenly",
  w: 'w-64',
  bg: 'bg-angelWhite',
  h: 'h-12',
  children: <>
    <Button btnType="primary" size="small">Button 1</Button>
    <Button btnType="primary" size="small">Button 2</Button>
  </>
};