import { ChevronDownIcon, ChevronUpIcon } from '@mergestat/icons';
import cx from 'classnames';
import React, { createContext, RefAttributes, useCallback, useState } from 'react';
import logo from '../../../../public/logo-inverse.svg';
import logoMark from '../../../../public/logo-mark-inverse.svg';
import { Badge } from '../../atoms/Badge';
import { Button } from '../../atoms/Button';
import { Tooltip } from '../../atoms/Tooltip';
import { Dropdown } from '../../molecules/Dropdown';
import { Menu } from '../../molecules/Menu';

type SidebarItemProps = {
  icon?: React.ReactNode
  label: string
  active?: boolean
  compact?: boolean
  disabled?: boolean
  subNav?: React.ReactNode
  collapsed?: boolean
  level?: 'sub' | 'default'
}

type SidebarProps = {
  dark?: boolean
  compact?: boolean
  collapsible?: boolean
}

type SidebarLogoProps = {
  onClick?: () => void;
}

const SidebarContext = createContext(false)
const ToggleSidebarContext = createContext({})

/* Sidebar */
const SidebarOuter: React.FC<
  SidebarProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({
  dark,
  collapsible = false,
  compact = true,
  children,
  className
}) => {
    const _classname = className ? { [className]: !!className } : {}

    const [collapsed, setCollapsed] = useState(false)
    const toggleCollapsedSidebar = useCallback(() => setCollapsed(state => !state), [setCollapsed])

    return (
      <ToggleSidebarContext.Provider value={() => toggleCollapsedSidebar}>
        <SidebarContext.Provider value={collapsed}>
          <div
            className={cx(
              't-sidebar',
              {
                ..._classname,
                't-sidebar-compact': compact,
                't-sidebar-dark': dark,
                't-sidebar-collapsed': collapsed
              }
            )}
          >
            <nav className='t-sidebar-inner' aria-label='Sidebar'>
              {children}
              {collapsible &&
                <Sidebar.Footer className='border-t border-gray-700'>
                  <Button
                    onClick={() => setCollapsed(!collapsed)}
                    isIconOnly={collapsed}
                    skin={dark ? 'borderless-i' : 'borderless-muted'}
                    label={!collapsed ? 'Collapse' : ''}
                    size='small'
                    startIcon={collapsed ?
                      <div className='t-icon'>
                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path fillRule='evenodd' clipRule='evenodd' d='M3.79289 4.29289C4.18342 3.90237 4.81658 3.90237 5.20711 4.29289L12.2071 11.2929C12.5976 11.6834 12.5976 12.3166 12.2071 12.7071L5.20711 19.7071C4.81658 20.0976 4.18342 20.0976 3.79289 19.7071C3.40237 19.3166 3.40237 18.6834 3.79289 18.2929L10.0858 12L3.79289 5.70711C3.40237 5.31658 3.40237 4.68342 3.79289 4.29289ZM11.7929 4.29289C12.1834 3.90237 12.8166 3.90237 13.2071 4.29289L20.2071 11.2929C20.5976 11.6834 20.5976 12.3166 20.2071 12.7071L13.2071 19.7071C12.8166 20.0976 12.1834 20.0976 11.7929 19.7071C11.4024 19.3166 11.4024 18.6834 11.7929 18.2929L18.0858 12L11.7929 5.70711C11.4024 5.31658 11.4024 4.68342 11.7929 4.29289Z' fill='#6B7280' />
                        </svg>
                      </div>
                      :
                      <div className='t-icon'>
                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path fillRule='evenodd' clipRule='evenodd' d='M12.2071 4.29289C12.5976 4.68342 12.5976 5.31658 12.2071 5.70711L5.91421 12L12.2071 18.2929C12.5976 18.6834 12.5976 19.3166 12.2071 19.7071C11.8166 20.0976 11.1834 20.0976 10.7929 19.7071L3.79289 12.7071C3.40237 12.3166 3.40237 11.6834 3.79289 11.2929L10.7929 4.29289C11.1834 3.90237 11.8166 3.90237 12.2071 4.29289ZM20.2071 4.29289C20.5976 4.68342 20.5976 5.31658 20.2071 5.70711L13.9142 12L20.2071 18.2929C20.5976 18.6834 20.5976 19.3166 20.2071 19.7071C19.8166 20.0976 19.1834 20.0976 18.7929 19.7071L11.7929 12.7071C11.4024 12.3166 11.4024 11.6834 11.7929 11.2929L18.7929 4.29289C19.1834 3.90237 19.8166 3.90237 20.2071 4.29289Z' fill='#6B7280' />
                        </svg>
                      </div>
                    }
                  />
                </Sidebar.Footer>
              }
            </nav>
          </div>
        </SidebarContext.Provider>
      </ToggleSidebarContext.Provider>
    )
  }

