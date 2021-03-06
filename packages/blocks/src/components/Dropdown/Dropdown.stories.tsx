import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CaretDownIcon } from '@mergestat/icons';
import { Button } from '../Button';
import { Menu } from '../Menu';
import { Dropdown } from './Dropdown';

export default {
  title: 'Molecules/Dropdown',
  component: Dropdown,
  argTypes: {},
} as ComponentMeta<typeof Dropdown>;

const DropdownTemplate: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const DropdownSuccess = DropdownTemplate.bind({});
DropdownSuccess.args = {
  overlay: (close) => (
    <Menu>
      <Menu.Item text="Item A" />
      <Menu.Item text="Item B" onClick={close} />
      <Menu.Item text="Item C" onClick={close} />

      <Menu.Divider />
      <Menu.Item text="Action A" />
      <Menu.Item text="Action B" />

      <Menu.Divider />
      <Menu.Item color="text-blue-600" text="Profile" onClick={close} />
    </Menu>
  ),
  disabled: false,
  trigger: (
    <Button skin="secondary" endIcon={<CaretDownIcon className="t-icon" />}>
      Show Menu
    </Button>
  ),
}
