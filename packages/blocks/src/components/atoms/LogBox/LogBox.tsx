import { ClipboardIcon } from '@mergestat/icons';
import cx from 'classnames';
import React from 'react';
import { Button } from '../Button';

type LogBoxProps = {
  logs: Array<string | React.ReactNode>
  className?: string
  copyBtnClassName?: string
  onCopy?: () => void
}

export const LogBox: React.FC<LogBoxProps> = ({ logs, className, copyBtnClassName, onCopy }) => {
  const _classname = className ? { [className]: !!className } : {}
  const _btn_classname = copyBtnClassName ? { [copyBtnClassName]: !!copyBtnClassName } : {}

  return (
    <div className={cx("t-log-box bg-gray-800 text-gray-200 rounded-md font-mono text-xs leading-6", { ..._classname })}>
      {logs.map((log, index) => (
        <div key={index}>
          {log}
        </div>
      ))}
      {onCopy && (
        <Button
          className={cx('log-copy-btn bg-gray-700 text-gray-300 border-0', { ..._btn_classname })}
          size='small'
          skin='secondary'
          startIcon={<ClipboardIcon className="t-icon" />}
          onClick={onCopy}
        >
          Copy
        </Button>
      )}
    </div>
  )
}
