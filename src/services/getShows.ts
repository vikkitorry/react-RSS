import { BASE_URL, jsonrpc, METHOD, lang } from './variables/variables';
import { IShowsQueryParams, Response, ShowSchema } from './types/serviceTypes';

export async function fetchAllShowsData({
  page,
  query,
  pageSize,
}: IShowsQueryParams): Promise<ShowSchema[]> {
  const body = {
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
  };

  const resp = await fetch(BASE_URL, {
    method: METHOD.post,
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': lang,
    },
    body: JSON.stringify(body),
  });

  const res: Response = await resp.json();
  return res.result;
}
