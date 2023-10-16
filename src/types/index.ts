export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export interface IMeta {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}

export interface IUser {
  id: string;
  fullName: string;
  email: string;
  password: string;
  mobile?: string;
  address?: string;
  role: string;
  profileImg: string;
  createdAt: string;
  updatedAt: string;
}

export type IRole = 'super_admin' | 'admin' | 'user';

export interface IService {
  id: string;
  serviceNo: string;
  serviceName: string;
  description: string;
  category: string;
  photo?: string;
  price: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export type IServiceCategory = 'male' | 'female';
export type IServiceStatus = 'upcoming' | 'available' | 'notAvailable';


export interface IBlog {
  id: string;
  title: string;
  description: string;
  photo?: string;
  userId: number;
  writtenBy?: IUser;
  createdAt: string;
  updatedAt: string;
}

export interface IFaq {
  id: string;
  question: string;
  answer: string;
  createdAt: string;
  updatedAt: string;
}