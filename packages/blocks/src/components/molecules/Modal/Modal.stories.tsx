import { CaretDownIcon, XIcon } from '@mergestat/icons';
import { ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';
import { Button } from '../../atoms/Button';
import { Dropdown } from '../Dropdown';
import { Menu } from '../Menu/Menu';
import { Toolbar } from '../Toolbar/Toolbar';
import { Modal } from './Modal';

export default {
  title: 'Molecules/Modal',
  component: Modal,
  argTypes: {},
} as ComponentMeta<typeof Modal>

export const ExampleModal: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <div className="flex">
        <Dropdown
          overlay={() => (
            <Menu>
              <Menu.Item text="Open Modal" onClick={() => setOpen(true)} />
              <Menu.Item text="Action B" />
              <Menu.Divider />
              <Menu.Item color="text-blue-600" text="Profile" />
            </Menu>
          )}
          disabled={false}
          trigger={
            <Button
              skin="secondary"
              endIcon={<CaretDownIcon className="t-icon" />}
              className="mr-5"
            >
              Show Menu
            </Button>
          }
        />
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} size="sm" modalWrapperClassName='z-20'>
        <Modal.Header>
          <Toolbar className="h-16 px-6">
            <Toolbar.Left>
              <Toolbar.Item>
                <Modal.Title>Test Title</Modal.Title>
              </Toolbar.Item>
            </Toolbar.Left>
            <Toolbar.Right>
              <Toolbar.Item>
                <Button
                  skin="borderless-muted"
                  onClick={() => setOpen(false)}
                  startIcon={<XIcon className="t-icon" />}
                />
              </Toolbar.Item>
            </Toolbar.Right>
          </Toolbar>
        </Modal.Header>
        <Modal.Body>
          <div className="p-6">Test modal body</div>
        </Modal.Body>
        <Modal.Footer>
          <Toolbar className="h-16 px-6">
            <Toolbar.Right>
              <Toolbar.Item>
                <Button
                  skin="secondary"
                  onClick={() => console.log('Save button clicked')}
                >
                  Save
                </Button>
                <Button
                  className="ml-2"
                  skin="primary"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
              </Toolbar.Item>
            </Toolbar.Right>
          </Toolbar>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
