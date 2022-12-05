import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HelpText } from './HelpText';

export default {
  title: 'Atoms/HelpText',
  component: HelpText,
  argTypes: {},
} as ComponentMeta<typeof HelpText>;

const HelpTextTemplate: ComponentStory<typeof HelpText> = (args) => (
  <HelpText {...args} />
);

export const HelpTextDefault = HelpTextTemplate.bind({});
HelpTextDefault.args = {
  variant: 'default',
  children: 'This is an help text',
};

export const HelpTextSuccess = HelpTextTemplate.bind({});
HelpTextSuccess.args = {
  variant: 'success',
  children: 'This is an help text',
};

export const HelpTextError = HelpTextTemplate.bind({});
HelpTextError.args = {
  variant: 'error',
  children: 'This is an help text',
};
