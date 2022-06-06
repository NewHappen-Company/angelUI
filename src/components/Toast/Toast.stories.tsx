import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Toast from "./TestToStories";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "AngelUI/Toast",
  component: Toast,
} as ComponentMeta<typeof Toast>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Toast> = () => <Toast/>;

export const MainToast = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MainToast.args = {};