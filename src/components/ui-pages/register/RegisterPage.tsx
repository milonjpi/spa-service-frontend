'use client';

import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import { loginSchema } from '@/schemas/login';
import { signUpSchema } from '@/schemas/signUp';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Card } from 'antd';
import Link from 'next/link';
import React from 'react';
import { SubmitHandler } from 'react-hook-form';

type FormValues = {
  fullName: string;
  email: string;
  password: string;
};

const RegisterPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data: any) => {
    console.log(data);
  };
  return (
    <div style={{ padding: '20px 0' }}>
      <Card
        style={{
          width: 350,
          margin: 'auto',
          boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <h3>Hi, Welcome</h3>
          <h3>Create Your Account</h3>
        </div>
        <div>
          <Form submitHandler={onSubmit} resolver={yupResolver(signUpSchema)}>
            <div>
              <FormInput
                name="fullName"
                type="text"
                size="large"
                label="Full Name"
                placeholder="Type Your Full Name"
                required
              />
            </div>
            <div
              style={{
                marginTop: 15,
              }}
            >
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
              Sign Up
            </Button>
          </Form>
        </div>
        <p style={{ paddingTop: 5 }}>
          Have an account? <Link href="/login">Login</Link>
        </p>
      </Card>
    </div>
  );
};

export default RegisterPage;
