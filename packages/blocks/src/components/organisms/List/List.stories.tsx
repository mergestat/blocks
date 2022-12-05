import { CalendarIcon, CircleInformationIcon } from '@mergestat/icons';
import { ComponentMeta } from '@storybook/react';
import { Button } from '../../atoms/Button';
import { ColoredBox } from '../../atoms/ColoredBox/ColoredBox';
import { HelpText } from '../../atoms/HelpText/HelpText';
import { Panel } from '../../molecules/Panel/Panel';
import { Toolbar } from '../../molecules/Toolbar/Toolbar';
import { List } from './List';

export default {
  title: 'Organisms/List',
  component: List,
  argTypes: {},
} as ComponentMeta<typeof List>;

export const ExampleStat = () => {
  return (
    <div className="p-10 bg-gray-200 flex space-x-5">
      <Panel className="w-full">
        <Panel.Header>
          <Toolbar>
            <Toolbar.Left>
              <div className="t-panel-title flex flex-row items-center justify-start">
                <div className="mr-2">Recent Contributors</div>
                <CircleInformationIcon className="text-gray-400" width="18" />
              </div>
            </Toolbar.Left>
            <Toolbar.Right>
              <div className="flex flex-row items-center justify-start">
                <HelpText className="mr-2 text-base">This Week</HelpText>
                <CalendarIcon className="text-gray-400" width="18" />
              </div>
            </Toolbar.Right>
          </Toolbar>
        </Panel.Header>
        <Panel.Body className="p-0">
          <List className="">
            <List.Item className="cursor-pointer hover_bg-gray-50">
              <ColoredBox size='10' skin="blue" isCircle className="mr-5">
                <span>WW</span>
              </ColoredBox>
              <List.Inner>
                <div className="t-label">Wade Warren</div>
                <div className="t-body-2 text-gray-500">10 minutes since last commits</div>
              </List.Inner>
            </List.Item>
            <List.Item className="cursor-pointer hover_bg-gray-50">
              <ColoredBox size='10' skin="purple" isCircle className="mr-5">
                <span>SN</span>
              </ColoredBox>
              <List.Inner>
                <div className="t-label">Savannah Nguyen</div>
                <div className="t-body-2 text-gray-500">14 minutes since last commits</div>
              </List.Inner>
            </List.Item>
            <List.Item className="cursor-pointer hover_bg-gray-50">
              <ColoredBox size='10' skin="indigo" isCircle className="mr-5">
                <span>CH</span>
              </ColoredBox>
              <List.Inner>
                <div className="t-label">Courtney Henry</div>
                <div className="t-body-2 text-gray-500">1 hour since last commits</div>
              </List.Inner>
            </List.Item>
            <List.Item className="cursor-pointer hover_bg-gray-50">
              <ColoredBox size='10' skin="yellow" isCircle className="mr-5">
                <span>CF</span>
              </ColoredBox>
              <List.Inner>
                <div className="t-label">Cody Fisher</div>
                <div className="t-body-2 text-gray-500">3 hour since last commits</div>
              </List.Inner>
            </List.Item>
            <List.Item className="cursor-pointer hover_bg-gray-50">
              <ColoredBox size='10' skin="aqua" isCircle className="mr-5">
                <span>RF</span>
              </ColoredBox>
              <div className="w-full py-3">
                <div className="t-label">Robert Fox</div>
                <div className="t-body-2 text-gray-500">1 day since last commits</div>
              </div>
            </List.Item>
          </List>
        </Panel.Body>
        <Panel.Footer>
          <Button
            skin="borderless"
            onClick={() => console.log('Save button clicked')}
          >
            View More
          </Button>
        </Panel.Footer>
      </Panel>
    </div>
  );
};
