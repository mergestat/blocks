import { ChevronRightIcon } from '@mergestat/icons';
import { ComponentMeta } from '@storybook/react';
import { Button } from '../../atoms/Button';
import { MarketingCodeBox } from '../MarketingCodeBox/MarketingCodeBox';
import { MarketingHighlight } from '../MarketingHighlight/MarketingHighlight';
import { MarketingAccordion } from './MarketingAccordion';
import sampleImage from '../../../../public/sample-image.png';

export default {
  title: 'Marketing/MarketingAccordion',
  component: MarketingAccordion,
  argTypes: {},
} as ComponentMeta<typeof MarketingAccordion>;

export const ExampleMarketingAccordion = () => {
  return (
    <MarketingAccordion>
      <MarketingAccordion.List>
        <MarketingAccordion.Item
          title='Audit and Compliance'
          desc={
            <>
              <p>Lorem ipsum dolor sit amet consectetur. Vel malesuada scelerisque mauris fermentum imperdiet convallis turpis.</p>
              <Button skin='borderless' label='Read More' endIcon={<ChevronRightIcon className='t-icon'/>} />
            </>
          } />
        <MarketingAccordion.Item
          title='Audit and Compliance'
          desc={
            <>
              <p>Lorem ipsum dolor sit amet consectetur. Vel malesuada scelerisque mauris fermentum imperdiet convallis turpis.</p>
              <Button skin='borderless' label='Read More' endIcon={<ChevronRightIcon className='t-icon'/>} />
            </>
          } />
        <MarketingAccordion.Item
          title='Audit and Compliance'
          desc={
            <>
              <p>Lorem ipsum dolor sit amet consectetur. Vel malesuada scelerisque mauris fermentum imperdiet convallis turpis.</p>
              <Button skin='borderless' label='Read More' endIcon={<ChevronRightIcon className='t-icon'/>} />
            </>
          } />
      </MarketingAccordion.List>
      <MarketingAccordion.Panels>
        <MarketingAccordion.Panel className="py-6">
          <MarketingHighlight>What are the most common vulnerabilities?</MarketingHighlight>
          <MarketingCodeBox
          code={`SELECT repo, count(*) FROM trivy_repo_vulnerabilities
JOIN repos ON trivy_repo_vulnerabilities.repo_id = repos.id
GROUP BY type
ORDER BY count(*) DESC`}
          />
          <div className='shadow-sm'>
            <img src={sampleImage} alt="alt" />
          </div>
        </MarketingAccordion.Panel>
        <MarketingAccordion.Panel className="py-6">
          <MarketingHighlight>This is a sample question?</MarketingHighlight>
          <MarketingCodeBox
          code={`SELECT repo, count(*) FROM trivy_repo_vulnerabilities
JOIN repos ON trivy_repo_vulnerabilities.repo_id = repos.id
GROUP BY type
ORDER BY count(*) DESC`}
          />
        </MarketingAccordion.Panel>
        <MarketingAccordion.Panel className="py-6">
          <MarketingHighlight>This is another question?</MarketingHighlight>
          <div className='shadow-sm'>
            <img src={sampleImage} alt="alt" />
          </div>
        </MarketingAccordion.Panel>
      </MarketingAccordion.Panels>
    </MarketingAccordion>
  );
};
