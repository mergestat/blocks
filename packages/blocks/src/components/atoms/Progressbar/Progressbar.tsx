import React, { CSSProperties, HTMLAttributes } from 'react';

// to allow "--value" style property
interface CustomHTMLAttributes<T> extends HTMLAttributes<T> {
  style?: CSSProperties | undefined | Record<string, unknown>;
}

export const ProgressBarInner: React.FC<
  React.DetailedHTMLProps<CustomHTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = (props) => React.createElement('div', Object.assign({}, props));

export const Progressbar: React.FC<{ value: string }> = ({ value }) => {
  const barStyles = { '--value': value }

  return (
    <div className="t-progress-bar">
      <ProgressBarInner className="t-progress-bar-inner" style={barStyles} />
    </div>
  );
}
