import { tagTypes } from '@/redux/tag-types';
import { baseApi } from '../baseApi';
import { IBooking, IMeta } from '@/types';

const BOOKING_URL = '/booking';

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBooking: build.mutation({
      query: (data) => ({
        url: `${BOOKING_URL}/create`,
        method: 'POST',
        data: data,
      }),
      invalidatesTags: [tagTypes.booking],
    }),
    getBooking: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${BOOKING_URL}`,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: IBooking[], meta: IMeta) => {
        return {
          bookings: response,
          meta,
        };
      },
      providesTags: [tagTypes.booking],
    }),
    confirmBooking: build.mutation({
      query: (data) => ({
        url: `${BOOKING_URL}/${data?.id}/confirm`,
        method: 'PATCH',
        data: data?.body,
      }),
      invalidatesTags: [tagTypes.booking],
    }),
    cancelBooking: build.mutation({
      query: (id) => ({
        url: `${BOOKING_URL}/${id}/cancel`,
        method: 'PATCH',
      }),
      invalidatesTags: [tagTypes.booking],
    }),
    completeService: build.mutation({
      query: (id) => ({
        url: `${BOOKING_URL}/${id}/complete`,
        method: 'PATCH',
      }),
      invalidatesTags: [tagTypes.booking],
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetBookingQuery,
  useConfirmBookingMutation,
  useCancelBookingMutation,
  useCompleteServiceMutation,
} = bookingApi;
