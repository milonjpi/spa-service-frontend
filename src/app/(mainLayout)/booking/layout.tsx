'use client';

import { getPublicUrl } from '@/helper/config';
import { isLoggedIn } from '@/services/auth.service';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const BookingLayout = ({ children }: { children: React.ReactNode }) => {
  const userLoggedIn = isLoggedIn();
  const router = useRouter();
  const path = usePathname();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userLoggedIn) {
      router.push(`/login?callbackUrl=${getPublicUrl() + path}`);
    }
    setIsLoading(true);
  }, [router, userLoggedIn, path]);

  if (!isLoading) {
    return (
      <div id="preloader">
        <div className="preloader-spin"></div>
      </div>
    );
  }
  return <>{children}</>;
};

export default BookingLayout;
