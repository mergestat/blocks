import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { Button } from '../../atoms/Button';
import { Toolbar } from '../Toolbar/Toolbar';
import { Panel } from './Panel';

export default {
  title: 'Molecules/Panel',
  component: Panel,
  argTypes: {},
} as ComponentMeta<typeof Panel>;

export const ExamplePanel: React.FC = () => {
  return (
    <div>
      <Panel>
        <Panel.Header>
          <h3 className="t-panel-title">Text</h3>
        </Panel.Header>
        <Panel.Body>
          <div className="p-6">Test modal body</div>
        </Panel.Body>
        <Panel.Footer>
          <Toolbar className="h-16 px-6">
            <Toolbar.Right>
              <Toolbar.Item>
                <Button
                  skin="secondary"
                  onClick={() => console.log('Save button clicked')}
                >
                  Save
                </Button>
                <Button className="ml-2" skin="primary">
                  Cancel
                </Button>
              </Toolbar.Item>
            </Toolbar.Right>
          </Toolbar>
        </Panel.Footer>
      </Panel>
    </div>
  );
}
