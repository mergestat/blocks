import cx from 'classnames'
import React, { useState } from 'react'
import { Dropdown as RoDropdown, useDropdownMenu, useDropdownToggle } from 'react-overlays'
import type { DropDirection } from 'react-overlays/DropdownContext'

type DropdownZIndex = 0 | 10 | 20 | 30 | 40 | 50 | 'auto' | undefined

type DropdownProps = {
  alignEnd?: boolean
  trigger: React.ReactNode
  role?: string
  drop?: DropDirection
  disabled?: boolean
  zIndex?: DropdownZIndex
  onClickToOpen?: () => void
  onClickToClose?: () => void
  overlay: (close: () => void) => React.ReactNode
}

type DropdownToggleProps = {
  id: string
  disabled: boolean
  children?: React.ReactNode
  onClickToOpen?: () => void
  onClickToClose?: () => void
}

const DropdownContent: React.FC<
  {
    overlay: () => React.ReactNode
    zIndex: DropdownZIndex
  } & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >
> = ({ overlay, zIndex }) => {
  const [props, { show }] = useDropdownMenu({ flip: true })

  return (
    <div {...props} className={cx('absolute flex-col', show ? 'flex' : 'hidden', zIndex ? `z-${zIndex}` : 'z-10')}>
      {show && overlay()}
    </div>
  )
}

const DropdownToggle: React.FC<DropdownToggleProps> = ({ id, disabled, children, onClickToOpen, onClickToClose }) => {
  const [{ onClick, ...props }, { toggle, show }] = useDropdownToggle()

  return (
    <div
      {...props}
      id={id}
      className={cx('h-full')}
      {...(!disabled && {
        onClick: (event) => {
          onClick(event)
          toggle(!show)
          !show && onClickToOpen && onClickToOpen()
          show && onClickToClose && onClickToClose()
        },
      })}
    >
      {children}
    </div>
  )
}

export const Dropdown: React.FC<DropdownProps> = ({
  alignEnd,
  role,
  drop = 'down',
  trigger,
  overlay,
  onClickToOpen,
  onClickToClose,
  disabled = false,
  zIndex,
}) => {
  const [show, setShow] = useState(false)

  const dropdownToggle = () => setShow(!show)

  return (
    <RoDropdown
      show={show}
      onToggle={setShow}
      drop={drop}
      alignEnd={alignEnd}
      itemSelector="button:not(:disabled)"
      children={
        <>
          <DropdownToggle id="dropdown-toggle"
            disabled={disabled}
            onClickToOpen={onClickToOpen}
            onClickToClose={onClickToClose}
          >
            {trigger}
          </DropdownToggle>
          <DropdownContent
            role={role}
            overlay={() => overlay(dropdownToggle)}
            zIndex={zIndex}
          />
        </>
      }
    />
  )
}
