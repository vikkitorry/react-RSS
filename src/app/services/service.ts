import {
  BASE_URL,
  id,
  jsonrpc,
  METHOD,
  defaultPageSize,
  lang,
  ERROR_MESSAGE,
} from './variables/variables';
import {
  Response,
  RequestAllShows,
  RequestShow,
  ShowSchema,
  ResponseShow,
  DetailedShowSchema,
} from './types/serviceTypes';
import { SEARCH_LOCALSTORAGE_KEY } from '../../utils/constants/Constants';

export const getShow = async (
  showId: number = 0
): Promise<DetailedShowSchema> => {
  const body: RequestShow = {
    jsonrpc,
    method: METHOD.getShow,
    params: {
      showId,
      withEpisodes: true,
    },
    id,
  };
  try {
    const resp = await fetch(BASE_URL, {
      method: METHOD.post,
      headers: {
        'Content-Type': 'application/json',
        'Accept-Language': lang,
      },
      body: JSON.stringify(body),
    });
    const res: ResponseShow = await resp.json();
    return res.result;
  } catch (err) {
    throw new Error(ERROR_MESSAGE);
  }
};

export const getPageData = async (
  currentPage: number = 0,
  query: string = '',
  pageSize: number = defaultPageSize
): Promise<ShowSchema[]> => {
  const page = !currentPage ? currentPage : currentPage - 1;
  const body: RequestAllShows = {
    jsonrpc,
    method: METHOD.getAllShows,
    params: {
      search: {
        query,
      },
      page,
      pageSize,
    },
    id: 1,
  };
  try {
    localStorage.setItem(SEARCH_LOCALSTORAGE_KEY, query);
    const resp = await fetch(BASE_URL, {
      method: METHOD.post,
      headers: {
        'Content-Type': 'application/json',
        'Accept-Language': lang,
      },
      body: JSON.stringify(body),
    });
    const results: Response = await resp.json();
    if (!results.result.length) {
      if (!results.result.length) {
        throw new Error();
      }
    }
    return results.result;
  } catch (err) {
    throw new Error(ERROR_MESSAGE);
  }
};
