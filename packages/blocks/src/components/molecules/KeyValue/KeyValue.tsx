import React from 'react';

type KeyValueProps = {
  title: string;
  value?: string;
}

export const KeyValue: React.FC<KeyValueProps> = ({ title, value }) => {
  return (
    <div className="t-key-value">
      <h3>{title}</h3>
      {value && <p>{value}</p>}
    </div>
  )
}
