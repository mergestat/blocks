import { createPopper, Instance } from '@popperjs/core';
import cx from 'classnames';
import React, { useEffect, useId, useState } from 'react';

type BaseProps = {
  children?: React.ReactNode | string
  className?: string
  placement?: 'top' | 'bottom' | 'right' | 'left'
  content: React.ReactNode | string
  offset?: [number, number] // default [skidding, distance]
}

export const Tooltip = ({
  children,
  className,
  placement = 'top',
  content,
  offset = [0, 20],
}: BaseProps) => {
  const [popperInstance, setPopperInstance] = useState<Instance>()
  const [tooltipElement, setTooltipElement] = useState<HTMLElement>()

  const _classname = className ? { [className]: !!className } : {}

  const idElement = useId()
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
    const element = document.getElementById(idElement)
    const tooltipElement = document.getElementById(idTooltip) as HTMLElement

    if (element && tooltipElement) {
      setTooltipElement(tooltipElement)

      setPopperInstance(createPopper(element, tooltipElement, {
        placement,
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: offset || [0, 10],
            },
          },
        ],
      }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <span
        id={idElement}
        className={cx({ ..._classname })}
        aria-describedby="tooltip"
        onMouseEnter={show}
        onFocus={show}
        onMouseLeave={hide}
        onBlur={hide}
      >
        {children}
      </span>
      <div id={idTooltip} className='tooltip' role="tooltip">
        {content}
        <div id={idArrow} className='arrow' data-popper-arrow></div>
      </div>
    </>
  )
}
