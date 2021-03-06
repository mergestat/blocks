import React from 'react';
import cx from 'classnames';
import { ChevronRightIcon } from '@mergestat/icons';
import { Label } from '../Label';

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
  return (
    <details className={cx('t-accordion', { [className]: !!className })}>
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
  return (
    <summary className={cx({ [className]: !!className })}>
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
  return <div className={cx({ [className]: !!className })}>{children}</div>;
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
