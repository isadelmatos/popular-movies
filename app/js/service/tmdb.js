import { Movie } from '../model/movie.js';

export class MoviesFromTMDB {

    async fetchMovies(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
    
            if (data.total_results === 0) {
                return 'Nenhum resultado disponível para sua busca';
            }
    
            return data.results.map(movie => {
                return new Movie(
                    movie.title,
                    movie.release_date,
                    movie.vote_average,
                    movie.poster_path,
                    movie.overview,
                    false
                );
            })
        } catch (error) {
            console.log(error);
        }

    }
}