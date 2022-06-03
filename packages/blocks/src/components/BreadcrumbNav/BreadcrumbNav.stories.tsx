import React from 'react';

import {
  CaretUpIcon,
  CircleErrorFilledIcon,
  ExternalLinkIcon
} from '@mergestat/icons';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BreadcrumbNav } from './BreadcrumbNav';
import { ColoredBox } from '../ColoredBox';

export default {
  title: 'Atoms/BreadcrumbNav',
  component: BreadcrumbNav,
  argTypes: {},
} as ComponentMeta<typeof BreadcrumbNav >;

const Template: ComponentStory<typeof BreadcrumbNav> = (args) => <BreadcrumbNav {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    { text: "Repos" },
    {
      startIcon: <ColoredBox
      size="10"
      className="mr-2 mix-blend-multiply relative"
      skin="default"
    >
        <img
          src={`https://github.com/vercel.png?size=40`}
          width={40}
          height={40}
          className="absolute top-0 right-0 left-0 bottom-0 w-full h-full rounded"
        />
    </ColoredBox>,
      text: "vercel/next.js",
      endIcon: <ExternalLinkIcon className="t-icon t-icon-small t-icon-muted" />

    },
    {
      startIcon: <CircleErrorFilledIcon className="t-icon t-icon-danger" />,
      text: "Pull requests",
      onClick: ()=>console.log("hi")
    }
  ]
}
