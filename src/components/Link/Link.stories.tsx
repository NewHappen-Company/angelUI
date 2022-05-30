import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Link, { ILinkProps } from "./Link";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "AngelUI/Link",
  component: Link,
} as ComponentMeta<typeof Link>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Link> = (args: JSX.IntrinsicAttributes & ILinkProps) => <Link {...args}>{args.children}</Link>;

export const RegularLink = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RegularLink.args = {
  fontWeight: "regular",
  children: "Regular Link",
};

export const SemiboldLink = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SemiboldLink.args = {
  fontWeight: "semibold",
  children: "Semibold Link",
};

