import cx from 'classnames';
import React, { RefAttributes } from 'react';

const NavItems: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  >
> = ({ className, ...props }) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <div className={cx('t-nav', { ..._classname })}>
      {props?.children}
    </div>
  );
}

type NavItemProps = {
  href?: string
  text?: string | React.ReactNode
  label?: string
  icon?: React.ReactElement
  image?: React.ReactElement
  onClick?: () => void
  className?: string
  children?: React.ReactNode
}

const NavItem: React.FC<
  NavItemProps &
  RefAttributes<HTMLAnchorElement> &
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
> = React.forwardRef(
  (
    { label, text, image, icon, onClick, href, className, children, ...props },
    ref
  ) => {
    const _classname = className ? { [className]: !!className } : {}

    return (
      <div className={cx('t-nav-item', { ..._classname })}>
        {children ? children :
          <a
            {...props}
            href={href}
            data-menu="mainNavId"
            aria-expanded="false"
            onClick={onClick}
            ref={ref}
          >
            {image && image}
            {text && (
              <div className="flex flex-col mr-2">
                {label && <span className="text-sm text-gray-400">{label}</span>}
                <span>{text}</span>
              </div>
            )}
            {icon && icon}
          </a>
        }
      </div>
    );
  }
);

const NavDivider: React.FC = (props) => {
  return <div className="t-nav-divider" role="presentation" {...props} />;
}

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLUListElement>,
      HTMLUListElement
    >
  > {
  Items: typeof NavItems;
  Item: typeof NavItem;
  Divider: typeof NavDivider;
}

export const Navbar = NavItems as CompoundedComponent;
Navbar.Items = NavItems;
Navbar.Item = NavItem;
Navbar.Divider = NavDivider;
