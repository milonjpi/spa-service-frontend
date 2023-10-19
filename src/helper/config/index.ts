export const getBaseUrl = (): string => {
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    'https://spa-service-backend.vercel.app/api/v1'
  );
};

export const getPublicUrl = (): string => {
  return (
    process.env.NEXT_PUBLIC_URL || 'https://spa-service-frontend.vercel.app'
  );
};
