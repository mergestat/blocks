import { TerminalIcon } from '@mergestat/icons';
import { ComponentMeta } from '@storybook/react';
import { ChangeEvent, useState } from 'react';
import { EditableText } from './EditableText';

export default {
  title: 'Molecules/EditableText',
  component: EditableText,
  argTypes: {},
} as ComponentMeta<typeof EditableText>;

export const Default = () => {
  const [title, setTitle] = useState<string>('')
  const [desc, setDesc] = useState<string>('')

  return (
    <div>
      <EditableText
        icon={<TerminalIcon className="t-icon" />}
        title={{
          placeholder: 'Untitled',
          value: title,
          onChange: (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)
        }}
        desc={{
          placeholder: 'This is a short description',
          value: desc,
          onChange: (e: ChangeEvent<HTMLInputElement>) => setDesc(e.target.value)
        }}
      />
    </div>
  )
}
