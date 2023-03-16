import { ComponentMeta } from '@storybook/react';
import { MarketingHighlight } from './MarketingHighlight';

export default {
  title: 'Marketing/MarketingHighlight',
  component: MarketingHighlight,
  argTypes: {},
} as ComponentMeta<typeof MarketingHighlight>;

export const ExampleMarketingHighlight = () => {
  return (
    <MarketingHighlight>
      What are the most common vulnerabilities?
    </MarketingHighlight>

  );
};
