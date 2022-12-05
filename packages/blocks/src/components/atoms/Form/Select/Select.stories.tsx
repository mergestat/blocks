import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Label } from '../../Label';
import { Select } from './Select';

export default {
  title: 'Atoms/Form/Select',
  component: Select,
  argTypes: {},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const SelectBasic = Template.bind({});
SelectBasic.args = {
  placeholder: 'placeholder...',
  children: (
    <>
      <Select.Option value="option1">Option 1</Select.Option>
      <Select.Option value="option2">Option 2</Select.Option>
      <Select.Option value="option3">Option 3</Select.Option>
      <Select.Option value="option4">Option 4</Select.Option>
      <Select.Option value="option5">Option 5</Select.Option>
    </>
  ),
}

export const SelectWithLabel = () => {
  return (
    <div>
      <Label>Label</Label>
      <Select>
        <Select.Option value="option1">Option 1</Select.Option>
        <Select.Option value="option2">Option 2</Select.Option>
        <Select.Option value="option3">Option 3</Select.Option>
        <Select.Option value="option4">Option 4</Select.Option>
        <Select.Option value="option5">Option 5</Select.Option>
      </Select>
    </div>
  );
}
