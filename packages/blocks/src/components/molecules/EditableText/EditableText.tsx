import cx from 'classnames';
import React from 'react';
import { ColoredBox } from '../../atoms/ColoredBox';
import { Input } from '../../atoms/Form';

interface InputEditableText extends React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> {
  error?: boolean
}

export type EditableTextProps = {
  className?: string
  icon?: React.ReactElement
  title: InputEditableText
  desc: InputEditableText
}

export const EditableText: React.FC<EditableTextProps> = ({ className, icon, title, desc }) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <div className={cx('flex items-center', { ..._classname })}>
      {icon && <ColoredBox size='10'>
        {icon}
      </ColoredBox>}
      <div className='ml-2 flex-grow'>
        <Input variant={title.error ? 'ghost-error' : 'ghost'}
          className={cx(
            't-input-title leading-none', {
            't-input-readonly': title.readOnly,
            't-input-onclick': !!title.onClick
          })}
          {...title}
        />
        <Input variant={desc.error ? 'ghost-error' : 'ghost'}
          className={cx(
            't-input-desc leading-none', {
            't-input-readonly': desc.readOnly,
            't-input-onclick': !!desc.onClick
          })}
          {...desc}
        />
      </div>
    </div>
  )
}
