import cx from 'classnames';
import React from 'react';

type ListItemsPropsT = {
  className?: string
  children: React.ReactNode
}

export const ListItems = ({ className, children }: ListItemsPropsT) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <div className={cx({ ..._classname })}>
      {children}
    </div>
  )
}

type ListItemPropsT = {
  className?: string
  children: React.ReactNode
}

export const ListItem = ({ className, children }: ListItemPropsT) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <div className={cx('t-list-item', { ..._classname })}>
      {children}
    </div>
  )
}

type ListInnerPropsT = {
  className?: string
  children: React.ReactNode
}

export const ListInner = ({ className, children }: ListInnerPropsT) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <div className={cx('t-list-inner', { ..._classname })} >
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
  Items: typeof ListItems;
  Item: typeof ListItem;
  Inner: typeof ListInner;
}

export const List = ListItems as CompoundedComponent;
List.Items = ListItems;
List.Item = ListItem;
List.Inner = ListInner;
