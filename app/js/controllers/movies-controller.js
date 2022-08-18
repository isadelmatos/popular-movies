import { ListOfPopularMovies } from '../model/list-of-popular-movies.js';
import { View } from '../views/view.js';
import { MoviesFromTMDB } from '../service/tmdb.js';
import { apiKey } from '../../config/api-key.js';

const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`;


export class Controller {

    constructor() {
        this.list = new ListOfPopularMovies();
        this.templateView = new View('#moviesView');
        this.moviesFromTMDB = new MoviesFromTMDB();
        this.getListOfFetchMovies();
    }

    async getListOfFetchMovies() {
        let listOfMovies = await this.moviesFromTMDB.fetchMovies(url);

        listOfMovies.map((movie) => {
            this.list.addMovieToList(movie);
        })

        this.templateView.render(this.list);
    }
}
