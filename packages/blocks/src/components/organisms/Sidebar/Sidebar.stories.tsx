import { CogIcon, DatabaseIcon, DocumentTextIcon, TableIcon, TerminalIcon } from '@mergestat/icons';
import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { Sidebar } from './Sidebar';

export default {
  title: 'Organisms/Sidebar',
  component: Sidebar,
  argTypes: {},
} as ComponentMeta<typeof Sidebar>

export const ExampleSideBar: React.FC = () => {
  return (
    <Sidebar>
      <Sidebar.Main>
        <Sidebar.Item
          label='Queries'
          active
          icon={<TerminalIcon className='t-icon' />}
        />
        <Sidebar.Item label='Views' icon={<TableIcon className='t-icon' />} />
        <Sidebar.Item
          className='default'
          label='Reports'
          disabled
          icon={<DocumentTextIcon className='t-icon' />}
        />
        <Sidebar.Item
          label='Connect'
          icon={<DatabaseIcon className='t-icon' />}
        />
        <Sidebar.Divider />
        <Sidebar.Item label='Settings' icon={<CogIcon className='t-icon' />} />
      </Sidebar.Main>
    </Sidebar>
  )
}

export const ExampleDarkSideBar: React.FC = () => {
  return (
    <Sidebar dark={true} compact={false} collapsible={true}>
      <Sidebar.Header />
      <Sidebar.Main>
        <Sidebar.Item
          compact={false}
          label='Queries'
          icon={<TerminalIcon className='t-icon' />}
          onClick={() => console.log('Queries')}
          subNav={
            <>
              <Sidebar.Item compact={false} label='Saved Queries' level='sub' active onClick={() => console.log('Saved Queries')} />
              <Sidebar.Item compact={false} label='Example Queries' level='sub' onClick={() => console.log('Example Queries')} />
              <Sidebar.Item compact={false} label='History' level='sub' onClick={() => console.log('History')} />
            </>
          }
        />
        <Sidebar.Item
          compact={false}
          label='Views'
          onClick={() => console.log('Views')}
          icon={<TableIcon className='t-icon' />}
        />
        <Sidebar.Item
          compact={false}
          label='Postgres'
          icon={<DatabaseIcon className='t-icon' />}
        />
        <Sidebar.Divider />
        <Sidebar.Item
          compact={false}
          label='Settings'
          open
          icon={<CogIcon className='t-icon' />}
          subNav={
            <>
              <Sidebar.Item compact={false} label='User Management' level='sub' />
              <Sidebar.Item compact={false} label='User Settings' level='sub' />
            </>
          }
        />
      </Sidebar.Main>
      <Sidebar.Footer>
        <Sidebar.Version label='v.1.1.0' />
      </Sidebar.Footer>
    </Sidebar>
  )
}
