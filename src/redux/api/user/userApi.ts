import { tagTypes } from '@/redux/tag-types';
import { baseApi } from '../baseApi';

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
  }),
});

export const { useCreateUserMutation } = userApi;
