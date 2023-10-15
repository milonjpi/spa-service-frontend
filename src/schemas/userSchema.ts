import * as yup from 'yup';

export const userSchema = yup.object().shape({
  fullName: yup.string().required('Full Name is required'),
  email: yup.string().email().required('Email is required'),
  password: yup.string().min(5).max(32).required(),
  role: yup.string().required(),
});

export const updateUserSchema = yup.object().shape({
  fullName: yup.string().required('Full Name is required'),
  email: yup.string().email().required('Email is required'),
  role: yup.string().required(),
  mobile: yup.string(),
  address: yup.string(),
});

export const updateProfileSchema = yup.object().shape({
  fullName: yup.string().required('Full Name is required'),
  email: yup.string().email().required('Email is required'),
  mobile: yup.string(),
  address: yup.string(),
});
export const passwordSchema = yup.object().shape({
  password: yup.string().min(5).max(32).required(),
});
