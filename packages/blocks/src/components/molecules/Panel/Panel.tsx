import cx from 'classnames';
import React from 'react';

type BaseProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLBaseElement>,
  HTMLBaseElement
>

const PanelWrapper: React.FC<BaseProps> = ({ children, className }) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <div className={cx('t-panel', { ..._classname })}>{children}</div>
  )
}

const PanelHeader: React.FC<BaseProps> = ({ children, className }) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <div className={cx('t-panel-header py-0 px-6', { ..._classname })}>
      {children}
    </div>
  )
}

const PanelBody: React.FC<BaseProps> = ({ children, className }) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <div className={cx('t-panel-body', { ..._classname })}>{children}</div>
  )
}

const PanelFooter: React.FC<BaseProps> = ({ children, className }) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <div className={cx('t-panel-footer', { ..._classname })}>
      {children}
    </div>
  )
}

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<BaseProps> {
  Header: typeof PanelHeader;
  Body: typeof PanelBody;
  Footer: typeof PanelFooter;
}

export const Panel = PanelWrapper as CompoundedComponent;
Panel.Header = PanelHeader;
Panel.Body = PanelBody;
Panel.Footer = PanelFooter;
