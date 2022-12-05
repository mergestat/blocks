/* eslint-disable @typescript-eslint/no-explicit-any */
import { DotsHorizontalIcon } from '@mergestat/icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Dropdown } from '../Dropdown';
import { Menu } from '../Menu';
import { Table } from './Table';

export default {
  title: 'Molecules/Table',
  component: Table,
  argTypes: {},
} as ComponentMeta<typeof Table>

const columns = [
  {
    title: 'Column',
    dataIndex: 'column',
    className: 'col',
    key: 'column',
    onSortChange: (e: 'asc' | 'desc' | undefined) => { console.log(e) }
  },
  {
    title: 'Type',
    dataIndex: 'type',
    className: 'col',
    key: 'type',
  },
  {
    className: 'px-6 w-4',
    key: 'option',
    render: () => (
      <Dropdown
        alignEnd
        trigger={<DotsHorizontalIcon className="t-icon cursor-pointer" />}
        overlay={() => (
          <Menu className="whitespace-nowrap">
            <Menu.Item text="Action" />
            <Menu.Item text="Action" />
          </Menu>
        )}
      />
    )
  }
]

const dataSource = [
  {
    column: 'message',
    type: 'Text',
    description: 'This is message expanded data',
    href: 'https://www.mergestat.com/'
  },
  {
    column: 'summary',
    type: 'Text',
    description: 'This is summary expanded data',
    href: 'https://www.mergestat.com/'
  },
  {
    column: 'author_name',
    type: 'Text',
    description: 'This is auth name expanded data',
    href: 'https://www.mergestat.com/'
  },
  {
    column: 'author_email',
    type: 'Text',
    description: 'This is auth email expanded data',
    href: 'https://www.mergestat.com/'
  },
  {
    column: 'author_when',
    type: 'DATETIME',
    description: 'This is auth date expanded data',
    href: 'https://www.mergestat.com/'
  },
  {
    column: 'committer_name',
    type: 'Text',
    description: 'This is committer name data',
    href: 'https://www.mergestat.com/'
  },
]

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />

export const Default = Template.bind({});
Default.args = {
  columns: columns,
  dataSource: dataSource,
  scrollY: 200
}

export const ChekableTable = Template.bind({});
ChekableTable.args = {
  columns: columns,
  dataSource: dataSource,
  scrollY: 200,
  checkable: true,
  onSelectedChange: (rows: unknown[]) => console.log(rows),
}

export const CollapsibleTable = Template.bind({});
CollapsibleTable.args = {
  columns: columns,
  dataSource: dataSource,
  scrollY: 400,
  collapsible: true,
  renderCollapse: (d: any) => d.description
}

export const CollapsibleCheckableTable = Template.bind({});
CollapsibleCheckableTable.args = {
  columns: columns,
  dataSource: dataSource,
  scrollY: 400,
  collapsible: true,
  checkable: true,
  hasSelectAll: false,
  renderCollapse: (d: any) => d.description
}


export const ClickableTable = Template.bind({});
ClickableTable.args = {
  columns: columns,
  dataSource: dataSource,
  collapsible: true,
  checkable: true,
  renderCollapse: (d: any) => d.description,
  clickable: true
}

export const BorderedTable = Template.bind({});
BorderedTable.args = {
  columns: columns,
  dataSource: dataSource,
  bordered: true,
}

export const DenseTable = Template.bind({});
DenseTable.args = {
  columns: columns,
  dataSource: dataSource,
  dense: true,
}
