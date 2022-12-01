import { XIcon } from '@mergestat/icons';
import cx from 'classnames';
import React, { useState } from 'react';
import { Button } from '../../atoms/Button';
import { AlertIcon } from './AlertIcon';

type AlertProps = {
  type?: 'warning' | 'info' | 'success' | 'error' | 'default';
  closable?: boolean;
  onClose?: () => void;
  theme?: 'dark' | 'light';
  className?: string;
  isInline?: boolean;
  isFullWidth?: boolean;
  title?: string | React.ReactNode;
  noIcon?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({
  type = 'warning',
  closable = false,
  theme = 'light',
  onClose,
  title,
  className,
  isInline = false,
  isFullWidth = false,
  noIcon = false,
  icon = null,
  children
}) => {
  const [visible, setVisible] = useState<boolean>(true);

  const handleOnClose = () => {
    setVisible(false);
    onClose && onClose();
  }

  if (!visible) return null;

  const _classname = className ? { [className]: !!className } : {}

  return (
    <div
      className={cx(
        isInline ? 't-inline-alert' : `t-alert t-alert-${type} align-center`,
        {
          't-alert-full-width': isFullWidth,
          [`t-alert-${theme}`]: !!theme,
          ..._classname,
        }
      )}
    >
      {!noIcon && !icon && <AlertIcon type={type} />}
      {icon && icon}
      {isInline ? (
        children && (
          <p className={cx("t-inline-alert-message", { 'ml-2': !noIcon })}>
            {children}
          </p>
        )
      ) : (
        <div className={cx("t-alert-body", { 'ml-3': !noIcon })}>
          {title && (
            <h3 className="t-alert-title">{title}</h3>
          )}
          {children && (
            <p className="t-alert-message">
              {children}
            </p>
          )}
        </div>
      )}

      {closable && (
        <Button skin="borderless-muted" onClick={handleOnClose}>
          <XIcon className="t-icon t-icon-heroicons-x" />
        </Button>
      )}
    </div>
  );
}
