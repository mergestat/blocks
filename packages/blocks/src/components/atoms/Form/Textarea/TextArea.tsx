import cx from 'classnames';
import React from 'react';

type BaseTextAreaTypes = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export const Textarea: React.FC<BaseTextAreaTypes> = ({
  className,
  children,
  ...props
}) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <textarea  {...props} className={cx('t-textarea', { ..._classname })}>
      {children}
    </textarea>
  );
}
