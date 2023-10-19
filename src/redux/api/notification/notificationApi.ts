import { tagTypes } from '@/redux/tag-types';
import { baseApi } from '../baseApi';
import { IMeta, INotification } from '@/types';

const NOTIFICATION_URL = '/notification';

export const notificationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getNotification: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${NOTIFICATION_URL}`,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: INotification[], meta: IMeta) => {
        return {
          notifications: response,
          meta,
        };
      },
      providesTags: [tagTypes.notification],
    }),
    markAsReadNotification: build.mutation({
      query: (data) => ({
        url: `${NOTIFICATION_URL}/${data?.id}`,
        method: 'PATCH',
      }),
      invalidatesTags: [tagTypes.notification],
    }),
  }),
});

export const { useGetNotificationQuery, useMarkAsReadNotificationMutation } =
  notificationApi;
