import cx from 'classnames';
import React, { cloneElement } from 'react';

type ColoredBoxPropsT = {
  className?: string;
  size?: '6' | '7' | '8' | '9' | '10' | '11' | '12' | '14' | '16' | '20';
  skin?: 'default' | 'purple' | 'aqua' | 'yellow' | 'indigo' | 'blue';
  isCircle?: boolean;
  onClick?: () => void;
  children: React.ReactElement;
};

export const ColoredBox = ({
  className,
  size = '14',
  skin = 'default',
  isCircle = false,
  onClick,
  children,
}: ColoredBoxPropsT) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <div
      className={cx(
        `w-${size} h-${size}`,
        {
          ..._classname,
          't-colored-box-circle': isCircle,
          'is-interactive': !!onClick,
        },
        `t-colored-box t-colored-box-${skin}`,
      )}
      style={{ aspectRatio: '1 / 1' }}
      onClick={(e) => {
        if (onClick) onClick();
        e.preventDefault();
      }}
    >
      {cloneElement(children, {})}
    </div>
  );
};
