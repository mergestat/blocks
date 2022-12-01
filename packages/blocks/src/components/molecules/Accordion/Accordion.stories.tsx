import { Button } from '@atoms/Button';
import { Label } from '@atoms/Label';
import { ChevronRightIcon, ClipboardIcon } from '@mergestat/icons';
import { Toolbar } from '@molecules/Toolbar/Toolbar';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Accordion } from './Accordion';

export default {
  title: 'Molecules/Accordion',
  component: Accordion,
  argTypes: {},
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Accordion Title',
  content: <div>Accordion Content</div>,
}

export const CustomSummary = () => {
  return (
    <Accordion className="t-accordion border border-gray-200 rounded">
      <Accordion.Summary className="p-3">
        <Toolbar>
          <Toolbar.Left>
            <Toolbar.Item>
              <ChevronRightIcon className="t-icon t-icon-heroicons-chevron-right" />
            </Toolbar.Item>
            <Toolbar.Item>
              <Label>Get top commit counts by author (name)</Label>
            </Toolbar.Item>
          </Toolbar.Left>
          <Toolbar.Right>
            <Toolbar.Item className="ml-3">
              <Button
                skin="secondary"
                size="small"
                startIcon={
                  <ClipboardIcon className="t-icon t-icon-heroicons-clipboard" />
                }
                type="button"
              >
                Copy
              </Button>
            </Toolbar.Item>
          </Toolbar.Right>
        </Toolbar>
      </Accordion.Summary>
      <Accordion.Details className="bg-gray-50 border-t border-gray-200 py-2 px-4">
        <pre className="text-sm language-sql">
          <code className="language-sql">
            <span className="token keyword">SELECT</span>{' '}
            <span className="token function">count</span>
            <span className="token punctuation">(</span>
            <span className="token operator">*</span>
            <span className="token punctuation">)</span>{' '}
            <span className="token keyword">AS</span> count
            <span className="token punctuation">,</span> author_name{' '}
            <span className="token keyword">FROM</span> commits{' '}
            <span className="token keyword">GROUP</span>{' '}
            <span className="token keyword">BY</span> author_name{' '}
            <span className="token keyword">ORDER</span>{' '}
            <span className="token keyword">BY</span> count{' '}
            <span className="token keyword">DESC</span>
          </code>
        </pre>
      </Accordion.Details>
    </Accordion>
  );
}
