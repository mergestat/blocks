import cx from 'classnames';
import React, { RefAttributes } from 'react';

const SelectInput: React.FC<
  Record<string, unknown> &
  RefAttributes<HTMLSelectElement> &
  React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >
> = React.forwardRef(({ className, children, ...props }, ref) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <select className={cx('t-select', { ..._classname })} {...props} ref={ref}>
      {children}
    </select>
  );
});

const SelectOption: React.FC<
  Record<string, unknown> &
  RefAttributes<HTMLOptionElement> &
  React.DetailedHTMLProps<
    React.OptionHTMLAttributes<HTMLOptionElement>,
    HTMLOptionElement
  >
> = React.forwardRef(({ children, ...props }, ref) => {
  return <option {...props} ref={ref}>{children}</option>;
});

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    React.DetailedHTMLProps<
      React.SelectHTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
    > &
    React.RefAttributes<HTMLElement>
  > {
  Input: typeof SelectInput;
  Option: typeof SelectOption;
}

export const Select = SelectInput as CompoundedComponent;
Select.Option = SelectOption;
