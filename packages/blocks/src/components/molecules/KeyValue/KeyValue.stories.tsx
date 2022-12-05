import { ComponentMeta, ComponentStory } from '@storybook/react';
import { KeyValue } from './KeyValue';

export default {
  title: 'Molecules/KeyValue',
  component: KeyValue,
  argTypes: {},
} as ComponentMeta<typeof KeyValue>;

const Template: ComponentStory<typeof KeyValue> = (args) => <KeyValue {...args} />;

export const Default = Template.bind({})
Default.args = {
  title: "Key",
  value: "Value"
}
