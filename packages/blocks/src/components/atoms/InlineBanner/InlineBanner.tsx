import cx from 'classnames';
import React from 'react';

type InlineBannerProps = {
  className?: string;
  children?: React.ReactNode
};

export const InlineBanner: React.FC<InlineBannerProps> = ({ className, children }) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <div className={cx("p-3 bg-gray-100 text-center", { ..._classname })}>
      <p className="t-inline-banner">
        {children && children}
      </p>
    </div>
  );
};
