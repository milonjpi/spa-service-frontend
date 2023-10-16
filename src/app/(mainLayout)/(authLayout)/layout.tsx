'use client';
import { isLoggedIn } from '@/services/auth.service';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const userLoggedIn = isLoggedIn();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (userLoggedIn) {
      router.push('/profile');
    }
    setIsLoading(true);
  }, [router, userLoggedIn]);

  if (!isLoading) {
    return (
      <div id="preloader">
        <div className="preloader-spin"></div>
      </div>
    );
  }
  return <>{children}</>;
};

export default AuthLayout;
