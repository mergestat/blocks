import cx from 'classnames';
import React, { RefAttributes, useState } from 'react';

import {
  ChevronDownIcon,
  ChevronUpIcon
} from '@mergestat/icons';

type SidebarItemProps = {
  icon?: React.ReactNode;
  label: string;
  active?: boolean;
  compact?: boolean;
  disabled?: boolean;
  subLevel?: boolean;
}

type SidebarProps = {
  dark?: boolean;
  compact?: boolean;
}

const SidebarOuter: React.FC<
  SidebarProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({
  dark,
  compact = true,
  children,
  className }) => {
    const _classname = className ? { [className]: !!className } : {}

    return (
      <div
        className={cx(
          't-sidebar',
          {
            ..._classname,
            't-sidebar-compact': compact,
            't-sidebar-dark': dark
          }
        )}
      >
        <nav className='t-sidebar-inner' aria-label='Sidebar'>
          {children}
        </nav>
      </div>
    );
  }


const SidebarHeader: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({
  children,
  className }) => {
    const _classname = className ? { [className]: !!className } : {}

    return (
      <div className={cx('t-sidebar-header', { ..._classname })}>
        {children}
      </div>
    );
  }

const SidebarFooter: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({
  children,
  className }) => {
    const _classname = className ? { [className]: !!className } : {}

    return (
      <div className={cx('t-sidebar-footer', { ..._classname })}>
        {children}
      </div>
    );
  }

const SidebarMain: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({
  children,
  className }) => {
    const _classname = className ? { [className]: !!className } : {}

    return (
      <ul className={cx('t-sidebar-main', { ..._classname })}>
        {children}
      </ul>
    );
  }

const SidebarItem: React.FC<
  SidebarItemProps &
  RefAttributes<HTMLAnchorElement> &
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
> = React.forwardRef(
  ({
    label,
    icon,
    active,
    onClick,
    href,
    className,
    children,
    disabled = false,
    compact = true,
    subLevel = false,
  }, ref) => {
    const [showSubNav, setShowSubNav] = useState(false);
    const _classname = className ? { [className]: !!className } : {}

    return (
      <li className='list-none'>
        <a
          className={cx('t-sidebar-item default', {
            ..._classname,
            't-sidebar-item-compact ': compact,
            't-sidebar-item-sub': subLevel,
            disabled: disabled,
            active: active,
          })}
          href={href}
          ref={ref}
          onClick={onClick ? onClick : () => setShowSubNav(!showSubNav)}
        >
          {icon && <div className='t-sidebar-item-icon-wrap'>{icon}</div>}
          <div className='flex-1'>{label}</div>
          {children && <div className='t-sidebar-item-icon-wrap'>
            {showSubNav ? <ChevronUpIcon className='t-icon t-icon-small' /> : <ChevronDownIcon className='t-icon t-icon-small' />}</div>}
        </a>
        {children &&
          <ul className={cx('t-sidebar-nav-sub', { 'active': showSubNav })}>
            {children}
          </ul>
        }
      </li>
    );
  }
);

SidebarItem.defaultProps = {
  active: false,
}

const SidebarDivider: React.FC = () => {
  return <div className='t-sidebar-divider' />;
}

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    SidebarProps & React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
  > {
  Outer: typeof SidebarOuter;
  Item: typeof SidebarItem;
  Divider: typeof SidebarDivider;
  Header: typeof SidebarHeader;
  Footer: typeof SidebarFooter
  Main: typeof SidebarMain
}

const CompoundedSidebar = SidebarOuter as CompoundedComponent;
CompoundedSidebar.Item = SidebarItem;
CompoundedSidebar.Divider = SidebarDivider;
CompoundedSidebar.Header = SidebarHeader;
CompoundedSidebar.Footer = SidebarFooter;
CompoundedSidebar.Main = SidebarMain;

export const Sidebar = CompoundedSidebar;
