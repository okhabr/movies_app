import {SimilarMoviesReducer} from './models';
import {searchTypes} from './types';

const initialState : SimilarMoviesReducer = {
    films: [],
    loading: false,
    error: ''
}

export const similarMoviesReducer = (state = initialState, action: any) => {
    switch(action.type){
        case searchTypes.REQUEST:
            return {
                ...state,
                loading: true
            }
        case searchTypes.SUCCESS:
            return {
                ...state,
                films: action.payload,
                loading: false
            }
        case searchTypes.ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}
