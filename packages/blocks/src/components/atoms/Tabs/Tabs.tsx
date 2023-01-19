import { Tab as RCTab } from '@headlessui/react';
import { XIcon } from '@mergestat/icons';
import cx from 'classnames';
import React from 'react';

type TabGroupProps = {
  as?: string | React.Component
  defaultIndex?: number
  selectedIndex?: number
  onChange?: (index: number) => void
  vertical?: boolean
  manual?: boolean
  variant?: 'secondary' | 'default'
  children?: React.ReactNode
}

type TabItemProps = {
  disabled?: boolean
  closable?: boolean,
  onClose?: () => void
  variant?: 'secondary' | 'default'
}

const TabGroup: React.FC<TabGroupProps> = ({ children, defaultIndex, selectedIndex, onChange, vertical, variant = 'default' }) => {
  return (
    <RCTab.Group
      defaultIndex={defaultIndex}
      selectedIndex={selectedIndex}
      onChange={onChange}
      vertical={vertical}
      manual
    >
      {React.Children.map(children, child => {
        return React.cloneElement(child as React.ReactElement, { variant })
      })}
    </RCTab.Group>
  )
}

const TabList: React.FC<Record<string, unknown> & React.HTMLAttributes<HTMLElement>> = ({
  className,
  variant,
  children,
  ...props
}) => {
  const _classname = className ? { [className]: !!className } : {}
  const isDefault = variant === 'default'
  const isSecondary = variant === 'secondary'

  return (
    <RCTab.List
      className={cx('w-full overflow-x-auto', { 't-tab-line-b': isDefault }, { ..._classname })}
      {...props}
    >
      <nav className={cx('flex', { 'space-x-2': isDefault }, { 't-tab-box-secondary': isSecondary })}>
        {React.Children.map(children, child => {
          return React.cloneElement(child as React.ReactElement, { variant })
        })}
      </nav>
    </RCTab.List>
  )
}

const TabItem: React.FC<TabItemProps & React.HTMLAttributes<HTMLElement>> = ({
  className,
  disabled = false,
  children,
  closable,
  onClose,
  variant,
  ...props
}) => {
  const variantStyle = variant === 'secondary' ? 't-tab-secondary' : 't-tab'
  return (
    <RCTab
      disabled={disabled}
      {...props}
      className={({ selected, }) =>
        cx(variantStyle, {
          active: selected,
          't-tab-disabled': disabled,
        })
      }
    >
      {children}
      {closable &&
        <div
          className='t-tab-close-btn'
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onClose && onClose()
          }}>
          <XIcon className='t-icon t-icon-small' />
        </div>
      }
    </RCTab>
  )
}

const TabPanels: React.FC<Record<string, unknown> & React.HTMLAttributes<HTMLElement>> =
  ({ className, children, ...props }) => {
    const _classname = className ? { [className]: !!className } : {}

    return (
      <RCTab.Panels {...props} className={cx({ ..._classname })}>
        {children}
      </RCTab.Panels>
    )
  }

const TabPanel: React.FC<Record<string, unknown> & React.HTMLAttributes<HTMLElement>> = ({
  className,
  children,
  ...props
}) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <RCTab.Panel {...props} className={cx({ ..._classname })}>
      {children}
    </RCTab.Panel>
  )
}

interface CompoundedComponent extends React.ForwardRefExoticComponent<TabGroupProps> {
  Group: typeof TabGroup;
  List: typeof TabList;
  Item: typeof TabItem;
  Panels: typeof TabPanels;
  Panel: typeof TabPanel;
}

export const Tabs = TabGroup as CompoundedComponent;
Tabs.Group = TabGroup;
Tabs.List = TabList;
Tabs.Item = TabItem;
Tabs.Panels = TabPanels;
Tabs.Panel = TabPanel;
