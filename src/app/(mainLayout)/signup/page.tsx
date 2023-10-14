import RegisterPage from '@/components/ui/register/RegisterPage';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: '24/7 Spa | Sign Up',
};

const SignUp = () => {
  return <RegisterPage />;
};

export default SignUp;
