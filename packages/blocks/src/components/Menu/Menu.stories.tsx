import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { CaretDownIcon, OfficeBuildingIcon, CogIcon, PlusIcon } from '@mergestat/icons';
import { Button } from '../Button';
import { Dropdown } from '../Dropdown';
import { Menu } from './Menu';

export default {
  title: 'Molecules/Menu',
  component: Menu,
  argTypes: {},
} as ComponentMeta<typeof Menu>;

export const ExampleMenu = () => {
  return (
    <Dropdown
      trigger={
        <Button skin="secondary" endIcon={<CaretDownIcon className="t-icon" />}>
          Show Menu
        </Button>
      }
      overlay={() => (
        <Menu>
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
            icon={<PlusIcon />}
          />

          <Menu.Divider />
          <Menu.Item
            withIcon
            text="Another organization"
            icon={<OfficeBuildingIcon className="t-icon" />}
          />
          <Menu.Item text="Workspace A" withIcon />
          <Menu.Item text="Workspace B" withIcon />
          <Menu.Item
            withIcon
            color="text-blue-600"
            disabled
            text="Create workspace"
            icon={<PlusIcon />}
          />

          <Menu.Divider />
          <Menu.Item
            text="My organizations"
            withIcon
            icon={<CogIcon className="t-icon" />}
          />

          <Menu.Divider />
          <Menu.Item
            withIcon
            color="text-blue-600"
            text="Create organization"
            icon={<PlusIcon className="t-icon" />}
          />
        </Menu>
      )}
    />
  );
}
