import { ChevronRightIcon } from '@mergestat/icons';
import cx from 'classnames';
import React from 'react';
import { Label } from '../../atoms/Label';

type AccordionProps = {
  title?: string | React.ReactNode;
  content?: string | React.ReactNode;
}

export const AccordionOuter: React.FC<
  AccordionProps &
  React.DetailedHTMLProps<
    React.DetailsHTMLAttributes<HTMLElement>,
    HTMLElement
  >
> = ({ title, content, children, className }) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <details className={cx('t-accordion', { ..._classname })}>
      {children ? (
        children
      ) : (
        <>
          <AccordionSummary
            icon={
              <ChevronRightIcon className="t-icon t-icon-heroicons-chevron-right" />
            }
            label={title}
          />
          <AccordionDetails>{content}</AccordionDetails>
        </>
      )}
    </details>
  );
}

const AccordionSummary: React.FC<
  {
    icon?: React.ReactNode;
    label?: string | React.ReactNode;
  } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = ({ icon, label, children, className }) => {
  const _classname = className ? { [className]: !!className } : {}

  return (
    <summary className={cx({ ..._classname })}>
      <div className="flex items-center justify-start w-full">
        {children ? (
          children
        ) : icon ? (
          icon
        ) : (
          <ChevronRightIcon className="t-icon t-icon-heroicons-chevron-right" />
        )}

        {!children && (<Label>{label}</Label>)}
      </div>
    </summary>
  );
}

const AccordionDetails: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, className }) => {
  const _classname = className ? { [className]: !!className } : {}
  return <div className={cx({ ..._classname })}>{children}</div>;
}

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    AccordionProps &
    React.DetailedHTMLProps<
      React.DetailsHTMLAttributes<HTMLElement>,
      HTMLElement
    >
  > {
  Summary: typeof AccordionSummary;
  Details: typeof AccordionDetails;
}

export const Accordion = AccordionOuter as CompoundedComponent;
Accordion.Summary = AccordionSummary;
Accordion.Details = AccordionDetails;
