import cx from 'classnames';
import React, { RefAttributes } from 'react';

type VerticalNavItemProps = {
  active?: boolean;
  className?: string;
  text?: string | React.ReactNode;
  icon?: React.ReactElement;
  disabled?: boolean;
  onClick?: () => void;
};

const VerticalNavItems: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  >
> = ({ children, className }) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <ul className={cx('t-vertical-nav', { ..._classname })}>
      {children}
    </ul>
  )
}

const VerticalNavItem: React.FC<
  VerticalNavItemProps &
  RefAttributes<HTMLAnchorElement> &
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
> = React.forwardRef(
  (
    {
      color,
      text,
      href,
      icon,
      disabled = false,
      active = false,
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    const _classname = className ? { [className]: !!className } : {}
    const _color = color ? { [color]: !!color } : {}

    return (
      <li className={cx('t-vertical-nav-item', {
        't-vertical-nav-item-disabled': disabled,
        't-vertical-nav-item-active': active
      })} >
        <a
          {...props}
          href={href}
          className={cx('cursor-pointer', {
            ..._color,
            ..._classname,
          })}
          onClick={onClick}
          ref={ref}
        >
          {icon && icon}
          {text && <span>{text}</span>}
        </a>
      </li>
    )
  }
)

const VerticalNavDivider: React.FC<
  React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>
> = ({ className, ...props }) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <li
      className={cx('t-vertical-nav-divider', { ..._classname })}
      role="presentation"
      {...props}
    />
  )
}


VerticalNavItem.defaultProps = {
  onClick: () => null,
}

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLUListElement>,
      HTMLUListElement
    >
  > {
  Items: typeof VerticalNavItems;
  Item: typeof VerticalNavItem;
  Divider: typeof VerticalNavDivider;
}


export const VerticalNav = VerticalNavItems as CompoundedComponent;
VerticalNav.Item = VerticalNavItem;
VerticalNav.Divider = VerticalNavDivider;
