import {
  BASE_URL,
  id,
  jsonrpc,
  METHOD,
  lang,
  ERROR_MESSAGE,
} from './variables/variables';
import {
  RequestShow,
  ResponseShow,
  DetailedShowSchema,
} from './types/serviceTypes';

export async function fetchShowData(showId: number = 0): Promise<DetailedShowSchema> {
  const body: RequestShow = {
    jsonrpc,
    method: METHOD.getShow,
    params: {
      showId,
      withEpisodes: true,
    },
    id,
  };


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
}
