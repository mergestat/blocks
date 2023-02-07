import React from 'react';
import { ColoredBox } from '../../atoms/ColoredBox';
import { Input } from '../../atoms/Form';

export type EditableTextProps = {
  icon?: React.ReactElement
  title: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
  desc: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
}

export const EditableText: React.FC<EditableTextProps> = ({ icon, title, desc }) => {
  return (
    <div className='flex items-center'>
      {icon && <ColoredBox size='10'>
        {icon}
      </ColoredBox>}
      <div className='ml-2 flex-grow'>
        <Input variant="ghost" className='t-input-title leading-none' {...title} />
        <Input variant="ghost" className='t-input-desc leading-none' {...desc} />
      </div>
    </div>
  )
}
