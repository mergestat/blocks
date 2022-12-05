import { PlusIcon, RepositoryIcon } from '@mergestat/icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../Button';
import { EmptyState } from './EmptyState';

export default {
  title: 'Atoms/EmptyState',
  component: EmptyState,
  argTypes: {},
} as ComponentMeta<typeof EmptyState>;

const Template: ComponentStory<typeof EmptyState> = (args) => <EmptyState {...args} />;

export const Default = Template.bind({});

Default.args = {
  action: (
    <Button
      skin="secondary"
      startIcon={<PlusIcon className="t-icon" />}
    >
      Add Repository
    </Button>
  ),
  text: "No repositories added yet",
  topIcon: (
    <div className="t-circle-icon">
      <RepositoryIcon className="t-icon" />
    </div>
  )
}
