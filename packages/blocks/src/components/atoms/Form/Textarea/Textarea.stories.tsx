import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Label } from '../../Label';
import { Textarea } from './TextArea';

export default {
  title: 'Atoms/Form/Textarea',
  component: Textarea,
  argTypes: {},
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

export const TextareaBasic = Template.bind({});
TextareaBasic.args = {
  placeholder: 'placeholder...',
}

export const TextareaWithLabel = () => {
  return (
    <div>
      <Label>Label</Label>
      <Textarea />
    </div>
  );
}
