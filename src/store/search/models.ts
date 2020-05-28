import { SearchedMovie } from 'shared/models'
export interface SearchReducer {
  films: SearchedMovie[];
  loading: boolean;
  error: string;
  currentPage: number;
  totalPages: number;
  totalResult: number | null;
  url: string
}
