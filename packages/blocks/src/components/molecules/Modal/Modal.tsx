import { Dialog, Transition } from '@headlessui/react';
import cx from 'classnames';
import React, { Fragment } from 'react';

type ModalDialogProps = {
  open: boolean;
  onClose: (open: boolean) => void;
  initialFocus?: React.MutableRefObject<HTMLElement | null> | undefined;
  as?: React.ElementType<string> | 'div';
  unmount?: boolean;
  className?: string;
  modalWrapperClassName?: string;
  size?: string;
}

const ModalDialog: React.FC<
  ModalDialogProps &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLBaseElement>,
    HTMLBaseElement
  >
> = ({ children, onClose, open, initialFocus, unmount, as, size, className, modalWrapperClassName }) => {
  const _classname = className ? { [className]: !!className } : {}
  const _modal_classname = modalWrapperClassName ? { [modalWrapperClassName]: !!modalWrapperClassName } : {}

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as={as ?? 'div'}
        className={cx("fixed inset-0 z-10 overflow-y-auto", { ..._modal_classname })}
        onClose={onClose}
        initialFocus={initialFocus}
        unmount={unmount}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="t-modal-overlay" />
        </Transition.Child>

        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {/* modal wrapper */}
            <div className={cx('t-modal', size && `t-modal-${size}`, { ..._classname })}>
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

const ModalHeder: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLBaseElement>,
    HTMLBaseElement
  >
> = ({ children, className }) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <div className={cx('t-modal-header border-b border-gray-200', { ..._classname })}>
      {children}
    </div>
  )
}

const ModalBody: React.FC<
  Record<string, unknown> & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLBaseElement>,
    HTMLBaseElement
  >
> = ({ children, className }) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <div className={cx('t-modal-body', { ..._classname })}>
      {children}
    </div>
  )
}

const ModalFooter: React.FC<
  Record<string, unknown> & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLBaseElement>,
    HTMLBaseElement
  >
> = ({ children, className }) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <div className={cx('t-modal-footer border-t border-gray-200', { ..._classname })}>
      {children}
    </div>
  )
}

const ModalTitle: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLBaseElement>,
    HTMLBaseElement
  >
> = ({ children, className }) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <div className={cx('t-modal-title', { ..._classname })}>
      <Dialog.Title>{children}</Dialog.Title>
    </div>
  )
}

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    ModalDialogProps &
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLBaseElement>,
      HTMLBaseElement
    >
  > {
  Dialog: typeof ModalDialog;
  Header: typeof ModalHeder;
  Body: typeof ModalBody;
  Footer: typeof ModalFooter;
  Title: typeof ModalTitle;
}

export const Modal = ModalDialog as CompoundedComponent;
Modal.Dialog = ModalDialog;
Modal.Header = ModalHeder;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.Title = ModalTitle;
