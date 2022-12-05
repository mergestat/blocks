import cx from 'classnames';
import React, { useState } from 'react';

type ToggleProps = {
  isChecked: boolean;
  onChange: (p: boolean) => void;
}

export const Toggle: React.FC<ToggleProps> = ({ isChecked, onChange }) => {
  const [check, setCheck] = useState(isChecked)

  return (
    <div
      className={cx('t-toggle-container', check && 't-active')}
      onClick={() => {
        setCheck(!check);
        onChange(!check);
      }}
    >
      <div className="t-toggle" />
    </div>
  )
}
