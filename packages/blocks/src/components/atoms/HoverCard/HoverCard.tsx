import { flip, offset as offsetFloating, safePolygon, shift, useClick, useDismiss, useFloating, useFocus, useHover, useInteractions } from '@floating-ui/react';
import cx from 'classnames';
import React, { cloneElement, ReactElement, useState } from 'react';

type BaseProps = {
  children?: React.ReactNode | string
  className?: string
  placement?: 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end'
  overlay: (close: () => void) => React.ReactNode
  offset?: [number, number] // default [skidding, distance]
  delay?: number,
  disableFit?: boolean,
  interaction?: 'hover' | 'click'
}

export const HoverCard = ({
  children,
  className,
  placement = 'right-start',
  overlay,
  offset = [0, 6],
  delay = 100,
  disableFit = false,
  interaction = 'hover'
}: BaseProps) => {
  const _classname = className ? { [className]: !!className } : {}

  const [isOpen, setIsOpen] = useState(false)

  const {
    context, x, y, reference, floating, strategy
  } = useFloating({
    placement,
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offsetFloating({ mainAxis: offset[1], crossAxis: offset[0] }),
      flip(),
      shift()
    ],
  })

  const { getFloatingProps, getReferenceProps } = useInteractions([
    useHover(context, { enabled: interaction === 'hover', delay: { open: delay, close: 0 }, handleClose: safePolygon() }),
    useClick(context, { enabled: interaction === 'click' }),
    useFocus(context),
    useDismiss(context)
  ]);

  return (
    <>
      <div className={cx(!disableFit ? 'w-fit' : '', { ..._classname })} ref={reference}>
        {cloneElement(
          children as ReactElement,
          getReferenceProps({ ...(children as ReactElement).props })
        )}
      </div>
      {isOpen &&
        <div
          {...getFloatingProps({
            ref: floating,
            style: {
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
              width: 'max-content',
              zIndex: 10
            }
          })}
        >
          {overlay(() => setIsOpen(!isOpen))}
        </div>}
    </>
  )
}
