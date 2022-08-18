import { PopularMovie } from '../model/popular-movie.js';

export class MoviesFromTMDB {

    async fetchMovies(url) {

        const response = await fetch(url);
        const data = await response.json();
        let list = data.results;

        return list.map(movie => {
            return new PopularMovie(
                movie.title,
                 movie.release_date,
                 movie.vote_average,
                 movie.backdrop_path,
                 movie.overview,
                 false
            ); 
        })
    }
}