/* eslint-disable @typescript-eslint/no-explicit-any */
import { CaretDownIcon, CaretRightIcon } from '@mergestat/icons';
import cx from 'classnames';
import React, { Fragment, useEffect, useState } from 'react';
import { Checkbox, CHECKBOX_STATES } from '../../atoms/Form';

type SortType = 'asc' | 'desc' | undefined

type TableProps = {
  dataSource: Array<any>;
  columns: Array<{
    title?: string;
    headerClassName?: string;
    dataIndex?: any;
    className?: string;
    key?: any;
    render?: React.ReactNode | any | undefined;
    onSortChange?: (e: SortType) => void;
  }>;
  className?: string;
  tableWrapperClassName?: string;
  responsive?: boolean;
  emptyText?: string | React.ReactNode;
  hovered?: boolean;
  rowKey?: any;
  loading?: boolean;
  scrollY?: string | number;
  noWrapHeaders?: boolean;
  borderless?: boolean;
  tableHeaderBackground?: string;
  tableBodyBackground?: string;
  checkable?: boolean;
  hasSelectAll?: boolean;
  selectAll?: boolean;
  onSelectedChange?: (selectedRows: Array<any>) => void;
  collapsible?: boolean;
  clickable?: boolean;
  dense?: boolean,
  bordered?: boolean,
  renderCollapse?: (data: unknown) => void
}

