import { tagTypes } from '@/redux/tag-types';
import { baseApi } from '../baseApi';
import { IMeta, IUser } from '@/types';

const FAQ_URL = '/faq';

export const faqApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createFaq: build.mutation({
      query: (data) => ({
        url: `${FAQ_URL}/create`,
        method: 'POST',
        data: data,
      }),
      invalidatesTags: [tagTypes.faq],
    }),
    getFaq: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${FAQ_URL}`,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: IUser[], meta: IMeta) => {
        return {
          faqs: response,
          meta,
        };
      },
      providesTags: [tagTypes.faq],
    }),
    deleteFaq: build.mutation({
      query: (id: string) => ({
        url: `${FAQ_URL}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [tagTypes.faq],
    }),
    updateFaq: build.mutation({
      query: (data) => ({
        url: `${FAQ_URL}/${data?.id}`,
        method: 'PATCH',
        data: data?.body,
      }),
      invalidatesTags: [tagTypes.faq],
    }),
  }),
});

export const {
  useCreateFaqMutation,
  useGetFaqQuery,
  useUpdateFaqMutation,
  useDeleteFaqMutation,
} = faqApi;
