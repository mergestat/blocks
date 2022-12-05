import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Checkbox, CHECKBOX_STATES } from './Checkbox';

export default {
  title: 'Atoms/Form/Checkbox',
  component: Checkbox,
  argTypes: {},
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Single = Template.bind({});
Single.args = {
  label: 'Checkbox Label',
  value: CHECKBOX_STATES.Indeterminate
}

export const CheckboxGroup = () => {
  return (
    <Checkbox.Group>
      <Checkbox label="Checkbox 1" />
      <Checkbox label="Checkbox 2" />
      <Checkbox label="Checkbox 3" />
      <Checkbox label="Checkbox 4" />
    </Checkbox.Group>
  );
}

export const CheckboxGroupInline = () => {
  return (
    <Checkbox.Group inline={true}>
      <Checkbox label="Checkbox 1" />
      <Checkbox label="Checkbox 2" />
      <Checkbox label="Checkbox 3" />
      <Checkbox label="Checkbox 4" />
    </Checkbox.Group>
  );
}
