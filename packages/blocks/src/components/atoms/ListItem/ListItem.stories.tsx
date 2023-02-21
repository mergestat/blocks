import { ChevronRightIcon, RepositoryIcon } from '@mergestat/icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListItem } from './ListItem';

export default {
  title: 'Atoms/ListItem',
  component: ListItem,
  argTypes: {},
} as ComponentMeta<typeof ListItem>

const Template: ComponentStory<typeof ListItem> = (args) => <ListItem {...args} />

export const TrashAction = Template.bind({});
TrashAction.args = {
  title: "Repository Name",
  subline: "Subline",
  startIcon: <RepositoryIcon className="t-icon" />,
  className: "px-3 py-4 border-b",
  onClick: () => console.log("click"),
  onTrashClick: () => console.log("click on trash")
}

export const CustomAction = Template.bind({});
CustomAction.args = {
  title: "Repository Name",
  subline: "Subline",
  startIcon: <RepositoryIcon className="t-icon" />,
  className: "px-3 py-4 border-b",
  onClick: () => console.log("click"),
  action: <div className='t-list-item-go-to'>
    <span className='px-2'>Go to</span>
    <ChevronRightIcon className="t-icon" />
  </div>
}
