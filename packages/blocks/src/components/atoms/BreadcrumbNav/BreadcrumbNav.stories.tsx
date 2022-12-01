import { CircleErrorFilledIcon, ExternalLinkIcon, RepositoryIcon } from '@mergestat/icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ColoredBox } from '../ColoredBox';
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
      text: "vercel/next.js",
      endIcon: <ExternalLinkIcon className="t-icon t-icon-small t-icon-muted" />
    },
    {
      startIcon: <CircleErrorFilledIcon className="t-icon t-icon-danger" />,
      text: "Pull requests",
      onClick: () => console.log("hi")
    }
  ]
}
