import { ClipboardIcon, CogIcon, OfficeBuildingIcon, PlusIcon, UsersIcon } from '@mergestat/icons';
import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { Menu } from '../../molecules/Menu';
import { VerticalNav } from '../../molecules/VerticalNav/VerticalNav';
import { Button } from '../Button';
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

export const ExampleForNav: React.FC = () => {
  return (
    <div className="w-64">
      <VerticalNav>
        <HoverCard
          disableFit
          overlay={(close) => (
            <Menu className='mt-0'>
              <Menu.Item
                text="Saved Queries"
                withIcon
                icon={<ClipboardIcon className="t-icon" />}
              />
              <Menu.Item withIcon text="Examples" active />
              <Menu.Item
                withIcon
                text="Add query"
                color="text-blue-600"
                icon={<PlusIcon className="t-icon" />}
                onClick={close}
              />
            </Menu>
          )}
        >
          <VerticalNav.Item text="Queries" active />
        </HoverCard>
        <HoverCard
          disableFit
          overlay={(close) => (
            <Menu className='mt-0'>
              <Menu.Item
                text="User Management"
                withIcon
                icon={<UsersIcon className="t-icon" />}
              />
              <Menu.Item
                withIcon
                text="User Settings"
                icon={<CogIcon className="t-icon" />}
                onClick={close}
              />
            </Menu>
          )}
        >
          <VerticalNav.Item text="Settings" />
        </HoverCard>
        <VerticalNav.Item text="Views" />
      </VerticalNav>
    </div>
  )
}
