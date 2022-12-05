import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Filter } from './Filter';

export default {
  title: 'Molecules/Filter',
  component: Filter,
  argTypes: {},
} as ComponentMeta<typeof Filter>;

const Template: ComponentStory<typeof Filter> = (args) => <Filter {...args} />;

export const Default = Template.bind({});
Default.args = {
  closable: false
}

export const Filtered = Template.bind({});
Filtered.args = {
  closable: true
}
