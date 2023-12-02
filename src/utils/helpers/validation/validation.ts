import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .matches(/^[A-Z][a-z]+$/, 'Name should start with an uppercase letter'),
  age: Yup.number()
    .required('Age is required')
    .positive('Age should be a positive number')
    .integer('Age should be a whole number'),
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
  picture: Yup.mixed<File>()
    .required('Picture is required')
    .test('fileRequired', 'Picture is required', (value) => Boolean(value))
    .test(
      'fileSize',
      'File size should be less than 2MB',
      (value) => value && value.size <= 2097152
    )
    .test(
      'fileFormat',
      'Invalid file format. Please upload a PNG or JPEG image',
      (value) => value && ['image/jpeg', 'image/png'].includes(value.type)
    ),
  country: Yup.string().required('Country is required'),
});
