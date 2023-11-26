import { BASE_URL, id, jsonrpc, METHOD, lang } from './variables/variables';
import {
  IShowQueryParams,
  IShowsQueryParams,
  Response,
  ResponseShow,
} from './types/serviceTypes';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import { showsSlice } from '../store/reducers/ShowsSlice';

export const service = createApi({
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getPageData: build.query<Response, IShowsQueryParams>({
      query: ({ page, query, limit }) => ({
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
            pageSize: limit,
          },
          id: 1,
        },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const { setAllShows } = showsSlice.actions;
        try {
          const resp = await queryFulfilled;
          if (!resp.data.result.length) {
            throw new Error();
          }
          dispatch(setAllShows(resp.data.result));
        } catch (err) {
          console.log();
        }
      },
    }),

    getShow: build.query<ResponseShow, IShowQueryParams>({
      query: ({ show }) => ({
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
            showId: show ?? 0,
            withEpisodes: true,
          },
          id,
        },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const { setShow } = showsSlice.actions;
        try {
          const resp = await queryFulfilled;
          if (!resp.data.result) {
            throw new Error();
          }
          dispatch(setShow(resp.data.result));
        } catch (err) {
          console.log();
        }
      },
    }),
  }),
});

export const { getShow, getPageData } = service.endpoints;
export const { useGetPageDataQuery, useGetShowQuery } = service;
