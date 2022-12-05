import { CircleInformationIcon, ClockIcon, DocumentTextIcon, UsersIcon } from '@mergestat/icons';
import { ComponentMeta } from '@storybook/react';
import { ColoredBox } from '../../atoms/ColoredBox';
import { Stat } from './Stat';

export default {
  title: 'Molecules/Stat',
  component: Stat,
  argTypes: {},
} as ComponentMeta<typeof Stat>;

export const ExampleStat = () => {
  return (
    <div className="p-10 bg-gray-200 flex space-x-5">
      <Stat className="w-1/2">
        <Stat.Left>
          {/* Label */}
          <Stat.Label>
            <span className="pr-1.5">Time since last commit</span>

            <CircleInformationIcon className="t-icon t-icon-muted" />
          </Stat.Label>

          {/* Number */}
          <Stat.Number>5 Days</Stat.Number>
        </Stat.Left>

        <Stat.Right>
          <ColoredBox
            size='16'
            className="bg-red-100"
            children={<ClockIcon className="t-icon text-red-500" />}
          />
        </Stat.Right>
      </Stat>
      <Stat className="w-1/2">
        <Stat.Left>
          {/* Label */}
          <Stat.Label>
            <span className="pr-1.5">Number of contributors</span>

            <CircleInformationIcon className="t-icon t-icon-muted" />
          </Stat.Label>

          {/* Number */}
          <Stat.Number>25</Stat.Number>
        </Stat.Left>

        <Stat.Right>
          {/* Icon */}
          <ColoredBox
            size='16'
            className="bg-blue-100"
            children={<UsersIcon className="t-icon text-blue-500" />}
          />
        </Stat.Right>
      </Stat>

      <Stat className="w-1/2">
        <Stat.Left>
          {/* Label */}
          <Stat.Label>
            <span className="pr-1.5">Number of files modified</span>

            <CircleInformationIcon className="t-icon t-icon-muted" />
          </Stat.Label>

          {/* Number */}
          <Stat.Number>128</Stat.Number>
        </Stat.Left>

        <Stat.Right>
          {/* Icon */}
          <ColoredBox
            size='16'
            className="bg-yellow-100"
            children={
              <DocumentTextIcon className="t-icon text-yellow-600" />
            }
          />
        </Stat.Right>
      </Stat>
    </div>
  )
}
