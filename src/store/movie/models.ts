import {MovieDetails} from 'shared/models';
export interface MovieReducer {
    film: MovieDetails;
    loading: boolean;
    error: string
}