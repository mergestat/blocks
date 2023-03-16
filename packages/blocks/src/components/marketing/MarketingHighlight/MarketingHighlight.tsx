import React from 'react';

export const MarketingHighlight: React.FC<
  React.DetailedHTMLProps<
    React.DetailsHTMLAttributes<HTMLElement>,
    HTMLElement
  >
> = ({ children }) => {
  return (
    <div className="t-marketing-highlight">
      {children}
    </div>
  );
};