/* Header */
const SidebarHeader: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({
  children,
  className }) => {
    const _classname = className ? { [className]: !!className } : {}

    return (
      <div className={cx('t-sidebar-header', { ..._classname })}>
        {children ? children :
          <Sidebar.Logo />
        }
      </div>
    )
  }

/* Sidebar item */
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
    subNav,
    level
  }, ref) => {
    const [showSubNav, setShowSubNav] = useState(false);
    const collapsedContext = React.useContext(SidebarContext)

    const _classname = className ? { [className]: !!className } : {}

    return (
      <li className='list-none'>
        {collapsedContext && subNav ?
          <Dropdown
            trigger={
              <div
                className={cx('t-sidebar-item default t-sidebar-item-has-children', {
                  ..._classname,
                  't-sidebar-item-compact ': compact,
                  't-sidebar-item-sub': level === 'sub',
                  disabled: disabled,
                  active: active,
                })}
              >
                {icon && <div className='t-sidebar-item-icon-wrap'>{icon}</div>}
              </div>
            }
            overlay={() => (
              <Menu className='t-sidebar-sub-menu'>
                <h4 className='font-medium text-sm t-text-muted my-2 px-4'>{label}</h4>
                {subNav}
              </Menu>
            )}
          />
          : <>
            <a
              className={cx('t-sidebar-item default', {
                ..._classname,
                't-sidebar-item-compact ': compact,
                't-sidebar-item-sub': level === 'sub',
                't-sidebar-item-has-children': children,
                disabled: disabled,
                active: active,
              })}
              href={href}
              ref={ref}
              onClick={onClick ? onClick : () => setShowSubNav(!showSubNav)}
            >
              {icon && <div className='t-sidebar-item-icon-wrap'>{icon}</div>}
              {(!collapsedContext || level === 'sub') &&
                <div className='flex-1 truncate max-w-full'>{label}</div>
              }
              {subNav && !collapsedContext && <div className='t-sidebar-item-icon-wrap'>
                {showSubNav ? <ChevronUpIcon className='t-icon t-icon-small' /> : <ChevronDownIcon className='t-icon t-icon-small' />}</div>
              }
            </a>

            {subNav &&
              <ul className={cx('t-sidebar-sub-menu', { 'active': showSubNav })}>
                {subNav}
              </ul>
            }
          </>
        }
      </li>
    )
  }
)

/* Logo */
const SidebarLogo: React.FC<
  SidebarLogoProps &
  RefAttributes<HTMLAnchorElement> &
  React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
  >
> = React.forwardRef (
  ({
    className,
    href,
    onClick,
  }, ref) => {
    const collapsedContext = React.useContext(SidebarContext)
    const _classname = className ? { [className]: !!className } : {}

    return (
      <a
        className={cx('t-sidebar-logo', { ..._classname })}
        href={href}
        ref={ref}
        onClick={onClick}>
        <img src={collapsedContext ? logoMark : logo} alt='MergeStat' />
      </a>
    )
  }

/* Footer */
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

/* Main? */
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
    )
  }

/* Divider */
const SidebarDivider: React.FC = () => {
  return <div className='t-sidebar-divider' />
}

