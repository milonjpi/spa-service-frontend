import * as yup from 'yup';

export const userSchema = yup.object().shape({
  fullName: yup.string().required('Full Name is required'),
  email: yup.string().email().required('Email is required'),
  password: yup.string().min(5).max(32).required(),
  role: yup.string().required(),
});
