import { ComponentMeta } from '@storybook/react';
import { MarketingCodeBox } from './MarketingCodeBox';

export default {
  title: 'Marketing/MarketingCodeBox',
  component: MarketingCodeBox,
  argTypes: {},
} as ComponentMeta<typeof MarketingCodeBox>;

export const ExampleMarketingCodeBox = () => {
  return (
    <MarketingCodeBox
    code={`SELECT repo, count(*) FROM trivy_repo_vulnerabilities
JOIN repos ON trivy_repo_vulnerabilities.repo_id = repos.id
GROUP BY type
ORDER BY count(*) DESC
    `} />


  );
};
