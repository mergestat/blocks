import cx from 'classnames';
import React from 'react';

type RadioCardProps = {
  className?: string | undefined;
  startIcon?: React.ReactNode;
  isSelected?: boolean;
  label?: string;
  onChange?: () => void;
};

export const RadioCard: React.FC<RadioCardProps> = ({
  className,
  startIcon,
  isSelected = false,
  label,
  onChange,
}) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <div
      className={cx('t-radio-card', {
        't-tag-blue': isSelected,
        ..._classname
      })}
      onClick={() => {
        if (!isSelected && onChange) onChange();
      }}
    >
      {startIcon && startIcon}
      {label && label}
    </div>
  );
};
