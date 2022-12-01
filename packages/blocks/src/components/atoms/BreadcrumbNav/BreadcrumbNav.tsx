import React from 'react';
import { ChevronRightIcon } from '@mergestat/icons';
import cx from 'classnames';

type BreadcrumbNavProps = {
  data: {
    text: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    onClick?: () => void;
  }[];
};

export const BreadcrumbNav: React.FC<BreadcrumbNavProps> = ({ data }) => {
  return (
    <div className="t-breadcrumb-nav">
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
