import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InlineBanner } from './InlineBanner';

export default {
  title: 'Atoms/InlineBanner',
  component: InlineBanner,
  argTypes: {},
} as ComponentMeta<typeof InlineBanner>;

const Template: ComponentStory<typeof InlineBanner> = (args) => <InlineBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      Want to automatically add repos from this organization?{' '}
      <a href='./'>Auto import</a>{' '}
      repos from organization instead
    </>
  )
}
