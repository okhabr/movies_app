import {SearchedMovie} from 'shared/models';
export interface SimilarMoviesReducer {
    films: SearchedMovie[];
    loading: boolean;
    error: string
}