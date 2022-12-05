import { ViewGridIcon } from '@mergestat/icons';
import { ComponentMeta } from '@storybook/react';
import { VerticalNav } from './VerticalNav';

export default {
  title: 'Molecules/VerticalNav',
  component: VerticalNav,
  argTypes: {},
} as ComponentMeta<typeof VerticalNav>


export const Default = () => {
  return (
    <div className="w-64">
      <VerticalNav>
        <VerticalNav.Item text="Nav item" active={true} />
        <VerticalNav.Item text="Nav item" />
        <VerticalNav.Item text="Nav item" />
      </VerticalNav>
    </div>
  )
}

export const VerticalNavWithIcons = () => {
  return (
    <div className="w-64">
      <VerticalNav>
        <VerticalNav.Item
          text="Nav item"
          icon={<ViewGridIcon className="t-icon" />}
          active={true}
        />
        <VerticalNav.Item
          text="Nav item"
          icon={<ViewGridIcon className="t-icon" />}
        />
        <VerticalNav.Item
          text="Nav item"
          icon={<ViewGridIcon className="t-icon" />}
        />
        <VerticalNav.Divider />
        <VerticalNav.Item
          text="Nav item"
          icon={<ViewGridIcon className="t-icon" />}
        />
        <VerticalNav.Item
          text="Nav item disabled"
          icon={<ViewGridIcon className="t-icon" />}
          disabled={true}
        />
      </VerticalNav>
    </div>
  )
}
