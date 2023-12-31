'use client';

import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import { useLoginMutation } from '@/redux/api/auth/authApi';
import { loginSchema } from '@/schemas/login';
import { storeUserInfo } from '@/services/auth.service';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Card, message } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { SubmitHandler } from 'react-hook-form';

type FormValues = {
  email: string;
  password: string;
};

interface IProps {
  callbackUrl?: string | undefined;
};

const LoginPage = ({ callbackUrl }: IProps) => {
  const router = useRouter();
  const [login] = useLoginMutation();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    message.loading('Login.....');
    try {
      const res = await login({ ...data }).unwrap();
      if (res?.accessToken) {
        router.push(callbackUrl ? callbackUrl : '/profile');
        message.success('Logged in successfully!');
      }
      storeUserInfo({ accessToken: res?.accessToken });
    } catch (err: any) {
      message.error(`${err.data}`);
    }
  };
  return (
    <div style={{ padding: '80px 0' }}>
      <Card
        style={{
          width: 350,
          margin: 'auto',
          boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <h3>Hi, Welcome Back</h3>
          <h3>Enter your credentials to continue</h3>
        </div>
        <div>
          <Form submitHandler={onSubmit} resolver={yupResolver(loginSchema)}>
            <div>
              <FormInput
                name="email"
                type="text"
                size="large"
                label="Email Address"
                placeholder="Type Your Email"
                required
              />
            </div>
            <div
              style={{
                margin: '15px 0px',
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="Password"
                placeholder="Type Your Password"
                required
              />
            </div>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Login
            </Button>
          </Form>
        </div>
        <p style={{ paddingTop: 5 }}>
          Don&apos;t have an account?{' '}
          <Link href={`/signup?callbackUrl=${callbackUrl}`}>Sign Up</Link>
        </p>
      </Card>
    </div>
  );
};

export default LoginPage;
