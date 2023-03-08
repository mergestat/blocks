import { TrashIcon } from '@mergestat/icons';
import cx from 'classnames';
import React from 'react';
import { Button } from '../Button';
import { ColoredBox } from '../ColoredBox';

type ListItemProps = {
  title: string
  subline?: string
  startIcon?: React.ReactElement
  className?: string
  onClick?: () => void
  onTrashClick?: () => void
  action?: React.ReactElement
}

export const ListItem: React.FC<ListItemProps> = ({
  title,
  subline,
  startIcon,
  className,
  onClick,
  onTrashClick,
  action
}) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <div
      className={cx('t-list-item-container', {
        'cursor-pointer hover_text-blue-600': !!onClick,
        ..._classname
      })}
      onClick={(e) => {
        e.preventDefault()
        const element = e.target as HTMLElement;
        if (['svg', 'path', 'button'].includes(element.tagName)) {
          return;
        }
        onClick && onClick();
      }}
    >
      <div className="t-list-item-left">
        {startIcon && (
          <ColoredBox size="10">
            {startIcon}
          </ColoredBox>
        )}
        <div>
          <h3>{title}</h3>
          {subline && <p>{subline}</p>}
        </div>
      </div>
      <div className="t-list-item-right">
        {onTrashClick && <Button
          isIconOnly
          skin="borderless-muted"
          startIcon={<TrashIcon className="t-icon" />}
          onClick={(e) => {
            e.preventDefault()
            onTrashClick()
          }}
        />}
        {action && action}
      </div>
    </div>
  );
};
