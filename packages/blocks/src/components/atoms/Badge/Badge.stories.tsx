import { CaretDownIcon, LockClosedIcon } from '@mergestat/icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Badge } from './Badge';

export default {
  title: 'Atoms/Badge',
  component: Badge,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'default',
      values: [
        { name: 'default', value: '#FFFFFF' },
        { name: 'dark', value: '#1F2937' },
      ],
    },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const BadgeDefault = Template.bind({});
BadgeDefault.args = {
  label: 'Badge',
  variant: 'default',
}

export const BadgeClosable = Template.bind({});
BadgeClosable.args = {
  label: 'Badge',
  variant: 'default',
  closable: true,
  action: true
}

export const BadgePrimary = Template.bind({});
BadgePrimary.args = {
  label: 'Badge',
  variant: 'primary',
}

export const BadgeSecondary = Template.bind({});
BadgeSecondary.args = {
  label: 'Badge',
  variant: 'default',
}

export const BadgeRounded = Template.bind({});
BadgeRounded.args = {
  label: 'Badge',
  variant: 'default',
  rounded: true
}

export const BadgeSuccess = Template.bind({});
BadgeSuccess.args = {
  label: 'Badge',
  variant: 'success',
}

export const BadgeWarning = Template.bind({});
BadgeWarning.args = {
  label: 'Badge',
  variant: 'warning',
}

export const BadgeDanger = Template.bind({});
BadgeDanger.args = {
  label: 'Badge',
  variant: 'danger',
}

export const BadgeDark = Template.bind({});
BadgeDark.args = {
  label: 'Badge',
  variant: 'dark',
}

BadgeDark.parameters = {
  backgrounds: { default: 'dark' },
};

export const BadgeCounter = Template.bind({});
BadgeCounter.args = {
  label: '99',
  variant: 'default',
}

export const BadgeIcons = () => {
  return (
    <div className="flex justify-start align-middle items-center space-x-6">
      {[
        {
          label: 'Label',
        },
        {
          iconOnly: true,
          startIcon: <LockClosedIcon className="t-icon" />,
        },
        {
          label: 'Label',
          startIcon: <LockClosedIcon className="t-icon" />,
        },
        {
          label: 'Label',
          endIcon: <CaretDownIcon className="t-icon" />,
        },
      ].map((item, index) => (
        <Badge key={index} {...item} />
      ))}
    </div>
  );
}
