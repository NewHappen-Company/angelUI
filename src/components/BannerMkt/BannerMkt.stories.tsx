import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BannerMkt, { IBannerMktProps } from "./BannerMkt";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "AngelUI/BannerMkt",
  component: BannerMkt,
} as ComponentMeta<typeof BannerMkt>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BannerMkt> = (
  args: JSX.IntrinsicAttributes & IBannerMktProps
) => <BannerMkt {...args}>{args.children}</BannerMkt>;

export const Banner = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Banner.args = {
  children: "😎 Foi indicado por uma empresa cliente? Clique aqui",
};
