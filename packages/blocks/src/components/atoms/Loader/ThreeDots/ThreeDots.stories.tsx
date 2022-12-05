import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThreeDots } from './';

export default {
  title: 'Atoms/Loader/ThreeDots',
  component: ThreeDots,
  argTypes: {},
} as ComponentMeta<typeof ThreeDots>;

const Template: ComponentStory<typeof ThreeDots> = (args) => (
  <ThreeDots {...args} />
);

export const LoaderSpinner = Template.bind({});
LoaderSpinner.args = {};
