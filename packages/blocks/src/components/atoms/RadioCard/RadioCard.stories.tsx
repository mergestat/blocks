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
  startIcon: <GithubIcon className="t-icon" />,
  label: "Option",
  isSelected: false
}

export const Selected = Template.bind({})
Selected.args = {
  startIcon: <GithubIcon className="t-icon" />,
  label: "Option",
  isSelected: true
}

export const Disabled = Template.bind({})
Disabled.args = {
  startIcon: <GithubIcon className="t-icon" />,
  label: "Option",
  disabled: true
}

export const Tooltip = Template.bind({})
Tooltip.args = {
  startIcon: <GithubIcon className="t-icon" />,
  label: "Option",
  disabled: true,
  tooltip: 'This field is disabled'
}
