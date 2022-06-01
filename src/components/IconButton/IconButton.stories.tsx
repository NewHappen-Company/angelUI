import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import IconButton, { IIconButtonProps } from "./IconButton";
import { FiFacebook, FaWhatsapp, FaInstagram } from "react-icons/all";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "AngelUI/IconButton",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconButton> = (
  args: JSX.IntrinsicAttributes & IIconButtonProps
) => <IconButton {...args}>{args.children}</IconButton>;

export const IconButtonDisplay = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
IconButtonDisplay.args = {
  children: (
    <>
      <FiFacebook style={{ fill: "trasparent", color: "rgba(243, 246, 249, 0.65" }} />
    </>
  ),
};
