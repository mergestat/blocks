import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Progressbar } from './Progressbar';

export default {
  title: 'Atoms/Progressbar',
  component: Progressbar,
  argTypes: {},
} as ComponentMeta<typeof Progressbar>

const Template: ComponentStory<typeof Progressbar> = (args) => (
  <Progressbar {...args} />
);

export const LoaderProgressbar = Template.bind({})
LoaderProgressbar.args = {
  value: '0.6',
}
