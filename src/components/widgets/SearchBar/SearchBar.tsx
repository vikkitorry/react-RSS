import { Button, ButtonSize } from '../../Button/Button';
import cls from './SearchBar.module.scss';
import Input from '../../Input/Input';
import { memo } from 'react';

interface ISearchBar {
  inputValue: undefined | string;
  onSubmit: () => void;
  onBlur: (value: string) => void;
}

export const SearchBar = memo((props: ISearchBar) => {
  const { inputValue, onSubmit, onBlur } = props;
  console.log('render search bar');
  return (
    <div className={cls.SearchBar}>
      <Input
        className=""
        theme=""
        onBlur={onBlur}
        defaultValue={inputValue ? inputValue : undefined}
        placeholder="Enter name"
      />
      <Button onClick={onSubmit} className={''} size={ButtonSize.M}>
        Search
      </Button>
    </div>
  );
});
