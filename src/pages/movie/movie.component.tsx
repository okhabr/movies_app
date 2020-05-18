import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {requestMovieDetails} from 'store/movie/actions';
import {requestSimilarMovies} from 'store/similar-movies/actions';
import {RootStore} from 'store/store.models';
import {MovieDetails} from 'shared/models';
import {Genre} from 'shared/constants/genres';

import {AdditinalInfo} from './components/additional-info/additional-info.component';
import {BackBtn} from './components/back-btn/back-btn.component';
import {MovieCards} from './components/movie-cards/movie-cards.component';

import style from './movie.module.scss';

export const Movie: React.FC = () => {   
    const dispatch = useDispatch();
    const {id} = useParams();

    const [arrow, setArrow] = useState<string>('down');

    const film:MovieDetails = useSelector((state:RootStore) => state.filmDetails.film);

    const genres: Genre[] = film.genres;
    const movieGenres = genres.map( genre => <span className={style.movie__genre}>{genre.name}</span>)

    const changeArrow = () => arrow === 'up' ? setArrow('down') : setArrow('up');

    const additionalInfo = {
        Rate: film.vote_average,
        Runtime: `${film.runtime} minutes`,
        Popularity: `${film.popularity} views`,
        Year: film.release_date.split('-')[0],
        Countries: film.production_countries.map(country => country.name).join(),
        Budget: `$ ${film.budget}`,
        Revenue: `$ ${film.revenue}`
    }

    useEffect(() => {
        dispatch(requestMovieDetails(id))
        dispatch(requestSimilarMovies(id))
    }, [dispatch, id])

    return (
        <div className={style.movie__container}>
            <div>
                <img src={film.poster_path} alt="Movie poster" className={style.movie__poster}/>
            </div>
            <div className={style.movie__content}>
                <h2 className={style.movie__header}>{film.title}</h2>
                <h3 className={style.movie__tagline}>{film.tagline}</h3>
                <p className={style.movie__description}>{film.overview}</p>

                <section className={style.movie__sectionWrapper}>
                    <h6 className={style.movie__header_secondary}>Genres</h6>
                    {movieGenres}
                </section>
                
                <AdditinalInfo data={additionalInfo}/>

                <section>
                    <h6 className={style.movie__header_secondary} onClick={changeArrow}>
                        <span>Similar movies</span>
                        <span className="material-icons">{`keyboard_arrow_${arrow}`}</span>  
                    </h6>
                    <MovieCards open={arrow===`up`}/>
                </section>

                <div className={style.movie__backBtn}><BackBtn/></div>
            </div>
        </div>
    )
}