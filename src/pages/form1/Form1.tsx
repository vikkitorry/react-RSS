import React, { FormEvent, useRef, useState } from 'react';
import { classNames } from '../../utils/libs/classNames/classNames';
import cls from './Form1.module.scss';
import { Button, ButtonSize } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { DropDown } from '../../components/DropDown/DropDown';
import { gender } from '../../utils/constants/Constants';
import { validationSchema } from '../../utils/helpers/validation/validation';
import { FormKeys } from '../../utils/constants/Constants';
import { useNavigate } from 'react-router';
import { useAppDispatch } from '../../store/hooks/redux';
import { dataSlice } from '../../store/reducers/DataSlice';
import {
  IFormKeys,
  IFormErrors,
  IFormAfterValid,
} from '../../utils/constants/Constants';
import { ValidationError } from 'yup';
import { useAppSelector } from '../../store/hooks/redux';

const errMssgInitial: IFormErrors = {
  name: '',
  age: '',
  email: '',
  password: '',
  passwordRepeat: '',
  country: '',
  acceptTC: '',
  picture: '',
  gender: '',
};

export const Form1 = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { countries } = useAppSelector((state) => state.countryReducer);
  const { setNewData, setUpdateData } = dataSlice.actions;
  const [errors, setErrors] = useState<IFormErrors>(errMssgInitial);
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordRepeatRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const acceptTCRef = useRef<HTMLInputElement>(null);
  const pictureRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLSelectElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const userData: IFormKeys = {
      name: nameRef.current?.value,
      age: ageRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      passwordRepeat: passwordRepeatRef.current?.value,
      gender: genderRef.current?.value,
      acceptTC: acceptTCRef.current?.checked,
      picture: pictureRef.current?.files,
      country: countryRef.current?.value,
    };
    try {
      await validationSchema.validate({ ...userData }, { abortEarly: false });
      const userDataAfterValidation = userData as IFormAfterValid;
      addDataToRedux(userDataAfterValidation);
    } catch (err) {
      if (err instanceof ValidationError) {
        const error: Record<string, string> = {};
        err.inner.forEach((e) => {
          if (e.path && typeof e.path === 'string') {
            error[e.path] = e.message;
          }
        });
        setErrors(error);
      }
    }
  };

  const addDataToRedux = (userData: IFormAfterValid) => {
    const reader = new FileReader();
    reader.readAsDataURL(userData.picture[0]);
    reader.onloadend = async () => {
      const strPicture = reader.result;
      if (typeof strPicture === 'string') {
        dispatch(
          setNewData({
            ...userData,
            picture: strPicture,
          })
        );
        dispatch(setUpdateData());
      }
    };
    navigate('/');
  };

  return (
    <form onSubmit={onSubmit} ref={formRef}>
      Use English please ^^
      <div className={classNames(cls.Form, {}, [])}>
        <Input
          label={'Name'}
          error={errors.name}
          registerName={FormKeys.name}
          innerref={nameRef}
        />
        <Input
          label={'Age'}
          error={errors.age}
          registerName={FormKeys.age}
          innerref={ageRef}
        />
        <Input
          label={'Email'}
          error={errors.email}
          registerName={FormKeys.email}
          innerref={emailRef}
        />
        <Input
          label={'Password'}
          error={errors.password}
          registerName={FormKeys.password}
          innerref={passwordRef}
        />
        <Input
          label={'Repeat Password'}
          error={errors.passwordRepeat}
          registerName={FormKeys.passwordRepeat}
          innerref={passwordRepeatRef}
        />
        <DropDown
          label={'Gender'}
          values={gender}
          registerName={FormKeys.gender}
          error={errors.gender}
          innerref={genderRef}
        />
        <Input
          label={'Accept T&C'}
          type={'checkbox'}
          registerName={FormKeys.acceptTC}
          innerref={acceptTCRef}
        />
        <Input
          label={'Picture'}
          type={'file'}
          registerName={FormKeys.picture}
          error={errors.picture}
          innerref={pictureRef}
        />
        <DropDown
          label={'Countries'}
          values={countries}
          registerName={FormKeys.country}
          error={errors.country}
          innerref={countryRef}
        />
        <Button className="" type="submit" size={ButtonSize.M}>
          {'Submit'}
        </Button>
      </div>
    </form>
  );
};
