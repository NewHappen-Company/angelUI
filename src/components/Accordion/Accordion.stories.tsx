import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Accordion, { IAccordionProps } from "./Accordion";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "AngelUI/Accordion",
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Accordion> = (
  args: JSX.IntrinsicAttributes & IAccordionProps
) => <Accordion {...args}>{args.children}</Accordion>;

export const AccordionDisplay = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AccordionDisplay.args = {
  text: "Como funciona a newhappen para empresas?",
  children:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic doloremque vitae sint vero laboriosam esse veniam, illum molestias, repellendus dolor corporis voluptate dolores reiciendis impedit placeat! Voluptates sequi quidem iste?Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic doloremque vitae sint vero laboriosam esse veniam, illum molestias, repellendus dolor corporis voluptate dolores reiciendis impedit placeat! Voluptates sequi quidem iste?Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic doloremque vitae sint vero laboriosam esse veniam, illum molestias, repellendus dolor corporis voluptate dolores reiciendis impedit placeat! Voluptates sequi quidem iste?Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic doloremque vitae sint vero laboriosam esse veniam, illum molestias, repellendus dolor corporis voluptate dolores reiciendis impedit placeat! Voluptates sequi quidem iste?",
};
