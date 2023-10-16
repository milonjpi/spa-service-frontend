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
  profileImg?: string;
  createdAt: string;
  updatedAt: string;
  reviewRatings?: IReview[];
  bookings?: IBooking[];
  notifications?: INotification[];
  feedbacks?: IFeedback[];
  blogs?: IBlog[];
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
  reviewRatings?: IReview[];
  bookings?: IBooking[];
}

export type IServiceCategory = 'male' | 'female';
export type IServiceStatus = 'upcoming' | 'available' | 'notAvailable';

export interface IReview {
  id: string;
  serviceId: string;
  service?: IService;
  userId: string;
  user?: IUser;
  review: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
}

export interface IBooking {
  id: string;
  bookingNo: string;
  serviceId: string;
  service?: IService;
  userId: string;
  user?: IUser;
  scheduleTime: string;
  price: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface INotification {
  id: string;
  userId: string;
  user?: IUser;
  notification: string;
  viewed: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IFeedback {
  id: string;
  userId: string;
  user?: IUser;
  comment: string;
  suggestion?: string;
  createdAt: string;
  updatedAt: string;
}

export interface IBlog {
  id: string;
  title: string;
  description: string;
  photo?: string;
  userId: string;
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