export interface IMovie {
  adult: boolean;
  background_path: string|null;
  belongs_to_collection: object|null;
  budget: number;
  genres: object[];
  homepage: string|null;
  id: number;
  imdb_id: string|null;
  original_language: string;
  original_title: string;
  overview: string|null;
  popularity: number;
  poster_path: string|null;
  production_companies: object[];
  production_countries: object[];
  release_date: string;
  revenue: number;
  runtime: number|null;
  spoken_languages: object[];
  status: string;
  tagline: string|null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
