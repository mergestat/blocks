import { CogIcon, DatabaseIcon, DocumentTextIcon, TableIcon, TerminalIcon } from '@mergestat/icons';
import { ComponentMeta } from '@storybook/react';
import React from 'react';
import logo from '../../../../public/logo-inverse.svg';
import { Badge } from '../../atoms/Badge/Badge';
import { Sidebar } from './Sidebar';

export default {
  title: 'Organisms/Sidebar',
  component: Sidebar,
  argTypes: {},
} as ComponentMeta<typeof Sidebar>;

export const ExamplePanel: React.FC = () => {
  return (
    <Sidebar>
      <Sidebar.Main>
        <Sidebar.Item
          label="Queries"
          active
          icon={<TerminalIcon className="t-icon" />}
        />
        <Sidebar.Item label="Views" icon={<TableIcon className="t-icon" />} />
        <Sidebar.Item
          className="default"
          label="Reports"
          disabled
          icon={<DocumentTextIcon className="t-icon" />}
        />
        <Sidebar.Item
          label="Postgres"
          icon={<DatabaseIcon className="t-icon" />}
        />

        <Sidebar.Divider />
        <Sidebar.Item label="Settings" icon={<CogIcon className="t-icon" />} />
      </Sidebar.Main>
    </Sidebar>
  );
};

export const ExampleDarkSideBar: React.FC = () => {
  return (
    <Sidebar dark={true} compact={false}>
      <Sidebar.Header>
        <div className="t-sidebar-logo">
          <img src={logo} alt="MergeStat" />
        </div>
      </Sidebar.Header>
      <Sidebar.Main>
        <Sidebar.Item
          compact={false}
          label="Queries"
          active
          icon={<TerminalIcon className="t-icon" />}
        >
          <Sidebar.Item compact={false} label="Saved Queries" subLevel={true} />
          <Sidebar.Item compact={false} label="Example Queries" subLevel={true} />
          <Sidebar.Item compact={false} label="History" subLevel={true} />
        </Sidebar.Item>
        <Sidebar.Item
          compact={false}
          label="Views"
          icon={<TableIcon className="t-icon" />}
        />
        <Sidebar.Item
          compact={false}
          label="Postgres"
          icon={<DatabaseIcon className="t-icon" />}
        />
        <Sidebar.Divider />
        <Sidebar.Item
          compact={false}
          label="Settings"
          icon={<CogIcon className="t-icon" />}
        >
          <Sidebar.Item compact={false} label="User Management" subLevel={true} />
          <Sidebar.Item compact={false} label="User Settings" subLevel={true} />
        </Sidebar.Item>
      </Sidebar.Main>
      <Sidebar.Footer>
        <Badge label="v.1.1.0" variant="dark" rounded={true} />
      </Sidebar.Footer>
    </Sidebar>
  );
};
