import React from 'react';
import cx from 'classnames';

type MarketingCodeBoxProps = {
  direction?: 'left' | 'right'
}

export const MarketingHighlight: React.FC<MarketingCodeBoxProps &
  React.DetailedHTMLProps<
    React.DetailsHTMLAttributes<HTMLElement>,
    HTMLElement
  >
> = ({ direction = 'right', children }) => {
  return (
    <div className={cx('t-marketing-highlight', `t-marketing-highlight-${direction}`)}>
      {children}
    </div>
  );
};

