import { authKey } from '@/constants/storageKey';
import { instance as axiosInstance } from '@/helper/axios/axiosInstance';
import { getBaseUrl } from '@/helper/config';
import { decodedToken } from '@/utils/jwt';
import { getFromLocalStorage, setToLocalStorage } from '@/utils/local-storage';

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken as string);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    const decodedData = decodedToken(authToken);
    return decodedData;
  } else {
    return '';
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  return !!authToken;
};

export const removeUserInfo = (key: string) => {
  return localStorage.removeItem(key);
};

export const getNewAccessToken = async () => {
  return await axiosInstance({
    url: `${getBaseUrl()}/auth/refresh-token`,
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  });
};