export const Table: React.FC<TableProps> = ({
  className,
  dataSource,
  columns,
  emptyText,
  hovered = false,
  responsive = false,
  loading = false,
  borderless = false,
  noWrapHeaders = false,
  scrollY,
  tableWrapperClassName,
  tableHeaderBackground = 'white',
  tableBodyBackground = 'white',
  checkable = false,
  hasSelectAll = true,
  onSelectedChange = () => null,
  selectAll = false,
  collapsible = false,
  clickable = false,
  dense = false,
  bordered = false,
  renderCollapse = () => null,
}) => {
  const [data, setData] = useState(
    dataSource.map((data) => ({
      ...data,
      ...checkable && { checked: selectAll },
      ...collapsible && { collapsed: false },
      ...clickable && { clickable: false }
    }))
  )

  // Sortable module
  const [sortField, setSortField] = useState<Record<string, SortType>>({})

  useEffect(() => {
    if (checkable) {
      setData((prevData) => prevData.map(data => ({
        ...data,
        checked: selectAll
      })))

      onSelectedChange(selectAll ? data : []);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectAll])

  if (loading) {
    return (
      <div
        className="overflow-hidden bg-white"
        style={{ maxHeight: scrollY || 'unset' }}
      >
        <SkeletonLoaderTable
          colLen={columns.length}
          rowLen={dataSource.length}
          borderless={borderless}
        />
      </div>
    )
  }

  // Checkable module
  const checkedState = () => {
    const checkedDataLen: number = data.filter((d) => d.checked).length;

    return checkedDataLen === 0
      ? CHECKBOX_STATES.Unchecked
      : checkedDataLen === data.length
        ? CHECKBOX_STATES.Checked
        : CHECKBOX_STATES.Indeterminate;
  }

  const onRowChange = (checked: boolean, index: number) => {
    data[index].checked = checked;
    setData([...data]);
    onSelectedChange(data.filter((d) => d.checked));
  }

  // Collapsible module
  const onRowClick = (index: number) => {
    data[index].collapsed = !data[index].collapsed;
    setData([...data]);
  }

  /* Modifier key tracking
    17 Ctrl Key (For Windows)
    224 Apple command key
    91 Left Apple Command key in Chrome/Firefox
    93 Right Apple Command key in Chrome/Firefox
    ========================================================================== */

  let isMultipleTabsModifierKeyPressed = false;

  window.addEventListener("keydown", (e) => {
    if ([17, 73, 91, 93, 224].includes(e.which)) {
      isMultipleTabsModifierKeyPressed = true;
    }
  })

  window.addEventListener("keyup", (e) => {
    if ([17, 73, 91, 93, 224].includes(e.which)) {
      isMultipleTabsModifierKeyPressed = false;
    }
  })

  // Handle events
  const handleRowClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const href = (e.target as Element).closest('[data-href]')?.getAttribute('data-href')
    const excludedEl = (e.target as Element).closest('button, a, input, [aria-haspopup="true"]')

    if (!excludedEl && href) {
      if (isMultipleTabsModifierKeyPressed) {
        window.open(href, "_blank");
      } else {
        (window as Window).location = href
      }
    }
  }

  const _table_classname = tableWrapperClassName ? { [tableWrapperClassName]: !!tableWrapperClassName } : {}
  const _classname = className ? { [className]: !!className } : {}

  return dataSource.length < 1 ? (
    <div
      className={cx('flex justify-center items-center bg-white py-5', {
        'rounded-md border-gray-200 border': !borderless,
      })}
    >
      {emptyText ?? 'No data available!'}
    </div>
  ) : (
    <div
      className={cx('overflow-hidden bg-white', {
        'overflow-x-auto': responsive,
        'overflow-y-auto': !!scrollY,
        'border border-gray-200 rounded-md': !borderless,
        ..._table_classname,
      })}
      style={{ maxHeight: scrollY || 'unset' }}
    >
      <table
        className={cx(`t-table-default`, {
          [`t-table-hover`]: hovered,
          [`t-table-sticky-header`]: !!scrollY,
          [`t-table-clickable`]: clickable,
          [`t-table-dense`]: dense,
          [`t-table-bordered`]: bordered,
          ..._classname,
        })}
      >
        <thead>
          <tr className={cx(`bg-${tableHeaderBackground}`)}>
            {collapsible && <th className="w-0 pl-6"></th>}
            {checkable && (
              <th className="w-0 pl-6">
                {hasSelectAll && (
                  <Checkbox
                    value={checkedState()}
                    onChange={(e) => {
                      const checked = e.currentTarget.checked;

                      setData([
                        ...data.map((item) => ({
                          ...item,
                          checked: checked,
                        })),
                      ]);

                      onSelectedChange(checked ? data : []);
                    }}
                  />
                )}
              </th>
            )}
            {columns.map(({ title, key, headerClassName, onSortChange }) => {
              const order = sortField[key];
              const _header_classname = headerClassName ? { [headerClassName]: !!headerClassName } : {}

              return (
                <th
                  scope="col"
                  key={key}
                  className={cx(
                    {
                      'whitespace-nowrap': noWrapHeaders,
                      'px-6': title && typeof title === 'string',
                      ..._header_classname,
                    },
                    order === 'asc' ? 'up' : order === 'desc' ? 'down' : 'default'
                  )}
                >
                  <span
                    className={cx('mr-1 select-none', { 'cursor-pointer': !!onSortChange })}
                    onClick={() => {
                      if (onSortChange) {
                        if (order === 'asc') sortField[key] = 'desc';
                        else if (order === 'desc') sortField[key] = undefined;
                        else sortField[key] = 'asc';

                        setSortField({ ...sortField });
                        onSortChange(sortField[key]);
                      }
                    }}
                  >
                    {title} {` `}
                    {onSortChange && (
                      <div className="sortable__th__arrow-wrapper">
                        <div className="sortable__th__arrow sortable__th__arrowup"></div>
                        <div className="sortable__th__arrow sortable__th__arrowdown"></div>
                      </div>
                    )}
                  </span>
                </th>

              );
            })}
            {clickable && (
              <th className="t-sr-accessible-table-col"></th>
            )}
          </tr>
        </thead>
        <tbody className={cx(`bg-${tableBodyBackground}`)}>
          {data.map((d, index) => {
            const rowKey = d.id || Math.random();

            return (
              <Fragment key={rowKey}>
                <tr data-href={(clickable && d.href) ? d.href : ''} onClick={(clickable && d.href) ? (e) => handleRowClick(e) : undefined}>
                  {collapsible && (
                    <td className="w-0 pl-6">
                      <button className="t-button t-button-borderless-muted t-button-icon"
                        onClick={() => onRowClick(index)}>

                        {d.collapsed
                          ? <CaretDownIcon className='text-gray-500 t-icon' />
                          : <CaretRightIcon className='text-gray-500 t-icon' />
                        }
                      </button>
                    </td>
                  )}
                  {checkable && (
                    <td className="w-0 pl-6">
                      <Checkbox
                        checked={d.checked}
                        onChange={(e) =>
                          onRowChange(e.currentTarget.checked, index)
                        }
                      />
                    </td>
                  )}
                  {columns.map(({ dataIndex, className, render, key }) => {
                    const _classname = className ? { [className]: !!className } : {}

                    return (
                      <td
                        className={cx({
                          'px-6 py-3': !render,
                          ..._classname,
                        })}
                        key={rowKey + key}
                      >
                        {render ? render(d[dataIndex], d) : d[dataIndex]}
                      </td>
                    )
                  })}
                  {(clickable && d.href) && (
                    <td className="t-sr-accessible-table-col">
                      <a href={d.href}>Go to link</a>
                    </td>
                  )}
                </tr>
                {d.collapsed && (
                  <tr>
                    <td colSpan={columns.length + (checkable ? 2 : 1)} className="p-6 bg-gray-50">
                      {renderCollapse ? renderCollapse(d) as React.ReactNode : ''}
                    </td>
                  </tr>
                )}
              </Fragment>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export const SkeletonLoaderTable = ({
  rowLen = 10,
  colLen = 3,
  borderless = false,
}: {
  rowLen?: number;
  colLen?: number;
  borderless?: boolean;
}) => {
  const rowArray = Array(rowLen).fill('');
  const colArray = Array(colLen).fill('');

  return (
    <div className="py-3 px-2 w-full mx-auto">
      <div className="animate-pulse flex flex-col">
        <div
          className={cx(
            'flex space-x-5 items-center py-2 border-b border-gray-200',
            {
              'border-t': !borderless,
            }
          )}
        >
          {colArray.map((_, col) => (
            <div
              key={col}
              className={cx(
                'h-4 bg-gray-150 rounded mb-4 border-b border-gray-200 py-2',
                {
                  'flex-grow w-3/12': col < colLen - 1,
                  'flex-grow-0 w-16': col === colLen - 1,
                }
              )}
            />
          ))}
        </div>

        {rowArray.map((_, row) => (
          <div
            key={row}
            className="flex space-x-5 items-center border-b border-gray-200 py-2"
          >
            {colArray.map((_, col) => (
              <div
                key={col}
                className={cx('h-4 bg-gray-150 rounded', {
                  'flex-grow': col < colLen - 1,
                  'flex-grow-0 w-16': col === colLen - 1,
                })}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
