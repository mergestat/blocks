import { SearchIcon } from '@mergestat/icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HelpText } from '../../HelpText/HelpText';
import { Label } from '../../Label';
import { Input } from './Input';

export default {
  title: 'Atoms/Form/Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputBasic = Template.bind({});
InputBasic.args = {
  placeholder: 'placeholder...',
}

export const InputError = Template.bind({});
InputError.args = {
  placeholder: 'placeholder...',
  variant: 'error',
}

export const InputWithIcon = Template.bind({});
InputWithIcon.args = {
  startIcon: <SearchIcon className="t-icon" />,
  placeholder: 'Search...',
}

export const InputWithLabel = () => {
  return (
    <div>
      <Label>Label</Label>
      <Input />
    </div>
  );
}

export const InputWithLabelAndHelper = () => {
  return (
    <div>
      <Label>Label</Label>
      <Input />
      <HelpText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</HelpText>
    </div>
  );
}

export const InputErrorWithLabel = () => {
  return (
    <div>
      <Label>Label</Label>
      <Input variant="error" />
      <HelpText variant="error">This is an error message</HelpText>
    </div>
  );
}

const HelpTextTemplate: ComponentStory<typeof HelpText> = (args) => (
  <HelpText {...args} />
);

export const HelpTextSuccess = HelpTextTemplate.bind({});
HelpTextSuccess.args = {
  variant: 'success',
  children: 'This is an help text',
}
