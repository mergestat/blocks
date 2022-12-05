import cx from 'classnames';
import React, { RefAttributes } from 'react';

type MenuItemProps = {
  color?: string;
  text?: string | React.ReactNode;
  image?: JSX.Element;
  icon?: React.ReactElement;
  withIcon?: boolean;
  disabled?: boolean;
  active?: boolean;
  onClick?: () => void;
};

const MenuItems: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  >
> = ({ children, className }) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <ul
      className={cx('t-menu active', {
        ..._classname,
      })}
      id="mainNavId"
    >
      {children}
    </ul>
  );
};

const MenuItem: React.FC<
  MenuItemProps &
  RefAttributes<HTMLAnchorElement> &
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
> = React.forwardRef(
  (
    {
      color,
      icon,
      text,
      href,
      image,
      withIcon = false,
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
      <li className={cx('t-menu-item', { disabled })}>
        <a
          {...props}
          href={href}
          className={cx('t-menu-label cursor-pointer select-none', {
            'pl-12': !icon && withIcon,
            'bg-blue-100 pointer-events-none': active,
            ..._color,
            ..._classname,
          })}
          onClick={onClick}
          ref={ref}
        >
          {icon && icon}
          {text && <span>{text}</span>}
          {image && image}
          {/* {active && <CheckIcon className="ml-3" />} */}
        </a>
      </li>
    )
  }
)

MenuItem.defaultProps = {
  onClick: () => null,
}

const MenuDivider: React.FC<
  React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>
> = ({ className, ...props }) => {
  const _classname = className ? { [className]: !!className } : {}
  return (
    <li
      className={cx('t-menu-divider', { ..._classname })}
      role="presentation"
      {...props}
    />
  )
}

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLUListElement>,
      HTMLUListElement
    >
  > {
  Items: typeof MenuItems;
  Item: typeof MenuItem;
  Divider: typeof MenuDivider;
}

export const Menu = MenuItems as CompoundedComponent;
Menu.Item = MenuItem;
Menu.Divider = MenuDivider;
