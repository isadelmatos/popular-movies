import { ListOfMovies } from '../model/list-of-movies.js';
import { MoviesTemplate } from './../views/movies-template.js';
import { MoviesFromTMDB } from '../service/tmdb.js';
import { apiKey } from '../../config/api-key.js';

export class Controller {

    constructor() {
        this.listOfPopularMovies = new ListOfMovies();
        this.moviesTemplate = new MoviesTemplate('#moviesView');
        this.moviesFromTMDB = new MoviesFromTMDB();
        this.getListOfFetchMovies();
    }

    async getListOfFetchMovies() {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`;
        let list = await this.moviesFromTMDB.fetchMovies(url);

        list.map((movie) => {
            this.listOfPopularMovies.addMovieToList(movie);
        })

        this.moviesTemplate.render(this.listOfPopularMovies);
    }

    async getResultsForSearchMovie(query) {

        this.listOfResults = new ListOfMovies();
        
        let urlSearch = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&query=${query}&page=1`;
        let result = await this.moviesFromTMDB.fetchMovies(urlSearch);

        if(typeof result === 'string') {
            this.moviesTemplate.render(result);
            return;
        }

        result.map((movie) => {
            this.listOfResults.addMovieToList(movie);
        })
        this.moviesTemplate.render(this.listOfResults);
    }
}
