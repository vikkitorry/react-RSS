import React, { InputHTMLAttributes } from 'react';
import cls from './DataList.module.scss';
import { classNames } from '../../utils/libs/classNames/classNames';
import { UseFormRegisterReturn } from 'react-hook-form';
import { FormKeys } from '../../utils/constants/Constants';
import { useAppSelector } from '../../store/hooks/redux';

interface IDataListProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onBlur'> {
  theme?: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  error?: string | undefined;
  register?: (name: FormKeys) => UseFormRegisterReturn<FormKeys>;
  registerName: FormKeys;
}

export const DataList = (props: IDataListProps) => {
  const { label, placeholder, error, register, registerName } = props;
  const { countries } = useAppSelector((state) => state.countryReducer);

  return (
    <div className={cls.container}>
      <label>{label}</label>
      <input
        // id={FormKeys.country}
        className={classNames(cls.Input, {}, [])}
        placeholder={placeholder}
        list={registerName}
        {...(register && { ...register(registerName) })}
      />
      <datalist id={registerName}>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </datalist>
      <p className={cls.error}>{error}</p>
    </div>
  );
};

export default DataList;