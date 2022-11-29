import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Skeleton } from './Skeleton';

export default {
  title: 'Atoms/Loader/Skeleton',
  component: Skeleton,
  argTypes: {},
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = () => (
  <Skeleton />
);

export const LoaderSkeleton = Template.bind({});
