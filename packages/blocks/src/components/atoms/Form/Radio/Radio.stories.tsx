import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Radio } from './Radio';

export default {
  title: 'Atoms/Form/Radio',
  component: Radio,
  argTypes: {},
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Single = Template.bind({});
Single.args = {
  label: 'Radio Label',
}

export const RadioGroup = () => {
  return (
    <Radio.Group>
      <Radio label="Radio 1" name="radio" />
      <Radio label="Radio 2" name="radio" />
      <Radio label="Radio 3" name="radio" />
      <Radio label="Radio 4" name="radio" />
    </Radio.Group>
  );
}

export const RadioGroupInline = () => {
  return (
    <Radio.Group inline>
      <Radio label="Radio 1" name="radio" />
      <Radio label="Radio 2" name="radio" />
      <Radio label="Radio 3" name="radio" />
      <Radio label="Radio 4" name="radio" />
    </Radio.Group>
  );
}
