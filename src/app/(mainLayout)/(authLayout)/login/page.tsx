import LoginPage from '@/components/ui-pages/login/LoginPage';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: '24/7 Spa | Login',
};

const Login = ({
  searchParams,
}: {
  searchParams: { callbackUrl?: string | undefined };
}) => {
  return <LoginPage callbackUrl={searchParams?.callbackUrl} />;
};

export default Login;
