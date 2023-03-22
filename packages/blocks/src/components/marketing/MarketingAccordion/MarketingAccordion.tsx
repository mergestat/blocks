import React, { Fragment } from 'react'
import { ChevronUpIcon, ChevronDownIcon } from '@mergestat/icons';
import { Tab } from '@headlessui/react'

type MarketingAccordionProps = {
  data: {
    title: string,
    desc?: string,
    cta?: React.ReactNode,
    content?: React.ReactNode
  }[];
};

export const MarketingAccordion: React.FC<MarketingAccordionProps & React.HTMLAttributes<HTMLElement>> = ({ data }) => {
  return (
    <Tab.Group vertical>
        <div className='t-marketing-accordion'>
          <Tab.List className='t-marketing-accordion-list'>
            <nav>
              {data.map((item, index) => {
                return (
                  <Tab
                    key={index}
                    as={Fragment}
                  >
                    {({ selected }) => (
                      <div className='t-marketing-accordion-item'>
                        <button className='t-marketing-accordion-button'>
                          <div className='t-marketing-accordion-title'>
                            <div className='flex-1'>{item.title}</div>
                            { selected ?  <ChevronUpIcon className='t-icon t-icon-muted' />
                            : <ChevronDownIcon className='t-icon t-icon-muted' />
                            }
                          </div>
                        </button>
                          { selected &&
                            <>
                              <div className='t-marketing-accordion-desc'>{item.desc}
                                <div className='mt-3'>
                                  {item.cta}
                                </div>
                              </div>
                              <div className='t-marketing-accordion-mobile-content'>{item.content}</div>
                            </>
                          }
                      </div>
                      )}
                  </Tab>
                );
              })}
            </nav>
          </Tab.List>
          <Tab.Panels className='t-marketing-accordion-panels'>
          {data.map((item, index) => {
            return (
              <Tab.Panel className='t-marketing-accordion-content' key={index}>
                {item.content}
              </Tab.Panel>
            );
          })}
          </Tab.Panels>
        </div>
      </Tab.Group>
  )
}
