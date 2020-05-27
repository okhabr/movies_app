import {genres} from 'shared/constants/genres';
import {FilterValues} from 'shared/models';

export const key = '7238931a9385a7e423e1a7ac5d2d8ec6'

export const api =
  `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=`

export const movieDetailsAPI = (id: number) =>
  `https://api.themoviedb.org/3/movie/${id}?api_key=7238931a9385a7e423e1a7ac5d2d8ec6&language=en-US`

export const getSimilar = (id: number) =>
  `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=7238931a9385a7e423e1a7ac5d2d8ec6&language=en-US&page=1`

export const getTop = `https://api.themoviedb.org/3/movie/top_rated?api_key=7238931a9385a7e423e1a7ac5d2d8ec6&language=en-US&page=1`

export const filterMovies = (filter:FilterValues) => {
  const genresList: string = genres.filter( genre => filter.genres.includes(genre.name)).map(genre => genre.id).join();

  const genresPart = genresList ? `&with_genres=${genresList}` : '';
  return `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=${filter.excludeAdult}&include_video=false&page=1&year=${filter.year}${genresPart}`
}
//DETAILS ABOUT MOVIE BY ID
// https://developers.themoviedb.org/3/movies/get-movie-details

//SIMILAR MOVIES
// https://developers.themoviedb.org/3/movies/get-movie-recommendations

//FILTER MOVIES
//https://developers.themoviedb.org/3/discover/movie-discover
