import { tagTypes } from '@/redux/tag-types';
import { baseApi } from '../baseApi';
import { IFeedback, IMeta } from '@/types';

const FEEDBACK_URL = '/feedback';

export const feedbackApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createFeedback: build.mutation({
      query: (data) => ({
        url: `${FEEDBACK_URL}/create`,
        method: 'POST',
        data: data,
      }),
      invalidatesTags: [tagTypes.feedback],
    }),
    getFeedback: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${FEEDBACK_URL}`,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: IFeedback[], meta: IMeta) => {
        return {
          feedbacks: response,
          meta,
        };
      },
      providesTags: [tagTypes.feedback],
    }),
    getPublicFeedback: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${FEEDBACK_URL}/public-feedback`,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: IFeedback[]) => {
        return {
          feedbacks: response,
        };
      },
      providesTags: [tagTypes.feedback],
    }),
  }),
});

export const {
  useCreateFeedbackMutation,
  useGetFeedbackQuery,
  useGetPublicFeedbackQuery,
} = feedbackApi;
