import { AutoImportIcon, CogIcon } from '@mergestat/icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SplitButton } from './SplitButton';

export default {
  title: 'Atoms/SplitButton',
  component: SplitButton,
  argTypes: {},
} as ComponentMeta<typeof SplitButton>

const Template: ComponentStory<typeof SplitButton> = (args) => <SplitButton {...args} />

export const Default = Template.bind({})
Default.args = {
  text: "Split button",
  menuContainerClassName: 'z-20',
  startIcon: <AutoImportIcon className="t-icon" />,
  items: [
    {
      text: "Manage settings",
      icon: <CogIcon className="t-icon" />
    }
  ],
  onButtonClick: () => console.log("button click"),
  onItemClick: (index: number) => console.log("item click: " + index)
}

export const DisabledSplitButton = Template.bind({})
DisabledSplitButton.args = {
  text: "Split button",
  disabled: true,
  menuContainerClassName: 'z-20',
  startIcon: <AutoImportIcon className="t-icon" />,
  items: [
    {
      text: "Manage settings",
      icon: <CogIcon className="t-icon" />
    }
  ],
  onButtonClick: () => console.log("button click"),
  onItemClick: (index: number) => console.log("item click: " + index)
}
