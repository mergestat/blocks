import { CheckIcon, CircleWarningIcon, UserIcon, WarningIcon } from '@mergestat/icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import type { SizeT, VariantT } from './Avatar';
import { Avatar } from './Avatar';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  argTypes: {},
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'JC',
}

export const AvatarIcons = Template.bind({});
AvatarIcons.args = {
  icon: <UserIcon className="t-icon" />,
}

export const AvatarImage = Template.bind({});
AvatarImage.args = {
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

export const AvatarSizes = () => {
  return (
    <div className="space-x-6">
      {['sm', 'md', 'lg', 'xl', '2xl'].map((s: string, index: number) => (
        <Avatar key={index} icon={<UserIcon className="t-icon" />} size={s as SizeT} />
      ))}
    </div>
  );
}

export const AvatarSkins = () => {
  return (
    <div className="space-x-6">
      {[
        {
          icon: <UserIcon className="t-icon" />,
        },
        {
          variant: 'primary',
          icon: <UserIcon className="t-icon" />,
        },
        {
          variant: 'success',
          icon: <CheckIcon className="t-icon" />,
        },
        {
          variant: 'warning',
          icon: <WarningIcon className="t-icon" />,
        },
        {
          variant: 'danger',
          icon: <CircleWarningIcon className="t-icon" />,
        },
      ].map((item, index) => (
        <Avatar key={index} icon={item.icon} variant={item.variant as VariantT} />
      ))}
    </div>
  );
}
