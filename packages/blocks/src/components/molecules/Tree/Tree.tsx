import { CaretDownIcon, CaretRightIcon } from '@mergestat/icons';
import cx from 'classnames';
import React, { useState } from 'react';
import { Tooltip } from '../../atoms/Tooltip';

type BaseProps = React.HTMLAttributes<HTMLElement>

type TreeProps = React.HTMLAttributes<HTMLElement> & {
  icon?: React.ReactElement
  name: string
  desc?: string
}

const TreeOuter: React.FC<BaseProps> = ({ children, className }) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <div className={cx('t-tree', { ..._classname })}>
      {children}
    </div>
  )
}

const TreeItem: React.FC<TreeProps> = ({ children, className, icon, name, desc }) => {
  const _classname = className ? { [className]: !!className } : {}
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={cx('t-tree-item', { ..._classname })}>
      <div className='t-tree-item-header' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <CaretDownIcon className="t-icon-muted mr-2" /> : <CaretRightIcon className="t-icon-muted mr-2" />}
        {icon}
        {desc ?
          <Tooltip content={desc} placement='right' offset={[0, 10]}>
            <span className='t-tree-item-name'>{name}</span>
          </Tooltip>
          :
          <span className='t-tree-item-name'>{name}</span>
        }
      </div>
      {isOpen && <div className='t-tree-item-body'>
        {children}
      </div>}
    </div>
  )
}

const TreeSubItem: React.FC<TreeProps> = ({ className, name, desc }) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <div className={cx('t-tree-subitem', { ..._classname })}>
      {desc ?
        <Tooltip content={desc} placement='right' offset={[0, 10]}>
          {name}
        </Tooltip>
        :
        name
      }
    </div>
  )
}

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<BaseProps> {
  Item: typeof TreeItem
  SubItem: typeof TreeSubItem
}

export const Tree = TreeOuter as CompoundedComponent
Tree.Item = TreeItem
Tree.SubItem = TreeSubItem
