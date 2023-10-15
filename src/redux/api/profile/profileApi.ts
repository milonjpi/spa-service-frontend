import { tagTypes } from '@/redux/tag-types';
import { baseApi } from '../baseApi';
import { IMeta, IUser } from '@/types';

const USER_URL = '/profile';

export const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query({
      query: () => ({
        url: `${USER_URL}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.user],
    }),
    updateProfile: build.mutation({
      query: (data) => ({
        url: `${USER_URL}`,
        method: 'PATCH',
        data: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useGetProfileQuery, useUpdateProfileMutation } = profileApi;
