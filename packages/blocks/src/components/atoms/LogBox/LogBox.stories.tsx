import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LogBox } from './LogBox';

export default {
  title: 'Atoms/LogBox',
  component: LogBox,
  argTypes: {},
} as ComponentMeta<typeof LogBox>

const Template: ComponentStory<typeof LogBox> = (args) => <LogBox {...args} />

export const Default = Template.bind({})
Default.args = {
  logs: [
    "This is a log line ...",
    "This is a log line ..."
  ]
}

export const WithNodes = Template.bind({})
WithNodes.args = {
  logs: [
    "2021/06/09 02:21 This is a log line ...",
    <div className="flex gap-8"><p>2021/06/09 02:21</p> <p>This is a log line ... </p></div>
  ],
  onCopy: () => console.log("copy button clicked")
}
