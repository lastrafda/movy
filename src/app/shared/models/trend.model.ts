import {IGenre} from './genre.model';

export interface ITrend {
  poster_path: string|null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: IGenre[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string|null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface ITrendResponse {
  page: number;
  results: ITrend[];
  total_pages: number;
  total_results: number;
}

export interface IError {
  status_message: string;
  status_code: number;
  success: boolean;
}
