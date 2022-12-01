import { Button } from '@atoms/Button';
import { CaretDownIcon } from '@mergestat/icons';
import { Menu } from '@molecules/Menu/Menu';
import { ComponentMeta, ComponentStory } from '@storybook/react';
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
