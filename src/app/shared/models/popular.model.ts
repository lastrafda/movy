export interface IPopularMovie {
  poster_path: string|null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: string[];
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

export interface IPopularMovieResponse {
  page: number;
  results: IPopularMovie[];
}
