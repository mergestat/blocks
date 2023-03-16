import React from 'react'
import { ChevronUpIcon, ChevronDownIcon } from '@mergestat/icons';
import cx from 'classnames';
import { Tab } from '@headlessui/react'

type MarketingAccordionGroupProps = {
  title?: string,
  children?: React.ReactNode
}

type MarketingAccordionItemProps = {
  title?: string,
  desc?: React.ReactNode
  children?: React.ReactNode
}

const MarketingAccordionGroup: React.FC<MarketingAccordionGroupProps & React.HTMLAttributes<HTMLElement>> = ({ children }) => {
  return (
    <Tab.Group vertical>
      <div className='t-marketing-accordion'>
        {React.Children.map(children, child => {
          return React.cloneElement(child as React.ReactElement)
        })}
      </div>
    </Tab.Group>
  )
}

const MarketingAccordionList: React.FC<Record<string, unknown> & React.HTMLAttributes<HTMLElement>> = ({
  className,
  variant,
  children,
  ...props
}) => {
  return (
    <Tab.List
      className='t-marketing-accordion-list'
      {...props}
    >
      <nav>
        {React.Children.map(children, child => {
          return React.cloneElement(child as React.ReactElement, { variant })
        })}
      </nav>
    </Tab.List>
  )
}

const MarketingAccordionItem: React.FC<MarketingAccordionItemProps & React.HTMLAttributes<HTMLElement>> = ({
  className,
  title,
  desc,
  children,
  ...props
}) => {
  return (
    <Tab
      {...props}
      className={({ selected, }) =>
        cx('t-marketing-accordion-item', {
          active: selected,
        })
      }
    >
      {({ selected }) => (
        <>
          <div className='t-marketing-accordion-title'>
            <div className='flex-1'>{title}</div>
            { selected ?  <ChevronUpIcon className='t-icon t-icon-default' />
            : <ChevronDownIcon className='t-icon t-icon-default' />
            }
          </div>
          { selected &&
            <div className='t-marketing-accordion-desc'>{desc}</div>
          }
        </>

      )}
    </Tab>
  )
}

const MarketingAccordionPanels: React.FC<Record<string, unknown> & React.HTMLAttributes<HTMLElement>> =
  ({ className, children, ...props }) => {
    const _classname = className ? { [className]: !!className } : {}

    return (
      <Tab.Panels {...props} className={cx('t-marketing-accordion-panels', { ..._classname })}>
        {children}
      </Tab.Panels>
    )
  }

const MarketingAccordionPanel: React.FC<Record<string, unknown> & React.HTMLAttributes<HTMLElement>> = ({
  className,
  children,
  ...props
}) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <Tab.Panel {...props} className={cx('t-marketing-accordion-panel', { ..._classname })}>
      {children}
    </Tab.Panel>
  )
}

interface CompoundedComponent extends React.ForwardRefExoticComponent<MarketingAccordionGroupProps> {
  List: typeof MarketingAccordionList;
  Item: typeof MarketingAccordionItem;
  Panels: typeof MarketingAccordionPanels;
  Panel: typeof MarketingAccordionPanel;
}

export const MarketingAccordion = MarketingAccordionGroup as CompoundedComponent;
MarketingAccordion.List = MarketingAccordionList;
MarketingAccordion.Item = MarketingAccordionItem;
MarketingAccordion.Panels = MarketingAccordionPanels;
MarketingAccordion.Panel = MarketingAccordionPanel;
