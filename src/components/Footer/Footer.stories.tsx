/* eslint-disable no-console */
/* eslint-disable no-undef */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Footer, { IFooterProps } from './Footer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'AngelUI/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Footer> = (
  args: JSX.IntrinsicAttributes & IFooterProps,
) => <Footer {...args} />;

export const FooterDisplay = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FooterDisplay.args = {
  privacity: 'https://angel.com.br/privacidade',
  terms: 'https://angel.com.br/terms',
  name: 'Newhappen',
  instagram: 'https://instagram.com/newhappen_br',
  facebook: 'https://facebook.com/nhappn',
  youtube: 'https://youtube.com/newhappen',
  twitter: 'https://twitter.com/newhappen',
  logo: (<img
    alt="angel logo"
    src="https://raw.githubusercontent.com/NewHappen-Company/angelUI/main/logo/angelLogo-colored@2x.png?raw=true"
    style={{ width: 150 }}
  />),
  description: 'Este produto oferece atendimento psicopedagógico a uma instituição de ensino enquanto faz a gestão dos profissionais envolvidos e fornece relatórios sobre o desenvolvimento dos alunos.',
  whoWeAre: 'Somos uma empresa de desenvolvimento de software focada em resolver problemas relacionados a saúde e a educação.',
};
