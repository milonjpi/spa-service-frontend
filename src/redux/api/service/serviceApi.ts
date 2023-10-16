import { tagTypes } from '@/redux/tag-types';
import { baseApi } from '../baseApi';
import { IMeta, IService } from '@/types';

const SERVICE_URL = '/service';

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createService: build.mutation({
      query: (data) => ({
        url: `${SERVICE_URL}/create`,
        method: 'POST',
        data: data,
      }),
      invalidatesTags: [tagTypes.service],
    }),
    getService: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${SERVICE_URL}`,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: IService[], meta: IMeta) => {
        return {
          services: response,
          meta,
        };
      },
      providesTags: [tagTypes.service],
    }),
    getSingleService: build.query({
      query: (id: string | undefined) => ({
        url: `${SERVICE_URL}/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.service],
    }),
    deleteService: build.mutation({
      query: (id: string) => ({
        url: `${SERVICE_URL}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [tagTypes.service],
    }),
    updateService: build.mutation({
      query: (data) => ({
        url: `${SERVICE_URL}/${data?.id}`,
        method: 'PATCH',
        data: data?.body,
      }),
      invalidatesTags: [tagTypes.service],
    }),
  }),
});

export const {
  useCreateServiceMutation,
  useGetServiceQuery,
  useGetSingleServiceQuery,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
} = serviceApi;
