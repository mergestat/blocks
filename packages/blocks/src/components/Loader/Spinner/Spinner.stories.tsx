import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Spinner } from './Spinner';

export default {
  title: 'Atoms/Loader/Spinner',
  component: Spinner,
  argTypes: {},
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

export const LoaderSpinner = Template.bind({});
LoaderSpinner.args = {};

export const LoaderSpinnerMuted = Template.bind({});
LoaderSpinnerMuted.args = {
  skin: 'muted',
};

export const LoaderSpinnerSmall = Template.bind({});
LoaderSpinnerSmall.args = {
  size: 'sm',
};
