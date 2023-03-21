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

const data = [
  {
    title: 'First item',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros, suspendisse eu lobortis ut tempus hendrerit pellentesque amet.',
    href: 'https://docs.mergestat.com/',
    cta: <Button component='a' skin='borderless' label='Learn More' endIcon={<ChevronRightIcon className='t-icon'/>} href='https://docs.mergestat.com/' />,
    content:
      <>
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
      </>
  },
  {
    title: 'Second item',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros, suspendisse eu lobortis ut tempus hendrerit pellentesque amet.',
    cta: <Button component='a' skin='borderless' label='Learn More' endIcon={<ChevronRightIcon className='t-icon'/>} href='https://docs.mergestat.com/' />,
    content:
      <>
        <MarketingHighlight>What are the most common vulnerabilities?</MarketingHighlight>
        <MarketingCodeBox
        code={`SELECT repo, count(*) FROM trivy_repo_vulnerabilities
JOIN repos ON trivy_repo_vulnerabilities.repo_id = repos.id
GROUP BY type
ORDER BY count(*) DESC`}
        />
      </>
  },
  {
    title: 'Third item',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros, suspendisse eu lobortis ut tempus hendrerit pellentesque amet.',
    content:
      <>
        <MarketingHighlight>What are the most common vulnerabilities?</MarketingHighlight>
        <div className='shadow-sm'>
          <img src={sampleImage} alt="alt" />
        </div>
      </>
  },
  {
    title: 'Fourth item',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros, suspendisse eu lobortis ut tempus hendrerit pellentesque amet.',
    cta: <Button component='a' skin='borderless' label='Learn More' endIcon={<ChevronRightIcon className='t-icon'/>} href='https://docs.mergestat.com/' />,
    content:
      <>
        <MarketingHighlight>What are the most common vulnerabilities?</MarketingHighlight>
        <div className='shadow-sm'>
          <img src={sampleImage} alt="alt" />
        </div>
      </>
  },
  {
    title: 'Fifth item',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros, suspendisse eu lobortis ut tempus hendrerit pellentesque amet.',
    cta: <Button component='a' skin='borderless' label='Learn More' endIcon={<ChevronRightIcon className='t-icon'/>} href='https://docs.mergestat.com/' />,
    content:
      <>
        <MarketingHighlight>What are the most common vulnerabilities?</MarketingHighlight>
        <div className='shadow-sm'>
          <img src={sampleImage} alt="alt" />
        </div>
      </>
  },
  {
    title: 'Sixth item',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros, suspendisse eu lobortis ut tempus hendrerit pellentesque amet.',
    content:
      <>
        <MarketingHighlight>What are the most common vulnerabilities?</MarketingHighlight>
        <div className='shadow-sm'>
          <img src={sampleImage} alt="alt" />
        </div>
      </>
  },
  {
    title: 'Seventh item',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros, suspendisse eu lobortis ut tempus hendrerit pellentesque amet.',
    cta: <Button component='a' skin='borderless' label='Learn More' endIcon={<ChevronRightIcon className='t-icon'/>} href='https://docs.mergestat.com/' />,
    content:
      <>
        <MarketingHighlight>What are the most common vulnerabilities?</MarketingHighlight>
        <div className='shadow-sm'>
          <img src={sampleImage} alt="alt" />
        </div>
      </>
  },
  {
    title: 'Eighth item',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros, suspendisse eu lobortis ut tempus hendrerit pellentesque amet.',
    content:
      <>
        <MarketingHighlight>What are the most common vulnerabilities?</MarketingHighlight>
        <div className='shadow-sm'>
          <img src={sampleImage} alt="alt" />
        </div>
      </>
  }
]
export const ExampleMarketingAccordion = () => {
  return (
    <MarketingAccordion data={data} />
  );
};
