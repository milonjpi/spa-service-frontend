import { tagTypes } from '@/redux/tag-types';
import { baseApi } from '../baseApi';
import { IMeta, IUser } from '@/types';

const USER_URL = '/user';

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createUser: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/create`,
        method: 'POST',
        data: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    getUser: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${USER_URL}`,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: IUser[], meta: IMeta) => {
        return {
          users: response,
          meta,
        };
      },
      providesTags: [tagTypes.user],
    }),
    deleteUser: build.mutation({
      query: (id: string) => ({
        url: `${USER_URL}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useCreateUserMutation, useGetUserQuery, useDeleteUserMutation } =
  userApi;
