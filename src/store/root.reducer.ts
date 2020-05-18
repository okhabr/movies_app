import {combineReducers} from 'redux';
import { similarMoviesReducer } from './similar-movies/reducer';
import { movieReducer } from './movie/reducer';
import { searchReducer } from './search/reducer';


export default combineReducers({
    search: searchReducer,
    filmDetails: movieReducer,
    similarFilms: similarMoviesReducer,
})
