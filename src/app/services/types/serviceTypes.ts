export type Response = {
  jsonrpc: string;
  result: ShowSchema[];
};

export type ResponseShow = {
  jsonrpc: string;
  result: DetailedShowSchema;
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

export type DetailedShowSchema = {
  id: number;
  title?: string;
  titleOriginal?: string;
  description?: string;
  totalSeasons?: number;
  status?: string;
  country?: string;
  countryTitle?: string;
  started?: string;
  ended?: string;
  year?: number;
  kinopoiskId?: number;
  kinopoiskRating?: number;
  kinopoiskVoted?: number;
  kinopoiskUrl?: string;
  tvrageId?: number;
  imdbId?: string;
  imdbRating?: number;
  imdbVoted?: number;
  imdbUrl?: string;
  watching?: number;
  watchingTotal?: number;
  voted?: number;
  rating?: number;
  runtime?: number;
  runtimeTotal?: string;
  image?: string;
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

export interface IShowsQueryParams {
  page: number;
  search: string;
  pageSize: number;
}

export interface IShowQueryParams {
  showId: number | null;
}
