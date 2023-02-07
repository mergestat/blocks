import { CaretDownIcon } from '@mergestat/icons';
import cx from 'classnames';
import React, { LegacyRef } from 'react';
import { Dropdown } from '../../molecules/Dropdown';
import { Menu } from '../../molecules/Menu';
import { Button } from '../Button';

export type SplitButtonItemProps = {
  text?: string;
  icon?: React.ReactElement;
  className?: string;
}

export type SplitButtonProps = {
  text?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  items?: Array<SplitButtonItemProps>;
  disabled?: boolean;
  className?: string;
  menuContainerClassName?: string;
  onButtonClick?: () => void;
  onItemClick?: (index: number) => void;
}

export const SplitButton: React.FC<SplitButtonProps> = React.forwardRef(({
  text,
  startIcon,
  endIcon,
  items = [],
  disabled = false,
  className,
  onButtonClick,
  onItemClick,
  menuContainerClassName,
}, ref: LegacyRef<HTMLDivElement>) => {
  const _classname = className ? { [className]: !!className } : {}
  const _menu_classname = menuContainerClassName ? { [menuContainerClassName]: !!menuContainerClassName } : {}

  return (
    <div className={cx("t-split-button", { ..._classname })} ref={ref}>
      <Button
        skin="secondary"
        startIcon={startIcon}
        endIcon={endIcon}
        disabled={disabled} label={text || "Split button"}
        className="t-split-button-left"
        onClick={() => {
          if (!disabled && onButtonClick) onButtonClick();
        }}
      />
      <Dropdown
        alignEnd
        disabled={disabled}
        trigger={
          <Button
            skin="secondary"
            isIconOnly
            startIcon={<CaretDownIcon className="t-icon" />}
            className="t-split-button-right"
            disabled={disabled}
          />
        }
        overlay={(close: () => void) => (
          <Menu className={cx('absolute right-0', { ..._menu_classname })}>
            {items.map(({ text, icon, className }, index) => {
              const _classname = className ? { [className]: !!className } : {}
              return (
                <Menu.Item
                  key={index}
                  text={text}
                  withIcon={!!icon}
                  className={cx("whitespace-nowrap", { ..._classname })}
                  onClick={() => {
                    if (onItemClick) onItemClick(index);
                    close();
                  }}
                  icon={icon}
                />
              )
            }
            )}
          </Menu>
        )}
      />
    </div>
  )
})

SplitButton.defaultProps = {
  text: 'Split Button',
}
