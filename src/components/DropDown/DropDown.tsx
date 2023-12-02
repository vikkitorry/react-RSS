import { ChangeEvent, useMemo, memo } from 'react';
import cls from './DropDown.module.scss';
import { FormKeys } from '../../utils/constants/Constants';
import { UseFormRegisterReturn } from 'react-hook-form';

interface IDropDownProps {
  values?: string[];
  onChange?: (value: string) => void;
  register?: (name: FormKeys) => UseFormRegisterReturn<FormKeys>;
  registerName: FormKeys;
  label: string;
}

export const DropDown = memo((props: IDropDownProps) => {
  const { values, onChange, registerName, register, label } = props;

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
    <div className={cls.DropDown}>
      <label htmlFor={registerName}>{label}</label>
      <select
        className={cls.select}
        onChange={onChangeHandler}
        {...(register && { ...register(registerName) })}
      >
        {optionsList}
      </select>
    </div>
  );
});
