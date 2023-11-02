export const ERROR_MESSAGE = 'There is nothing here';

export const BASE_URL = 'https://api.myshows.me/v2/rpc/';
export const defaultPageSize = 20;
export const lang = 'en';
export const id = 1;
export const jsonrpc = '2.0';
export enum METHOD {
  getAllShows = 'shows.Get',
  getShow = 'shows.GetById',
  post = 'POST',
}

export type Response = {
  jsonrpc: string;
  result: ShowSchema[];
};

export type ResponseShow = {
  jsonrpc: string;
  result: ShowSchema;
};

export type RequestAllShows = {
  jsonrpc: string;
  method: string;
  params: {
    search: {
      query: string;
    };
    page?: number;
    pageSize?: number;
  };
  id: number;
};

export type RequestShow = {
  jsonrpc: string;
  method: string;
  params: {
    showId: number;
    withEpisodes: boolean;
  };
  id: number;
};

export type ShowSchema = {
  id?: number;
  title?: string;
  status?: string;
  totalSeasons?: number;
  year?: number;
  watching?: number;
  voted?: number;
  rating?: number;
  image?: string;
  onlineCount?: number;
  promoUrl?: string;
  category?: string;
};
