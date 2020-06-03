import { SearchReducer } from './search/models'
import { MovieReducer } from './movie/models'
import { SimilarMoviesReducer } from './similar-movies/models'
import {Login} from './login/models'

export interface RootStore {
  search: SearchReducer;
  filmDetails: MovieReducer;
  similarFilms: SimilarMoviesReducer;
  login: Login
}
