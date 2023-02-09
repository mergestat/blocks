import cx from 'classnames';
import React from 'react';

type BaseInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

type InputVarian = 'error' | 'ghost' | 'ghost-error' | 'default'

export type InputProps = {
  variant?: InputVarian;
  startIcon?: React.ReactNode;
}

export const Input: React.FC<InputProps & BaseInputProps> = ({
  className,
  startIcon,
  variant = 'default',
  ...props
}) => {
  const _classname = className ? { [className]: !!className } : {}

  if (startIcon) {
    return (
      <div className={cx('t-input-with-icon', { ..._classname })} >
        {startIcon && startIcon}
        <input
          className={cx('t-input', {
            [`t-input-${variant}`]: !!variant,
          })}
          {...props}
        />
      </div>
    );
  } else {
    return (
      <input
        className={cx('t-input', {
          ..._classname,
          [`t-input-${variant}`]: !!variant,
        })}
        {...props}
      />
    );
  }
}
