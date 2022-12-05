import cx from 'classnames';
import React from 'react';

type RadioProps = {
  label?: string;
}

const RadioButton: React.FC<
  RadioProps &
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = ({ label, children, className, ...props }) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <label className={cx('t-radio', { ..._classname })}>
      <input type="radio" {...props} />
      {label
        ? <span>{label}</span>
        : children && <span>{children}</span>
      }
    </label>
  );
}

const RadioGroup: React.FC<
  { className?: string; inline?: boolean } & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
> = ({ children, inline = false, className }) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <div
      className={cx(`t-radio-group${inline ? '-inline' : ''}`, { ..._classname })}
    >
      {children}
    </div>
  );
}

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    RadioProps &
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    > &
    React.RefAttributes<HTMLElement>
  > {
  Button: typeof RadioButton;
  Group: typeof RadioGroup;
}

export const Radio = RadioButton as CompoundedComponent;
Radio.Group = RadioGroup;
