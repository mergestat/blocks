import { CaretDownIcon } from '@mergestat/icons';
import React from 'react';
import { Tag } from './Tag';

type FilterProps = {
  closable?: boolean;
  onLabel?: () => void;
  children?: React.ReactNode;
};

export const Filter: React.FC<FilterProps> = ({
  closable = false,
  children,
  onLabel,
}) => {
  return (
    <div>
      {closable ? (
        <Tag skin="blue" onClick={onLabel} onClose={() => null}>
          {children || 'Filter label'}
        </Tag>
      ) : (
        <Tag skin="gray" onClick={onLabel}>
          <span>{children || 'Filter label'}</span>
          <CaretDownIcon className="t-icon" />
        </Tag>
      )}
    </div>
  );
};
