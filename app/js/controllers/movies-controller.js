import { ListOfPopularMovies } from '../model/list-of-popular-movies.js';
import { MoviesTemplate } from './../views/movies-template.js';
import { MoviesFromTMDB } from '../service/tmdb.js';
import { apiKey } from '../../config/api-key.js';

export class Controller {

    constructor() {
        this.list = new ListOfPopularMovies();
        this.moviesTemplate = new MoviesTemplate('#moviesView');
        this.moviesFromTMDB = new MoviesFromTMDB();
        this.getListOfFetchMovies();
    }

    async getListOfFetchMovies() {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`;
        let listOfMovies = await this.moviesFromTMDB.fetchMovies(url);

        listOfMovies.map((movie) => {
            this.list.addMovieToList(movie);
        })

        this.moviesTemplate.render(this.list);
    }

    async getResultsForSearchMovie(query) {
        const urlSearch = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&query=${query}&page=1&include_adult=false`;

        let result = await this.moviesFromTMDB.fetchMovies(urlSearch);

        this.list.removeAllMovies();

        if(typeof result === 'string') {
            this.moviesTemplate.render(result);
        }

        result.map((movie) => {
            this.list.createListOfSearchedMovie(movie);
        })
        this.moviesTemplate.render(this.list);
    }
}
