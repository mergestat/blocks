import cx from 'classnames';
import React from 'react';

export type TextSizeT = | 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl'

const Text: React.FC<
  {
    size?: TextSizeT;
  } & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
> = ({ children, className, size = 'base', ...props }) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <div
      className={cx('font-medium', `text-${size}`, { ..._classname })}
      {...props}
    >
      {children}
    </div>
  );
}

export type TitleLevelT = 'h1' | 'h2' | 'h3' | 'h3' | 'h4' | 'h5';

export const TitleSizeLevel = {
  h1: 'lg',
  h2: 'xl',
  h3: '2xl',
  h4: '3xl',
  h5: '4xl',
} as const;

type TitleProps = {
  level?: TitleLevelT;
}

export const Title: React.FC<
  TitleProps &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
> = ({ level = 'h1', className, ...props }) => {
  const _classname = className ? { [className]: !!className } : {}

  return React.createElement(
    level,
    Object.assign(
      {
        className: cx(`font-medium text-${TitleSizeLevel[level]}`, {
          ..._classname,
        }),
      },
      props
    )
  );
}

export const Typography = { Text, Title }
