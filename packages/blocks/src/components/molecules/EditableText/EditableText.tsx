import cx from 'classnames';
import React from 'react';
import { ColoredBox } from '../../atoms/ColoredBox';
import { Input } from '../../atoms/Form';

export type EditableTextProps = {
  className?: string
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

export const EditableText: React.FC<EditableTextProps> = ({ className, icon, title, desc }) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <div className={cx('flex items-center', { ..._classname })}>
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
