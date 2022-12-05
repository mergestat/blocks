import { PlusIcon, SearchIcon } from '@mergestat/icons';
import cx from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { Badge } from '../../atoms/Badge';
import { Checkbox, Input } from '../../atoms/Form';
import { Menu } from '../../molecules/Menu';

type SelectStateProp = {
  title: string
  checked: boolean
}

type MultiSelectProps = {
  setStateToProps: SelectStateProp[];
  getState?: (array: SelectStateProp[]) => void;
};

export const MultiSelect: React.FC<
  MultiSelectProps &
  React.DetailedHTMLProps<
    React.DetailsHTMLAttributes<HTMLElement>,
    HTMLElement
  >
> = ({ setStateToProps, getState }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState(setStateToProps);
  const [value, setValue] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Element)
      ) {
        setIsActive(false);
      }
    }

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isActive, containerRef]);

  useEffect(() => {
    setShowList(state.filter(s => s.title.includes(value)).length > 0)
  }, [value, state])

  const add = (e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const item = state.find(item => item.title === value)
    if (!item) {
      setState([...state, { title: value, checked: true }]);
      if (getState) getState([...state, { title: value, checked: true }]);
    }
    setValue('');
  }

  return (
    <div>
      <div className="t-multi-select-tag-list">
        {state.map((item, index) => {
          return item.checked ? (
            <Badge
              variant="default"
              closable={true}
              key={`key_${index}`}
              onClose={() => {
                item.checked = !item.checked;
                setState([...state]);
                if (getState) getState([...state]);
              }}
            >
              {item.title}
            </Badge>
          ) : null;
        })}
      </div>
      <div className="t-multi-select-wrapper" ref={containerRef}>
        <Input
          className={cx('outline-0', { active: isActive })}
          placeholder="Add a tag..."
          startIcon={<SearchIcon className="t-icon" />}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsActive(true)}
          onKeyPress={(e) => (e.key === 'Enter' && value.length > 0 && add(e))}
        />
        {isActive && (
          <div className="t-menu active w-full">
            {showList && <>
              <div className="t-multi-select-value-list">
                {state.map((item, index) => {
                  return item.title.includes(value) ? (
                    <div key={`key2_${index}`} className="t-menu-item">
                      <Checkbox
                        className="cursor-pointer"
                        label={item.title}
                        checked={item.checked}
                        onChange={() => {
                          state[index].checked = !state[index].checked;
                          setState([...state]);
                          if (getState) getState([...state]);
                        }}
                      />
                    </div>
                  ) : null;
                })}
              </div>
              <Menu.Divider />
            </>}

            <div id="menu-item-container" onClick={(e) => (value.length > 0 && add(e))}>
              <Menu.Item
                withIcon
                color="text-blue-600"
                text={'Create ' + value}
                icon={<PlusIcon className="t-icon" />}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
