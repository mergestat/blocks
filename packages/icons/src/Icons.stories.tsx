import { ComponentMeta } from '@storybook/react';
import * as ListIcons from './';
import Github from './icons/Github';

export default {
  title: `Components/Icons`,
  parameters: {},
} as ComponentMeta<typeof Github>;

const Template = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: 'repeat(3,minmax(0,1fr))',
        gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      }}
    >
      {Object.entries(ListIcons).map(([name, value], idx) => {
        const IconComponent = value
        return (
          <div
            key={idx + Math.round(1994)}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              border: '1px #ddd solid',
              borderRadius: '3px',
              padding: '2rem',
            }}
          >
            <IconComponent width={20} />
            <span style={{ paddingTop: '5px', fontFamily: 'sans-serif' }}>
              {name}
            </span>
          </div>
        )
      })}
    </div>
  );
};

export const All = Template.bind({});
