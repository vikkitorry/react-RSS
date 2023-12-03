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
import { dataSlice, typeOfForm } from '../../store/reducers/DataSlice';
import {
  IFormKeys,
  IFormErrors,
  IFormAfterValid,
} from '../../utils/types/types';
import { ValidationError } from 'yup';
import { errMssgInitial } from '../../utils/constants/Constants';
import { checkPassword } from '../../utils/helpers/validation/checkPassword';
import DataList from '../../components/DataList/DataList';

export const Form1 = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { setNewData, setUpdateData } = dataSlice.actions;
  const [errors, setErrors] = useState<IFormErrors>(errMssgInitial);
  const [progress, setProgress] = useState(0);
  const [progressRepeat, setProgressRepeat] = useState(0);
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordRepeatRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const acceptTCRef = useRef<HTMLInputElement>(null);
  const pictureRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);

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
      setProgress(checkPassword(userData.password));
      setProgressRepeat(checkPassword(userData.passwordRepeat));
      await validationSchema.validate({ ...userData }, { abortEarly: false });
      const userDataAfterValidation = userData as IFormAfterValid;
      addDataToRedux(userDataAfterValidation);
    } catch (err) {
      if (err instanceof ValidationError) {
        const errorsMssg: { [key: string]: string } = {};
        err.inner.forEach((e) => {
          if (e.path && typeof e.path === 'string') {
            errorsMssg[e.path] = e.message;
          }
        });
        setErrors(errorsMssg);
      }
    }
  };

  const addDataToRedux = (userData: IFormAfterValid) => {
    const reader = new FileReader();
    reader.readAsDataURL(userData.picture[0]);
    reader.onload = async () => {
      if (typeof reader.result === 'string') {
        dispatch(
          setNewData({
            ...userData,
            typeOfForm: typeOfForm.uncontrolled,
            picture: reader.result,
          })
        );
        dispatch(setUpdateData());
      }
    };
    navigate('/');
  };

  return (
    <form onSubmit={onSubmit} className={cls.container}>
      Use English please ^^
      <div className={classNames(cls.Form, {}, [])}>
        <p className={cls.titlle}>Uncontrolled form</p>
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
          type={'password'}
          error={errors.password}
          registerName={FormKeys.password}
          innerref={passwordRef}
          progress={progress}
        />
        <Input
          label={'Repeat Password'}
          type={'password'}
          error={errors.passwordRepeat}
          registerName={FormKeys.passwordRepeat}
          innerref={passwordRepeatRef}
          progress={progressRepeat}
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
          error={errors.acceptTC}
          innerref={acceptTCRef}
        />
        <Input
          label={'Picture'}
          type={'file'}
          registerName={FormKeys.picture}
          error={errors.picture}
          innerref={pictureRef}
        />
        <DataList
          registerName={FormKeys.country}
          innerref={countryRef}
          error={errors.country}
        />
        <Button className="" type="submit" size={ButtonSize.M}>
          {'Submit'}
        </Button>
      </div>
    </form>
  );
};
