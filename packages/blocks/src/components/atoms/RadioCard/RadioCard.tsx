import { CircleInformationIcon } from '@mergestat/icons';
import cx from 'classnames';
import React from 'react';
import { Tooltip } from '../Tooltip';

type RadioCardProps = {
  className?: string | undefined;
  startIcon?: React.ReactNode;
  isSelected?: boolean;
  disabled?: boolean;
  label?: string;
  tooltip?: string;
  onChange?: () => void;
};

export const RadioCard: React.FC<RadioCardProps> = ({
  className,
  startIcon,
  isSelected = false,
  disabled = false,
  label,
  tooltip,
  onChange,
}) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <div
      className={cx('t-radio-card', {
        't-radio-card-selected': isSelected,
        't-radio-card-disabled': disabled,
        ..._classname
      })}
      onClick={() => {
        if (!isSelected && !disabled && onChange) onChange();
      }}
    >
      {startIcon && startIcon}
      {label && label}
      {tooltip &&
        <Tooltip content={tooltip} placement='right'>
          <CircleInformationIcon className="t-icon t-icon-muted cursor-pointer" />
        </Tooltip>}
    </div >
  );
};
