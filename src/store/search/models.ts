import { SearchedMovie } from 'shared/models'
export interface SearchReducer {
  films: SearchedMovie[];
  loading: boolean;
  error: string;
}
