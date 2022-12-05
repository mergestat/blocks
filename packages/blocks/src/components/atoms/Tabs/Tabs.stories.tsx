import { ComponentMeta } from '@storybook/react';
import React from 'react';

import { Tabs } from './Tabs';

export default {
  title: 'Atoms/Tabs',
  component: Tabs,
  argTypes: {},
} as ComponentMeta<typeof Tabs>

export const ExampleTabs: React.FC = () => {
  return (
    <div className="p-2">
      <Tabs>
        <Tabs.List>
          <Tabs.Item>Tab 1</Tabs.Item>
          <Tabs.Item>Tab 2</Tabs.Item>
          <Tabs.Item disabled>Tab 3</Tabs.Item>
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel className="py-6">Content Tab 1</Tabs.Panel>
          <Tabs.Panel className="py-6">Content Tab 2</Tabs.Panel>
          <Tabs.Panel className="py-6">Content Tab 3</Tabs.Panel>
        </Tabs.Panels>
      </Tabs>
    </div>
  )
}
