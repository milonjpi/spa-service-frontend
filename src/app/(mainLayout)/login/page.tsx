import LoginPage from '@/components/ui/login/LoginPage';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: '24/7 Spa | Login',
};

const Login = () => {
  return <LoginPage />;
};

export default Login;
