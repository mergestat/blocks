import cx from 'classnames';
import React, { useState } from 'react';
import { Dropdown as RoDropdown, useDropdownMenu, useDropdownToggle } from 'react-overlays';
import type { DropDirection } from 'react-overlays/DropdownContext';

type DropdownProps = {
  alignEnd?: boolean
  trigger: React.ReactNode
  role?: string
  drop?: DropDirection
  disabled?: boolean
  zIndex?: number
  overlay: (close: () => void) => React.ReactNode
}

type DropdownToggleProps = {
  id: string
  disabled: boolean
  children?: React.ReactNode
}

const DropdownContent: React.FC<
  {
    overlay: () => React.ReactNode;
    zIndex: number;
  } & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >
> = ({ overlay, zIndex }) => {
  const [props, { show }] = useDropdownMenu({ flip: true, offset: [0, 8] })

  return (
    <div {...props} className={cx('absolute flex-col', show ? 'flex' : 'hidden', { 'z-index': zIndex })}>
      {overlay()}
    </div>
  );
}

const DropdownToggle: React.FC<DropdownToggleProps> = ({ id, disabled, children }) => {
  const [{ onClick, ...props }, { toggle, show }] = useDropdownToggle();

  return (
    <div
      {...props}
      id={id}
      className={cx('h-full')}
      {...(!disabled && {
        onClick: (event) => {
          onClick(event);
          toggle(!show);
        },
      })}
    >
      {children}
    </div>
  );
};

export const Dropdown: React.FC<DropdownProps> = ({
  alignEnd,
  role,
  drop = 'down',
  trigger,
  overlay,
  disabled = false,
  zIndex = 9,
}) => {
  const [show, setShow] = useState(false);

  const dropdownToggle = () => setShow(!show);

  return (
    <RoDropdown
      show={show}
      onToggle={setShow}
      drop={drop}
      alignEnd={alignEnd}
      itemSelector="button:not(:disabled)"
      children={
        <>
          <DropdownToggle id="dropdown-toggle" disabled={disabled}>
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
  );
}
