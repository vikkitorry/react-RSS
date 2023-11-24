import {
  BASE_URL,
  id,
  jsonrpc,
  METHOD,
  lang,
  ERROR_MESSAGE,
} from './variables/variables';
import {
  IShowQueryParams,
  IShowsQueryParams,
  Response,
  ResponseShow,
} from './types/serviceTypes';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { loadSlice } from '../store/reducers/LoadSlice';

export const service = createApi({
  reducerPath: 'service',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getPageData: build.query<Response, IShowsQueryParams>({
      query: ({ page, query, pageSize }) => ({
        url: '',
        method: METHOD.post,
        headers: {
          'Content-Type': 'application/json',
          'Accept-Language': lang,
        },
        body: {
          jsonrpc,
          method: METHOD.getAllShows,
          params: {
            search: {
              query,
            },
            //api pages start from 0
            page: !page ? page : page - 1,
            pageSize,
          },
          id: 1,
        },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const { setisListLoad } = loadSlice.actions;
        dispatch(setisListLoad(true));
        try {
          await queryFulfilled;
        } catch (err) {
          throw new Error(ERROR_MESSAGE);
        } finally {
          dispatch(setisListLoad(false));
        }
      },
    }),

    getShow: build.query<ResponseShow, IShowQueryParams>({
      query: ({ showId }) => ({
        url: '',
        method: METHOD.post,
        headers: {
          'Content-Type': 'application/json',
          'Accept-Language': lang,
        },
        body: {
          jsonrpc,
          method: METHOD.getShow,
          params: {
            showId: showId ?? 0,
            withEpisodes: true,
          },
          id,
        },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const { setisDetaledLoad } = loadSlice.actions;
        dispatch(setisDetaledLoad(true));
        try {
          await queryFulfilled;
        } catch (err) {
          throw new Error(ERROR_MESSAGE);
        } finally {
          dispatch(setisDetaledLoad(false));
        }
      },
    }),
  }),
});

export const { useGetPageDataQuery, useGetShowQuery } = service;
