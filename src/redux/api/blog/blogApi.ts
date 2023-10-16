import { tagTypes } from '@/redux/tag-types';
import { baseApi } from '../baseApi';
import { IBlog, IMeta } from '@/types';

const BLOG_URL = '/blog';

export const blogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBlog: build.mutation({
      query: (data) => ({
        url: `${BLOG_URL}/create`,
        method: 'POST',
        data: data,
      }),
      invalidatesTags: [tagTypes.blog],
    }),
    getBlog: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${BLOG_URL}`,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: IBlog[], meta: IMeta) => {
        return {
          blogs: response,
          meta,
        };
      },
      providesTags: [tagTypes.blog],
    }),
    deleteBlog: build.mutation({
      query: (id: string) => ({
        url: `${BLOG_URL}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [tagTypes.blog],
    }),
    updateBlog: build.mutation({
      query: (data) => ({
        url: `${BLOG_URL}/${data?.id}`,
        method: 'PATCH',
        data: data?.body,
      }),
      invalidatesTags: [tagTypes.blog],
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useGetBlogQuery,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogApi;
