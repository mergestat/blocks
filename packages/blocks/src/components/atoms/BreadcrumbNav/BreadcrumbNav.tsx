import { ChevronRightIcon } from '@mergestat/icons';
import cx from 'classnames';
import React from 'react';

type BreadcrumbNavProps = {
  size?: 'default' | 'sm'
  data: {
    text: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    onClick?: () => void;
  }[];
};

export const BreadcrumbNav: React.FC<BreadcrumbNavProps> = ({ data, size }) => {
  return (
    <div className={cx("t-breadcrumb-nav", { 't-breadcrumb-nav-sm': size === 'sm' })}>
      {data.map((item, index) => {
        return (
          <div
            key={`key_${index}`}
            className="t-breadcrumb-nav-item"
          >
            {index !== 0 && <ChevronRightIcon className="t-icon t-icon-muted cursor-default" />}
            {item.startIcon && item.startIcon}
            <div
              className={cx('t-breadcrumb-nav-title', index === data.length - 1 && 't-breadcrumb-nav-title-active')}
              onClick={() => item.onClick && item.onClick()}
            >
              {item.text}
            </div>
            {item.endIcon && item.endIcon}
          </div>
        );
      })}
    </div>
  );
};
