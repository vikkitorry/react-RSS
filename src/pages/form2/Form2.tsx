import React from 'react';
import { classNames } from '../../utils/libs/classNames/classNames';
import cls from './Form2.module.scss';
import { useForm } from 'react-hook-form';
import { Button, ButtonSize } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { DropDown } from '../../components/DropDown/DropDown';
import { gender } from '../../utils/constants/Constants';

export const Form2 = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { register } = useForm();
  const onSubmit = () => {
    console.log('onSubmit');
  };
  return (
    <form onSubmit={onSubmit}>
      <div className={classNames(cls.Form, {}, [])}>
        <Input label={'Name'} />
        <Input label={'Age'} />
        <Input label={'Email'} />
        <Input label={'Password'} />
        <Input label={'Password'} />
        <DropDown values={gender}></DropDown>
        <Button className="" size={ButtonSize.M} onClick={onSubmit}>
          {' '}
          Submit{' '}
        </Button>
      </div>
    </form>
  );
};

// +name (validate for first uppercased letter)
// +age (should be number, no negative values)
// +email (validate for email)
// +2 passwords (should match, display the password strength: 1 number, 1 uppercased letter, 1 lowercased letter, 1 special character)
// +gender (you can use radio buttons or select control)
// accept T&C (checkbox)
// input control to upload picture (validate size and extension, allow png jpeg, save in redux store as base64)
// autocomplete control to select country (all countries shoudl be stored in the Redux store) Form should contain labels, which should be connected with inouts (look at htmlFor)
