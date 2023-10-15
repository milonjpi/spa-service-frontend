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