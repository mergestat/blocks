import { OfficeBuildingIcon, PlusIcon, RepositoryIcon } from '@mergestat/icons';
import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { Menu } from '../../molecules/Menu';
import { Button } from '../Button';
import { ColoredBox } from '../ColoredBox';
import { HoverCard } from './HoverCard';

export default {
  title: 'Atoms/HoverCard',
  component: HoverCard,
  argTypes: {},
} as ComponentMeta<typeof HoverCard>;

export const ExampleForButton: React.FC = () => {
  return (
    <HoverCard
      overlay={(close) => (
        <Menu className='mt-0'>
          <Menu.Item
            text="Mono"
            withIcon
            icon={<OfficeBuildingIcon className="t-icon" />}
          />
          <Menu.Item withIcon text="Default" active />
          <Menu.Item
            withIcon
            text="Create workspace"
            color="text-blue-600"
            icon={<PlusIcon className="t-icon" />}
            onClick={close}
          />
        </Menu>
      )}
    >
      <Button>Hover me</Button>
    </HoverCard>
  )
}

export const ExampleForColoredBox: React.FC = () => {
  return (
    <HoverCard
      overlay={(close) => (
        <Menu className='mt-0'>
          <Menu.Item
            text="Mono"
            withIcon
            icon={<OfficeBuildingIcon className="t-icon" />}
          />
          <Menu.Item withIcon text="Default" active />
          <Menu.Item
            withIcon
            text="Create workspace"
            color="text-blue-600"
            icon={<PlusIcon className="t-icon" />}
            onClick={close}
          />
        </Menu>
      )}
    >
      <ColoredBox size='12'>
        <RepositoryIcon className='t-icon t-icon-default' />
      </ColoredBox>
    </HoverCard>
  )
}
