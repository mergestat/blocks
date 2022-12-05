import { BookIcon, CaretDownIcon, CogIcon, LogoutIcon, OfficeBuildingIcon, PlusIcon } from '@mergestat/icons';
import { ComponentMeta } from '@storybook/react';
import avatar from '../../../../public/avatar.jpeg';
import logo from '../../../../public/logo-inverse.svg';
import { Dropdown } from '../../molecules/Dropdown';
import { Menu } from '../../molecules/Menu';
import { Toolbar } from '../../molecules/Toolbar/Toolbar';
import { Navbar } from './Navbar';

export default {
  title: 'Organisms/Navbar',
  component: Navbar.Items,
  argTypes: {},
} as ComponentMeta<typeof Navbar.Items>;

export const ExampleNavbar = () => {
  const user = { name: 'John Cooper', company: 'jc@mono.company' }

  return (
    <nav className="bg-gray-700 px-6 w-full">
      <Toolbar className="h-14">
        <Toolbar.Left>
          <Toolbar.Item className="w-28 mr-3">
            <img src={logo} alt='' />
          </Toolbar.Item>
          <Toolbar.Item>
            <Navbar.Items>
              <Navbar.Divider />
              <Dropdown
                overlay={() => (
                  <Menu>
                    <Menu.Item
                      text="Mono"
                      withIcon
                      icon={<OfficeBuildingIcon className="t-icon" />}
                    />
                    <Menu.Item withIcon text="Default" />
                    <Menu.Item
                      withIcon
                      text="Create workspace"
                      color="text-blue-600"
                      icon={<PlusIcon className="t-icon" />}
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
                      text="Create workspace"
                      icon={<PlusIcon className="t-icon" />}
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
                trigger={
                  <Navbar.Item
                    label="Workspace"
                    text="Default"
                    icon={<CaretDownIcon className="t-icon" />}
                  />
                }
              />
            </Navbar.Items>
          </Toolbar.Item>
        </Toolbar.Left>
        <Toolbar.Right className="space-x-6">
          <Toolbar.Item>
            <Navbar.Items>
              <Navbar.Item icon={<BookIcon className="t-icon" />} />

              <Navbar.Divider />
              <Dropdown
                alignEnd={false}
                overlay={() => (
                  <Menu data-popper-placement="bottom-end">
                    <li className="t-menu-item">
                      <div className="flex items-center px-4 py-2">
                        <img
                          className="inline-block h-8 mr-2 w-8 rounded-full"
                          src={avatar}
                          width={30}
                          height={30}
                          alt="User Avatar"
                        />
                        <div className="flex flex-col items-start ml-2">
                          <span className="text-gray-700">{user?.name}</span>
                          <span className="text-gray-500 text-sm">
                            {user?.company}
                          </span>
                        </div>
                      </div>
                    </li>
                    <Menu.Divider />
                    <Menu.Item text="My account" icon={<CogIcon className="t-icon" />} />

                    <Menu.Divider />
                    <Menu.Item text="Log out" icon={<LogoutIcon className="t-icon" />} />
                  </Menu>
                )}
                trigger={
                  <Navbar.Item
                    image={
                      <img
                        className="inline-block rounded-full mr-2 w-8 h-8"
                        width={30}
                        height={30}
                        src={avatar}
                        alt="User Avatar"
                      />
                    }
                    icon={<CaretDownIcon className="t-icon" />}
                  />
                }
              />
            </Navbar.Items>
          </Toolbar.Item>
        </Toolbar.Right>
      </Toolbar>
    </nav>
  )
}
