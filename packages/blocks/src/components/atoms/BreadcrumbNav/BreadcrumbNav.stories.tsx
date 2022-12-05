import { CircleCheckFilledIcon, ExternalLinkIcon, RepositoryIcon } from '@mergestat/icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ColoredBox } from '../ColoredBox/ColoredBox';
import { BreadcrumbNav } from './BreadcrumbNav';

export default {
  title: 'Atoms/BreadcrumbNav',
  component: BreadcrumbNav,
  argTypes: {},
} as ComponentMeta<typeof BreadcrumbNav>;

const Template: ComponentStory<typeof BreadcrumbNav> = (args) => <BreadcrumbNav {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    { text: "Repos" },
    {
      startIcon: <ColoredBox onClick={() => null} size="8" skin="default"><RepositoryIcon className="t-icon t-icon-small" /></ColoredBox>,
      text: "mergestat/mergestat",
      endIcon: <ExternalLinkIcon className="t-icon t-icon-small t-icon-muted" />
    },
    {
      startIcon: <CircleCheckFilledIcon className="t-icon t-icon-success" />,
      text: "Pull Requests",
      onClick: () => console.log("hi")
    }
  ]
}

export const SmallBreadcrumbs = Template.bind({});
SmallBreadcrumbs.args = {
  size: "sm",
  data: [
    { text: "Repos" },
    {
      startIcon: <ColoredBox onClick={() => null} size="6" skin="default"><RepositoryIcon className="t-icon t-icon-small" /></ColoredBox>,
      text: "mergestat/mergestat",
      endIcon: <ExternalLinkIcon className="t-icon t-icon-small t-icon-muted" />
    },
    {
      startIcon: <CircleCheckFilledIcon className="t-icon t-icon-success" />,
      text: "Pull Requests",
      onClick: () => console.log("hi")
    }
  ]
}
