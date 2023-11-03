import { ChangeEvent, useMemo, memo } from 'react';
import cls from './DropDown.module.scss';
import { classNames } from '../../utils/libs/classNames/classNames';

interface IDropDownProps {
  values?: string[];
  onChange?: (value: string) => void;
}

export const DropDown = memo((props: IDropDownProps) => {
  const { values, onChange } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const optionsList = useMemo(
    () =>
      values?.map((val) => (
        <option className={cls.option} value={val} key={val}>
          {val}
        </option>
      )),
    [values]
  );

  return (
    <div className={classNames(cls.DropDown, {}, [])}>
      <select className={cls.select} onChange={onChangeHandler}>
        {optionsList}
      </select>
    </div>
  );
});
