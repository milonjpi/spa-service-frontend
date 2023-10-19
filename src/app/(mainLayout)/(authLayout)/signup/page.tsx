import RegisterPage from '@/components/ui-pages/register/RegisterPage';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: '24/7 Spa | Sign Up',
};

const SignUp = ({
  searchParams,
}: {
  searchParams: { callbackUrl?: string | undefined };
}) => {
  return <RegisterPage callbackUrl={searchParams?.callbackUrl} />;
};

export default SignUp;