/* Version */
const SidebarVersion: React.FC<
  { label: string } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ label }) => {
  const collapsedContext = React.useContext(SidebarContext)

  return (
    collapsedContext ?
      <Tooltip content={label} placement='right'>
        <Badge
          rounded={true}
          iconOnly={true}
          startIcon={
            <div className='t-icon'>
              <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path fillRule='evenodd' clipRule='evenodd' d='M7 4C5.34315 4 4 5.34315 4 7V12C4 12.2985 4.12956 12.5656 4.33882 12.7503L4.36217 12.7709L11.3584 19.7671C11.5326 19.9131 11.755 20 12 20C12.245 20 12.4674 19.9131 12.6416 19.7671L19.6158 12.7929C19.6305 12.7782 19.6456 12.764 19.6612 12.7503C19.8704 12.5656 20 12.2985 20 12C20 11.755 19.9131 11.5326 19.7671 11.3584L12.7929 4.38419C12.7782 4.36952 12.764 4.35438 12.7503 4.33882C12.5656 4.12956 12.2985 4 12 4H7ZM2 7C2 4.23858 4.23858 2 7 2H12C12.8838 2 13.6793 2.3834 14.2269 2.98978L21.2071 9.96998C21.2218 9.98466 21.236 9.99979 21.2497 10.0154C21.716 10.5436 22 11.2398 22 12C22 12.8838 21.6166 13.6793 21.0102 14.2269L14.03 21.2071C14.0153 21.2218 14.0002 21.236 13.9846 21.2497C13.4564 21.716 12.7602 22 12 22C11.2398 22 10.5436 21.716 10.0154 21.2497C9.99979 21.236 9.98466 21.2218 9.96998 21.2071L2.98978 14.2269C2.3834 13.6793 2 12.8838 2 12V7ZM6 7C6 6.44772 6.44772 6 7 6H7.01C7.56228 6 8.01 6.44772 8.01 7C8.01 7.55228 7.56228 8 7.01 8H7C6.44772 8 6 7.55228 6 7Z' />
              </svg>
            </div>
          }
        />
      </Tooltip>
      :
      <Badge
        label={label}
        rounded={true}
        startIcon={
          <div className='t-icon'>
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path fillRule='evenodd' clipRule='evenodd' d='M7 4C5.34315 4 4 5.34315 4 7V12C4 12.2985 4.12956 12.5656 4.33882 12.7503L4.36217 12.7709L11.3584 19.7671C11.5326 19.9131 11.755 20 12 20C12.245 20 12.4674 19.9131 12.6416 19.7671L19.6158 12.7929C19.6305 12.7782 19.6456 12.764 19.6612 12.7503C19.8704 12.5656 20 12.2985 20 12C20 11.755 19.9131 11.5326 19.7671 11.3584L12.7929 4.38419C12.7782 4.36952 12.764 4.35438 12.7503 4.33882C12.5656 4.12956 12.2985 4 12 4H7ZM2 7C2 4.23858 4.23858 2 7 2H12C12.8838 2 13.6793 2.3834 14.2269 2.98978L21.2071 9.96998C21.2218 9.98466 21.236 9.99979 21.2497 10.0154C21.716 10.5436 22 11.2398 22 12C22 12.8838 21.6166 13.6793 21.0102 14.2269L14.03 21.2071C14.0153 21.2218 14.0002 21.236 13.9846 21.2497C13.4564 21.716 12.7602 22 12 22C11.2398 22 10.5436 21.716 10.0154 21.2497C9.99979 21.236 9.98466 21.2218 9.96998 21.2071L2.98978 14.2269C2.3834 13.6793 2 12.8838 2 12V7ZM6 7C6 6.44772 6.44772 6 7 6H7.01C7.56228 6 8.01 6.44772 8.01 7C8.01 7.55228 7.56228 8 7.01 8H7C6.44772 8 6 7.55228 6 7Z' />
            </svg>
          </div>
        }
      />
  )
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
  Footer: typeof SidebarFooter;
  Main: typeof SidebarMain;
  Logo: typeof SidebarLogo;
  Version: typeof SidebarVersion;
}

const CompoundedSidebar = SidebarOuter as CompoundedComponent;
CompoundedSidebar.Item = SidebarItem;
CompoundedSidebar.Divider = SidebarDivider;
CompoundedSidebar.Header = SidebarHeader;
CompoundedSidebar.Footer = SidebarFooter;
CompoundedSidebar.Main = SidebarMain;
CompoundedSidebar.Logo = SidebarLogo;
CompoundedSidebar.Version = SidebarVersion;

export const Sidebar = CompoundedSidebar;
