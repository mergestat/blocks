import { createPopper, Instance } from '@popperjs/core';
import cx from 'classnames';
import React, { useEffect, useId, useState } from 'react';
import type { ButtonBaseProps, ButtonProps } from './types';

export const Button: React.FC<ButtonProps & ButtonBaseProps> = React.forwardRef(
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
    ...props
  }, ref) => {
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

    const [popperInstance, setPopperInstance] = useState<Instance>()
    const [tooltipElement, setTooltipElement] = useState<HTMLElement>()

    const idButton = useId()
    const idTooltip = useId()
    const idArrow = useId()

    const show = () => {
      tooltipElement && tooltipElement.setAttribute('data-show', '')
      popperInstance && popperInstance.update();
    }

    const hide = () => {
      tooltipElement && tooltipElement.removeAttribute('data-show')
    }

    useEffect(() => {
      const buttonElement = document.getElementById(idButton)
      const tooltipElement = document.getElementById(idTooltip) as HTMLElement

      if (buttonElement && tooltipElement) {
        setTooltipElement(tooltipElement)

        setPopperInstance(createPopper(buttonElement, tooltipElement, {
          placement: tooltipPlacement,
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: tooltipOffset || [0, 10],
              },
            },
          ],
        }))
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const MainComp = (
      <button
        {...props}
        id={idButton}
        ref={ref as React.LegacyRef<HTMLButtonElement>}
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
        aria-describedby="tooltip"
        onMouseEnter={show}
        onFocus={show}
        onMouseLeave={hide}
        onBlur={hide}
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
            id={idButton}
            ref={ref as React.LegacyRef<HTMLDivElement>}
            className={cx(
              't-button t-button-disabled pointer-events-auto cursor-default bg-gray-100',
              {
                't-button-icon': isIconOnly,
                't-button-block': isBlock,
                ..._classname,
              },
              size && `t-button-${size}`
            )}
            aria-describedby="tooltip"
            onMouseEnter={show}
            onFocus={show}
            onMouseLeave={hide}
            onBlur={hide}
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
        <div id={idTooltip} className='tooltip' role="tooltip">
          {tooltip}
          <div id={idArrow} className='arrow' data-popper-arrow></div>
        </div>
      </>
    ) : (
      MainComp
    );
  }
);

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
  );
}
