import cx from 'classnames';
import React, { useEffect } from 'react';

export enum CHECKBOX_STATES {
  Checked,
  Indeterminate,
  Unchecked,
}

type CheckboxProps = {
  label?: string;
  value?: CHECKBOX_STATES
}

const CheckboxInput: React.FC<
  CheckboxProps &
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = ({ label, children, className, value, ...props }) => {
  const checkboxRef = React.useRef<HTMLInputElement | null>(null)
  const _classname = className ? { [className]: !!className } : {}

  useEffect(() => {
    if (checkboxRef.current) {
      if (value === CHECKBOX_STATES.Checked) {
        checkboxRef.current.checked = true;
        checkboxRef.current.indeterminate = false;
      } else if (value === CHECKBOX_STATES.Unchecked) {
        checkboxRef.current.checked = false;
        checkboxRef.current.indeterminate = false;
      } else if (value === CHECKBOX_STATES.Indeterminate) {
        checkboxRef.current.checked = false;
        checkboxRef.current.indeterminate = true;
      }
    }
  }, [value, checkboxRef]);

  return (
    <label className={cx('t-checkbox', { ..._classname })}>
      <input type="checkbox" ref={checkboxRef} {...props} />
      {label
        ? <span className="cursor-pointer w-fit">{label}</span>
        : children && <span className="cursor-pointer w-fit">{children}</span>
      }
    </label>
  );
}

const CheckboxGroup: React.FC<
  { className?: string; inline?: boolean } & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
> = ({ children, inline = false, className }) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <div className={cx(`t-checkbox-group${inline ? '-inline' : ''}`, { ..._classname })}    >
      {children}
    </div>
  );
}

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    CheckboxProps &
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    > &
    React.RefAttributes<HTMLElement>
  > {
  Input: typeof CheckboxInput;
  Group: typeof CheckboxGroup;
}

export const Checkbox = CheckboxInput as CompoundedComponent;
Checkbox.Group = CheckboxGroup;
