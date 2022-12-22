import cx from 'classnames';
import React from 'react';
import useTooltip from '../../hooks/useTooltip';
import { TooltipBox } from '../Tooltip/TooltipBox';
import type { ButtonBaseProps, ButtonProps } from './types';

export const Button: React.FC<ButtonProps & ButtonBaseProps> = (
  ({
    children,
    skin,
    isBlock,
    isIconOnly,
    startIcon,
    endIcon,
    size,
    label,
    onClick,
    className,
    type,
    isActive = false,
    tooltip,
    tooltipOffset,
    tooltipPlacement = 'top',
    tooltipDelay = 100,
    ...props
  }) => {
    const getButtonSkin = (skin: string) => {
      switch (skin) {
        case 'primary':
          return 't-button-primary';

        case 'secondary':
          return 't-button-secondary';

        case 'danger-primary':
          return 't-button-danger-primary';

        case 'danger':
          return 't-button-danger';

        case 'borderless':
          return 't-button-borderless';

        case 'borderless-muted':
          return 't-button-borderless-muted';

        case 'borderless-i':
          return 't-button-borderless-i';

        case 'borderless-danger':
          return 't-button-borderless-danger';

        default:
          return 't-button-primary';
      }
    }

    const getButtonActive = (skin: string) => {
      switch (skin) {
        case 'primary':
          return 't-button-active from-blue-700 to-blue-700';

        case 'secondary':
        case 'danger':
          return 't-button-active from-gray-200';

        case 'danger-primary':
          return 't-button-active from-red-700 to-red-700';

        default:
          return 't-button-active';
      }
    }

    const _classname = className ? { [className]: !!className } : {}

    const tooltipBoxProps = useTooltip(tooltipPlacement, tooltipOffset || [0, 10], tooltipDelay)

    const MainComp = (
      <button
        {...props}
        ref={tooltipBoxProps.reference}
        onClick={onClick}
        className={cx(
          't-button',
          getButtonSkin(skin ?? 'primary'),
          {
            't-button-icon': isIconOnly,
            't-button-block': isBlock,
            [getButtonActive(skin ?? 'primary')]: isActive,
            't-button-disabled': props.disabled,
            ..._classname
          },
          size && `t-button-${size}`
        )}
        type={type || 'button'}
      >
        {startIcon && startIcon}
        {(children || label) && (
          <span>
            {children ? children : label ? label : ''}
          </span>
        )}
        {endIcon && endIcon}
      </button>
    )

    return tooltip ? (
      <>
        {props.disabled ? (
          <div
            ref={tooltipBoxProps.reference}
            className={cx(
              't-button t-button-disabled pointer-events-auto cursor-default bg-gray-100',
              {
                't-button-icon': isIconOnly,
                't-button-block': isBlock,
                ..._classname,
              },
              size && `t-button-${size}`
            )}
          >
            {startIcon && startIcon}
            {(children || label) && (
              <span>
                {children ? children : label ? label : ''}
              </span>
            )}
            {endIcon && endIcon}
          </div>
        ) : (
          MainComp
        )}
        {tooltipBoxProps.isOpen && <TooltipBox content={tooltip} {...tooltipBoxProps} />}
      </>
    ) : (
      MainComp
    )
  }
)

Button.defaultProps = {
  skin: 'primary',
  isIconOnly: false,
  isBlock: false,
}

export const ButtonGroup: React.FC<
  Record<string, unknown> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
> = ({ className, children, ...props }) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <div
      className={cx('t-button-group', { ..._classname })}
      {...props}
    >
      {children}
    </div>
  )
}
