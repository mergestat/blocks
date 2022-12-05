import cx from 'classnames';

type SpinnerProps = {
  size?: 'sm' | 'md';
  skin?: 'primary' | 'muted'
  className?: string;
};

export const Spinner = ({ size = 'md', skin = 'primary', className }: SpinnerProps) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <div className={cx(`t-spinner t-spinner-${size} t-spinner-${skin}`, { ..._classname })} />
  );
};
