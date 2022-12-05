import { GithubIcon } from '@mergestat/icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RadioCard } from './RadioCard';

export default {
  title: 'Atoms/RadioCard',
  component: RadioCard,
  argTypes: {},
} as ComponentMeta<typeof RadioCard>

const Template: ComponentStory<typeof RadioCard> = (args) => <RadioCard {...args} />

export const Default = Template.bind({})
Default.args = {
  startIcon: <GithubIcon className="t-icon t-icon-default" />,
  label: "Option",
  isSelected: false
}

export const Selected = Template.bind({})
Selected.args = {
  startIcon: <GithubIcon className="t-icon t-icon-primary" />,
  label: "Option",
  isSelected: true
}
