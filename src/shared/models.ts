export interface SearchedMovie {
    id: string;
    title: string;
    popularity: string;
    release_date: string;
    overview: string;
    poster_path: string;
    genre_ids: number[];
    vote_average: number
}

interface genre {
    id: number;
    name: string;
}

interface Country {
    name: string;
}

export interface MovieDetails {
    id: number;
    adult: boolean;
    genres: genre[];
    tagline: string;
    title: string;
    vote_average: number;
    popularity: number;
    release_date: string,
    revenue: number;
    budget: number,
    runtime: number;
    production_countries: Country[];
    overview: string; 
    poster_path: string;
    backdrop_path: string;
}