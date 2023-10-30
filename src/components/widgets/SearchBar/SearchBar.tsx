import { Button, ButtonSize, ButtonTheme } from '../../Button/Button';
import cls from './SearchBar.module.scss';
import Input from '../../Input/Input';

interface ISearchBar {
  inputValue: undefined | string;
  onSubmit: () => void;
  onBlur: (value: string) => void;
}

export const SearchBar = (props: ISearchBar) => {
  const { inputValue, onSubmit, onBlur } = props;

  return (
    <div className={cls.SearchBar}>
      <Input
        className=""
        theme=""
        onBlur={onBlur}
        defaultValue={inputValue ? inputValue : undefined}
        placeholder="Enter name"
      />
      <Button
        onClick={onSubmit.bind(this)}
        className={''}
        size={ButtonSize.M}
        theme={ButtonTheme.BACKGROUND_DARK}
      >
        Search
      </Button>
    </div>
  );
};
