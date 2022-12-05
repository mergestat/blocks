import cx from 'classnames';
import Notification from 'rc-notification';
import { NotificationInstance as RCNotificationInstance } from 'rc-notification/lib/Notification';
import React from 'react';
import { Alert } from './Alert';

const defaultDuration = 4.5;
const defaultType = 'info';
const defaultTheme = 'dark';
const defaultPosition = 'bottom'

export type AlertType = 'warning' | 'info' | 'success' | 'error'

export interface ArgsProps {
  title?: React.ReactNode | string;
  message: React.ReactNode | string;
  key?: string;
  onClose?: () => void;
  duration?: number | null;
  type?: AlertType;
  position?: 'top' | 'bottom';
  theme?: 'dark' | 'light';
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
  getContainer?: () => HTMLElement;
  closeIcon?: React.ReactNode;
}

const notificationInstance: {
  [key: string]: Promise<RCNotificationInstance>;
} = {}

const getNotificationInstance = (
  args: ArgsProps,
  callback: (info: { instance: RCNotificationInstance }) => void
) => {
  const { getContainer, closeIcon, className, position } = args;

  const getPosition = position === undefined ? defaultPosition : position;

  const prefixCls = 't-notification';
  const cacheKey = `${prefixCls}-top-left`;
  const cacheInstance = notificationInstance[cacheKey];

  if (cacheInstance) {
    Promise.resolve(cacheInstance).then((instance) =>
      callback({ instance: instance })
    );
  } else {
    const getCloseIcon = (
      <div className={cx(`t-icon`, `${prefixCls}-close-x cursor-pointer`)}>
        {closeIcon ?? (
          <svg
            className={`${prefixCls}-close-icon`}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
              fill="currentColor"
            />
          </svg>
        )}
      </div>
    );

    const alertClass = cx(`t-alert-stack space-y-2`, {
      [`${className}`]: className,
    });

    notificationInstance[cacheKey] = new Promise((resolve) => {
      Notification.newInstance(
        {
          prefixCls,
          className: alertClass,
          getContainer,
          closeIcon: getCloseIcon,
          maxCount: 5,
          style: {
            right: '24px',
            top: getPosition === 'top' ? '24px' : '',
            bottom: getPosition === 'bottom' ? '24px' : ''
          },
        },
        (notification) => {
          resolve(notification);
          callback({
            instance: notification,
          });
        }
      );
    });
  }
}

const getRCNoticeProps = (args: ArgsProps) => {
  const {
    duration: durationArg,
    type,
    theme,
    title,
    message,
    onClose,
    onClick,
    key,
    style,
    className
  } = args;

  const getTheme = theme === undefined ? defaultTheme : theme;
  const getType = type === undefined ? defaultType : type;
  const duration = durationArg === undefined ? defaultDuration : durationArg;

  return {
    content: (
      <Alert
        theme={getTheme}
        type={getType}
        onClose={onClose}
        closable={false}
        title={title}
      >
        {message}
      </Alert>
    ),
    duration,
    closable: true,
    onClose,
    onClick,
    noticeKey: key,
    style: style || {},
    className: cx(className),
  }
}

const notice = (args: ArgsProps) => {
  getNotificationInstance(args, ({ instance }) =>
    instance.notice(getRCNoticeProps(args))
  );
}

const api: Partial<NotificationApi> = {
  open: notice,
  close(key: string) {
    Object.keys(notificationInstance).forEach((cacheKey) =>
      Promise.resolve(notificationInstance[cacheKey]).then((instance) => {
        instance.removeNotice(key);
      })
    );
  },
  destroy() {
    Object.keys(notificationInstance).forEach((cacheKey) => {
      Promise.resolve(notificationInstance[cacheKey]).then((instance) => {
        instance.destroy();
      });
      delete notificationInstance[cacheKey]; // lgtm[js/missing-await]
    });
  },
};

const alertTypes = ['success', 'info', 'warning', 'error'] as const;

alertTypes.forEach((type: AlertType) => {
  api[type] = (args: ArgsProps) => api.open && api.open({ ...args, type })
})

api.warn = api.warning;

// --- type and interface ---//

export interface NotificationInstance {
  success(args: ArgsProps): void;
  error(args: ArgsProps): void;
  info(args: ArgsProps): void;
  warning(args: ArgsProps): void;
  open(args: ArgsProps): void;
}

export interface NotificationApi extends NotificationInstance {
  warn(args: ArgsProps): void;
  close(key: string): void;
  destroy(): void;
}

export const alertStack = api as NotificationApi;
