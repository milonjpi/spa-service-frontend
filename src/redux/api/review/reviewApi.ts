import { tagTypes } from '@/redux/tag-types';
import { baseApi } from '../baseApi';

const REVIEW_URL = '/blog';

export const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createReview: build.mutation({
      query: (data) => ({
        url: `${REVIEW_URL}/create`,
        method: 'POST',
        data: data,
      }),
      invalidatesTags: [tagTypes.review],
    }),
    deleteReview: build.mutation({
      query: (id: string) => ({
        url: `${REVIEW_URL}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [tagTypes.review],
    }),
  }),
});

export const { useCreateReviewMutation, useDeleteReviewMutation } = reviewApi;
