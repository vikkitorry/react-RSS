import React from 'react';
import { classNames } from '../../utils/libs/classNames/classNames';
import cls from './Form2.module.scss';
import { useForm } from 'react-hook-form';
import { Button, ButtonSize } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { DropDown } from '../../components/DropDown/DropDown';
import { gender } from '../../utils/constants/Constants';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../../utils/helpers/validation/validation';
import { FormKeys } from '../../utils/constants/Constants';
import DataList from '../../components/DataList/DataList';
import { useNavigate } from 'react-router';
import { useAppDispatch } from '../../store/hooks/redux';
import { dataSlice } from '../../store/reducers/DataSlice';

export const Form2 = () => {
  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm({ mode: 'onChange', resolver: yupResolver(validationSchema) });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { setNewData, setUpdateData } = dataSlice.actions;

  const onSubmit = handleSubmit(async (data) => {
    const reader = new FileReader();
    reader.readAsDataURL(data.picture[0]);
    reader.onloadend = async () => {
      const strPicture = reader.result;
      if (typeof strPicture === 'string') {
        dispatch(
          setNewData({
            name: data.name,
            age: data.age.toString(),
            email: data.email,
            password: data.password,
            gender: data.gender,
            country: data.country,
            picture: strPicture,
          })
        );
        dispatch(setUpdateData());
      }
    };
    navigate('/');
  });

  return (
    <form onSubmit={onSubmit}>
      Use English please ^^
      <div className={classNames(cls.Form, {}, [])}>
        <Input
          label={'Name'}
          error={errors.name?.message}
          register={register}
          registerName={FormKeys.name}
        />
        <Input
          label={'Age'}
          error={errors.age?.message}
          register={register}
          registerName={FormKeys.age}
        />
        <Input
          label={'Email'}
          error={errors.email?.message}
          register={register}
          registerName={FormKeys.email}
        />
        <Input
          label={'Password'}
          error={errors.password?.message}
          register={register}
          registerName={FormKeys.password}
        />
        <Input
          label={'Repeat Password'}
          error={errors.passwordRepeat?.message}
          register={register}
          registerName={FormKeys.passwordRepeat}
        />
        <DropDown
          label={'Gender'}
          values={gender}
          register={register}
          registerName={FormKeys.gender}
          error={errors.gender?.message}
        />
        <Input
          label={'Accept T&C'}
          type={'checkbox'}
          register={register}
          registerName={FormKeys.acceptTC}
        />
        <Input
          label={'Picture'}
          type={'file'}
          register={register}
          registerName={FormKeys.picture}
          error={errors.picture?.message}
        />
        <DataList registerName={FormKeys.country} register={register} />
        <Button
          className=""
          type="submit"
          size={ButtonSize.M}
          onClick={onSubmit}
          disabled={!isValid}
        >
          {'Submit'}
        </Button>
      </div>
    </form>
  );
};
