import { Button, ButtonSize } from '../Button/Button';
import cls from './SearchBar.module.scss';
import Input from '../Input/Input';
import React, { useState, useCallback } from 'react';
import { DropDown } from '../DropDown/DropDown';
import { defaultPageSize } from '@/src/services/variables/variables';
import { useRouter } from 'next/router';

const NUM_OF_ITEMS_VALUES = [defaultPageSize.toString(), '20', '10', '5'];

export const SearchBar = () => {
  const [query, setQuery] = useState<string>('');
  const router = useRouter()

  const onBlur = useCallback((value: string) => {
    setQuery(value || '');
  }, []);

  const onSubmit = () => {
    const {limit} = router.query
    router.push({
      query: { query, page: 1, limit},
    });
  }

  const onSelectNumOfItems = (limit: string) => {
    router.push({
      query: { query, page: 1, limit},
    });
  }

  return (
    <div className={cls.SearchBar}>
      <Input
        data-testid="input"
        className=""
        theme=""
        onBlur={onBlur}
        placeholder="Enter show"
      />
      <Button
        onClick={onSubmit}
        className={''}
        size={ButtonSize.M}
        data-testid="btn"
      >
        Search
      </Button>
      <DropDown values={NUM_OF_ITEMS_VALUES} onChange={onSelectNumOfItems} />
    </div>
  );
};
