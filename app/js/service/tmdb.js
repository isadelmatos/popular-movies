import { PopularMovie } from '../model/popular-movie.js';

export class MoviesFromTMDB {

    async fetchMovies(url) {
        const response = await fetch(url);
        const data = await response.json();

        if (data.total_results === 0) {
            return 'Nenhum resultado disponível para sua busca';
        }

        return data.results.map(movie => {
            return new PopularMovie(
                movie.title,
                movie.release_date,
                movie.vote_average,
                movie.poster_path,
                movie.overview,
                false
            );
        })
    }
}