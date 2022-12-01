import cx from 'classnames';
import React from 'react';

export const Label: React.FC<
  React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >
> = ({ className, children, ...props }) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <label {...props} className={cx('t-label', { ..._classname })}>
      {children}
    </label>
  );
};
