import { XIcon } from '@mergestat/icons';
import cx from 'classnames';
import React, { useState } from 'react';

type TagProps = {
  skin?: 'gray' | 'blue'
  onClose?: () => void
  onClick?: () => void
  children?: React.ReactNode
}

export const Tag: React.FC<TagProps> = ({
  onClose,
  onClick,
  children,
  skin,
}) => {
  const [visible, setVisible] = useState<boolean>(true);

  const getButtonSkin = (skin: string) => {
    switch (skin) {
      case 'gray':
        return 't-tag-gray';

      case 'blue':
        return 't-tag-blue';

      default:
        return 't-tag-gray';
    }
  };

  if (!visible) return null;

  if (onClose) {
    return (
      <div className="t-tag-group">
        <div
          className={cx('t-tag', getButtonSkin(skin ?? 'primary'))}
          onClick={onClick}
        >
          {children || 'Filter label'}
        </div>
        <div
          className={cx('t-tag t-tag-icon px-1.5', getButtonSkin(skin ?? 'primary'))}
          onClick={() => {
            setVisible(false);
            onClose();
          }}
        >
          <XIcon className="t-icon" />
        </div>
      </div>
    )
  }

  return (
    <div
      className={cx('t-tag', getButtonSkin(skin ?? 'primary'))}
      onClick={onClick}
    >
      {children || 'Filter label'}
    </div>
  );
};
