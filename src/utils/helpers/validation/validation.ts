import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .matches(/^[A-Z][a-z]+$/, 'Name should start with an uppercase letter'),
  age: Yup.number()
    .required('Age is required')
    .typeError('Age should be a number')
    .positive('Age should be a positive number'),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email address'),
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.*\s).*$/,
      'Password should contain at least one number, one uppercase letter, one lowercase letter, and one special character'
    ),
  passwordRepeat: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
  gender: Yup.string().required('Gender is required'),
  acceptTC: Yup.bool().oneOf(
    [true],
    'You must accept the terms and conditions'
  ),
  picture: Yup.mixed<FileList>()
    .required('Picture is required')
    .test('fileRequired', 'Picture is required', (value) => Boolean(value))
    .test('fileSize', 'File size should be less than 2MB', (value) => {
      return value[0] && value[0].size <= 2 * 1024 * 1024;
    })
    .test(
      'fileFormat',
      'Invalid file format. Please upload a PNG or JPEG image',
      (value) => value[0] && ['image/jpeg', 'image/png'].includes(value[0].type)
    ),
  country: Yup.string().required('Country is required'),
});
