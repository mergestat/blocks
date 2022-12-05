import cx from 'classnames';
import React from 'react';

export const StatOuter: React.FC<
  Record<string, unknown> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
> = ({ children, className }) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <div className={cx('t-stat', { ..._classname })}>
      {children}
    </div>
  );
}

export const StatLeft: React.FC<
  Record<string, unknown> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
> = ({ className, children }) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <div className={cx('t-stat-left', { ..._classname })}>
      {children}
    </div>
  );
}

export const StatRight: React.FC<
  Record<string, unknown> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
> = ({ className, children }) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <div className={cx('t-stat-right', { ..._classname })} >
      {children}
    </div>
  );
}

export const StatLabel: React.FC<
  Record<string, unknown> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
> = ({ className, children }) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <div className={cx('t-stat-label', { ..._classname })}>
      {children}
    </div>
  );
}

export const StatNumber: React.FC<
  Record<string, unknown> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
> = ({ className, children }) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <div className={cx('t-stat-number', { ..._classname })}>
      {children}
    </div>
  )
}

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
  > {
  Label: typeof StatLabel;
  Number: typeof StatNumber;
  Left: typeof StatLeft;
  Right: typeof StatRight;
}

export const Stat = StatOuter as CompoundedComponent;
Stat.Label = StatLabel;
Stat.Number = StatNumber;
Stat.Left = StatLeft;
Stat.Right = StatRight;
