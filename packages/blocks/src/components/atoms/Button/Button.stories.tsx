import { CaretDownIcon, ClipboardIcon } from '@mergestat/icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Spinner } from '../Loader/Spinner/Spinner';
import { Button, ButtonGroup } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  skin: 'primary',
}

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  skin: 'secondary',
}

export const SecondaryLoader = Template.bind({});
SecondaryLoader.args = {
  label: 'Processing...',
  skin: 'secondary',
  startIcon: <Spinner size="sm" className="mr-2" />,
  disabled: true,
}

export const Danger = Template.bind({});
Danger.args = {
  label: 'Button',
  skin: 'danger',
}

export const DangerPrimary = Template.bind({});
DangerPrimary.args = {
  label: 'Button',
  skin: 'danger-primary',
}

export const Borderless = Template.bind({});
Borderless.args = {
  label: 'Button',
  skin: 'borderless',
}

export const BorderlessMuted = Template.bind({});
BorderlessMuted.args = {
  label: 'Button',
  skin: 'borderless-muted',
}

export const BorderlessI = Template.bind({});
BorderlessI.args = {
  label: 'Button',
  skin: 'borderless-i',
}

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Button',
  disabled: true,
}

export const BlockCenter = Template.bind({});
BlockCenter.args = {
  label: 'Button',
  skin: 'primary',
  startIcon: <ClipboardIcon className="t-icon" />,
  isBlock: true,
}

export const BlockBetween = Template.bind({});
BlockBetween.args = {
  label: 'Button',
  skin: 'ghost',
  endIcon: <CaretDownIcon className="t-icon" />,
  isBlockBetween: true,
}

export const ButtonIcon = Template.bind({});
ButtonIcon.args = {
  skin: 'secondary',
  isIconOnly: true,
  startIcon: <ClipboardIcon className="t-icon" />,
  size: 'small',
}

export const Small = Template.bind({});
Small.args = {
  label: 'Button',
  skin: 'primary',
  size: 'small',
}

export const Tooltip = () => {
  return (
    <>
      <Button tooltip='Button example with Tooltip' className='mr-2'>Button</Button>
      <Button tooltip='Button example with Tooltip' className='mr-2' tooltipPlacement='right'>Button</Button>
      <Button disabled tooltip='Button example with Tooltip'>Button</Button>
    </>
  );
};

export const ButtonGroupExample = () => {
  return (
    <ButtonGroup>
      <Button skin="secondary" isActive>7 days</Button>
      <Button skin="secondary">30 days</Button>
      <Button skin="secondary">90 days</Button>
      <Button skin="secondary">1 year</Button>
    </ButtonGroup>
  );
};
