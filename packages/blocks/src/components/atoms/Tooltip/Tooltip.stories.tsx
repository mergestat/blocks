import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { Button } from '../Button';
import { Tooltip } from './Tooltip';

export default {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  argTypes: {},
} as ComponentMeta<typeof Tooltip>;

export const ExamplePanel: React.FC = () => {
  return (
    <Tooltip content={'Tooltip'}>
      <Button>Hover me</Button>{' '}
    </Tooltip>
  )
}
