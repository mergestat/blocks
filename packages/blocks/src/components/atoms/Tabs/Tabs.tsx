import { Tab as RCTab } from '@headlessui/react';
import cx from 'classnames';
import React from 'react';

type TabGroupProps = {
  as?: string | React.Component;
  defaultIndex?: number;
  onChange?: (index: number) => void;
  vertical?: boolean;
  manual?: boolean;
}

type TabItemProps = {
  disabled?: boolean
}

const TabGroup: React.FC<
  TabGroupProps &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLBaseElement>,
    HTMLBaseElement
  >
> = ({ children, defaultIndex, onChange, vertical }) => {
  return (
    <RCTab.Group
      defaultIndex={defaultIndex}
      onChange={onChange}
      vertical={vertical}
      manual
    >
      {children}
    </RCTab.Group>
  );
}

const TabList: React.FC<Record<string, unknown> & React.HTMLAttributes<HTMLElement>> = ({
  className,
  children,
  ...props
}) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <RCTab.List
      className={cx('border-b border-gray-200', { ..._classname })}
      {...props}
    >
      <nav className="flex space-x-2">{children}</nav>
    </RCTab.List>
  );
}

const TabItem: React.FC<TabItemProps & React.HTMLAttributes<HTMLElement>> = ({
  className,
  disabled = false,
  children,
  ...props
}) => {
  return (
    <RCTab
      disabled={disabled}
      {...props}
      className={({ selected }) =>
        cx('t-tab', {
          active: selected,
          't-tab-disabled': disabled,
        })
      }
    >
      {children}
    </RCTab>
  );
}

const TabPanels: React.FC<Record<string, unknown> & React.HTMLAttributes<HTMLElement>> =
  ({ className, children, ...props }) => {
    const _classname = className ? { [className]: !!className } : {}

    return (
      <RCTab.Panels {...props} className={cx({ ..._classname })}>
        {children}
      </RCTab.Panels>
    );
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
  );
}

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    TabGroupProps &
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLBaseElement>,
      HTMLBaseElement
    >
  > {
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
