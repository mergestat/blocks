import React from 'react';

type EmptyStateProps = {
  action?: React.ReactNode;
  text: string;
  topIcon?: React.ReactNode;
};

export const EmptyState: React.FC<
  EmptyStateProps &
  React.DetailedHTMLProps<
    React.DetailsHTMLAttributes<HTMLElement>,
    HTMLElement
  >
> = ({ action, text, topIcon }) => {
  return (
    <div className="t-center">
      {topIcon && topIcon}
      <p>{text}</p>
      {action && action}
    </div>
  );
};

