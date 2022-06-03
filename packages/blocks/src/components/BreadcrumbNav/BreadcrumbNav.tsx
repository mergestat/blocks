import React from 'react';
import { ChevronRightIcon } from '@mergestat/icons';

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
    <div className="flex items-center max-w-full">
      {data.map((item, index) => {
        return (
          <div
            key={`key_${index}`}
            className="t-breadcrumb-item"
          >
            {index !== 0 && <div className="mx-3"><ChevronRightIcon className="t-icon t-icon-muted t-breadcrumb-divider" /></div>}
            {item.startIcon && item.startIcon}
            <p
              className={`${index === data.length - 1 && `text-gray-900`}`}
              onClick={() => item.onClick && item.onClick()}
            >
              {item.text}
            </p>
            {item.endIcon && item.endIcon}
          </div>
        );
      })}
    </div>
  );
};
