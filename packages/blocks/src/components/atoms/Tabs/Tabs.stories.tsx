import { CaretDownIcon, ChartBarIcon, DocumentTextIcon, PlusIcon, TableIcon, TrendUpIcon } from '@mergestat/icons';
import { ComponentMeta } from '@storybook/react';
import React, { ReactElement, useState } from 'react';
import { Menu } from '../../molecules/Menu';
import { HoverCard } from '../HoverCard';

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

interface TabData {
  title: ReactElement | string
  content: ReactElement | string
  disabled?: boolean
  closable?: boolean
}

export const ExampleTabsSecondary: React.FC = () => {
  const [tabs, setTabs] = useState<TabData[]>([
    {
      title: <><TableIcon className='t-icon' /><span className='whitespace-nowrap'>Table</span></>,
      content: <div>Content Table</div>
    },
    {
      title: <><ChartBarIcon className='t-icon' /><span className='whitespace-nowrap'>Bar chart</span></>,
      content: 'Content Bar chart',
      disabled: true,
      closable: true
    },
    {
      title: <><TrendUpIcon className='t-icon' /><span className='whitespace-nowrap'>Line chart</span></>,
      content: 'Content Line chart',
      closable: true
    }
  ])

  const getTabData = (tab: string) => {
    switch (tab) {
      case 'line':
        return {
          title: <><TrendUpIcon className='t-icon' /><span className='whitespace-nowrap'>Line Chart</span></>,
          content: 'Content Line chart',
          closable: true
        }
      default:
        return {
          title: <><DocumentTextIcon className='t-icon' /><span className='whitespace-nowrap'>Single Metric</span></>,
          content: 'Content Single metric',
          closable: true
        }
    }
  }

  const addTab = (tab: string) => {
    setTabs([...tabs, getTabData(tab)])
  }

  const removeTab = (tabIndex: number) => {
    const newTabs = tabs.filter((tab, index) => index !== tabIndex)
    setTabs(newTabs)
  }

  return (
    <div className="p-2">
      <Tabs variant='secondary'>
        <Tabs.List>
          {tabs.map((tab, index) => (
            <Tabs.Item key={`tab-item-${index}`}
              disabled={tab.disabled}
              closable={tab.closable}
              onClose={() => removeTab(index)}
            >
              {tab.title}
            </Tabs.Item>
          ))}

          <HoverCard
            interaction='click'
            placement='bottom-start'
            overlay={(close) => (
              <Menu className='mt-0'>
                <Menu.Item text="Line chart" withIcon
                  icon={<TrendUpIcon className="t-icon" />}
                  onClick={() => {
                    addTab('line')
                    close()
                  }}
                />
                <Menu.Item text="Single metric" withIcon
                  icon={<DocumentTextIcon className="t-icon" />}
                  onClick={() => {
                    addTab('single')
                    close()
                  }}
                />
              </Menu>
            )}
          >
            <div className='t-tab-btn'>
              <PlusIcon className="t-icon" />
              <span className='whitespace-nowrap'>Add view</span>
              <CaretDownIcon className="t-icon" />
            </div>
          </HoverCard>
          <div className='flex-1 border-b border-gray-200'></div>
        </Tabs.List>
        <Tabs.Panels>
          {tabs.map((tab, index) => (
            <Tabs.Panel key={`tab-panel-${index}`} className="py-6">{tab.content}</Tabs.Panel>
          ))}
        </Tabs.Panels>
      </Tabs>
    </div>
  )
}
