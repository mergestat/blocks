import cx from 'classnames';
import React from 'react';

export type SizeT = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type VariantT = 'primary' | 'success' | 'warning' | 'danger';

type AvatarProps = {
  size?: SizeT;
  imageUrl?: string;
  icon?: React.ReactNode;
  variant?: VariantT;
}

export const Avatar: React.FC<
  AvatarProps &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
> = ({ size, children, imageUrl, icon, variant, className, ...props }) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <div
      {...props}
      className={cx('t-avatar', {
        ..._classname,
        [`t-avatar-${size}`]: !!size,
        't-avatar-img': !!imageUrl,
        [`t-avatar-${variant}`]: !!variant,
      })}
    >
      {icon ? (
        icon
      ) : imageUrl ? (
        <img src={imageUrl} alt="alt" />
      ) : (
        children ?? ''
      )}
    </div>
  );
}
