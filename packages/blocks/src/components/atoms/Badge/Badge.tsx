import { XIcon } from '@mergestat/icons';
import cx from 'classnames';
import React, { useState } from 'react';

type BadgeProps = {
  label?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  className?: string
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'dark' | 'default';
  rounded?: boolean
  iconOnly?: boolean
  closable?: boolean
  action?: boolean
  children?: React.ReactNode
  onClose?: () => void
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  className,
  startIcon,
  endIcon,
  variant = 'default',
  rounded = false,
  iconOnly,
  closable,
  action,
  children,
  onClose
}) => {
  const [visible, setVisible] = useState<boolean>(true);

  if (!visible) return null;

  const _classname = className ? { [className]: !!className } : {}

  const MainComp = (
    <span
      className={cx('t-badge', `t-badge-${variant}`, {
        't-badge-icon': iconOnly,
        't-badge-action cursor-pointer': action,
        't-badge-rounded': rounded,
        ..._classname
      })}
    >
      {/* Start Icon */}
      {startIcon && startIcon}

      {/* Label or Child props */}
      {label ? <span>{label}</span> : children ? children : ''}

      {/* End Icon */}
      {endIcon && endIcon}
    </span>
  )

  return (closable ? (
    <div className="t-badge-group">
      {MainComp}
      <div
        className={cx('t-badge t-badge-icon t-badge-action cursor-pointer', `t-badge-${variant}`)}
        onClick={() => {
          setVisible(false);
          if (onClose) onClose();
        }}
      >
        <XIcon className="t-icon" />
      </div>
    </div>
  ) : (
    MainComp
  ))
}
