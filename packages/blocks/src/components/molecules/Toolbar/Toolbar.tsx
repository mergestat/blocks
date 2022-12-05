import cx from 'classnames';
import React from 'react';

type BaseProps = React.HTMLAttributes<HTMLElement>;

const ToolbarOuter: React.FC<BaseProps> = ({ children, className }) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <div className={cx('t-toolbar', { ..._classname })}>
      {children}
    </div>
  );
}

const ToolbarLeft: React.FC<BaseProps> = ({ children, className }) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <div className={cx('t-toolbar-left', { ..._classname })}>
      {children}
    </div>
  );
}

const ToolbarRight: React.FC<BaseProps> = ({ children, className }) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <div className={cx('t-toolbar-right', { ..._classname })}>
      {children}
    </div>
  );
}

const ToolbarItem: React.FC<BaseProps> = ({ children, className }) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <div className={cx('t-toolbar-item', { ..._classname })}>
      {children}
    </div>
  )
}

const ToolbarTitle: React.FC<BaseProps> = ({ children, className }) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <h2 className={cx('t-toolbar-title', { ..._classname })}>
      {children}
    </h2>
  )
}

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<BaseProps> {
  Outer: typeof ToolbarOuter;
  Left: typeof ToolbarLeft;
  Right: typeof ToolbarRight;
  Item: typeof ToolbarItem;
  Title: typeof ToolbarTitle;
}

export const Toolbar = ToolbarOuter as CompoundedComponent;
Toolbar.Outer = ToolbarOuter;
Toolbar.Left = ToolbarLeft;
Toolbar.Right = ToolbarRight;
Toolbar.Item = ToolbarItem;
Toolbar.Title = ToolbarTitle;
