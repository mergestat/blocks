import { SchemaIcon, TableIcon } from '@mergestat/icons';
import { ComponentMeta } from '@storybook/react';
import { Tree } from './Tree';

export default {
  title: 'Molecules/Tree',
  component: Tree,
  argTypes: {},
} as ComponentMeta<typeof Tree>;

export const Default = () => {
  return (
    <Tree>
      <Tree.Item name='mergestat' icon={<SchemaIcon className="t-icon t-icon-muted" />} >
        <Tree.Item name='git_blame' icon={<TableIcon className="t-icon t-icon-muted" />} >
          <Tree.SubItem name='column_name' desc='Column name description' />
          <Tree.SubItem name='column_name' />
          <Tree.SubItem name='column_name' desc='Column name description' />
        </Tree.Item>
        <Tree.Item name='git_commits' icon={<TableIcon className="t-icon t-icon-muted" />} >
          <Tree.SubItem name='column_name' desc='Column name description' />
          <Tree.SubItem name='column_name' />
        </Tree.Item>
      </Tree.Item>
      <Tree.Item name='git_files' icon={<TableIcon className="t-icon t-icon-muted" />} >
        <Tree.SubItem name='column_name' desc='Column name description' />
        <Tree.SubItem name='column_name' />
        <Tree.SubItem name='column_name' desc='Column name description' />
      </Tree.Item>
      <Tree.Item name='git_pr_commits' icon={<TableIcon className="t-icon t-icon-muted" />} >
        <Tree.SubItem name='column_name' />
        <Tree.SubItem name='column_name' desc='Column name description' />
      </Tree.Item>
    </Tree>
  )
}
