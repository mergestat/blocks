import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MultiSelect } from './MultiSelect';

export default {
  title: 'Organisms/MultiSelect',
  component: MultiSelect,
  argTypes: {},
} as ComponentMeta<typeof MultiSelect>

const Template: ComponentStory<typeof MultiSelect> = (args) => <MultiSelect {...args} />

export const ExampleMultiSelect = Template.bind({})
ExampleMultiSelect.args = {
  setStateToProps: [
    { title: "next-js", checked: true },
    { title: "cli", checked: true },
    { title: "open-source", checked: true },
    { title: "custom", checked: false },
    { title: "organization-b", checked: true },
    { title: "components", checked: false },
  ],
  getState(state) {
    console.log(state);
  }
}
