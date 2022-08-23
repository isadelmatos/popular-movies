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
        
        let listFromLocalStorage = this.getFromLocalStorage();
        list.map((movie) => {
            if(listFromLocalStorage.some(favMovie => favMovie.title === movie.title)) {
                movie.isFavorite = true;
                return this.listOfPopularMovies.addMovieToList(movie);
            }
            this.listOfPopularMovies.addMovieToList(movie);
        })

        this.moviesTemplate.render(this.listOfPopularMovies);
        this.handleFavorite(this.listOfPopularMovies);
    }

    async getResultsForSearchMovie(query) {

        this.listOfResults = new ListOfMovies();
        let urlSearch = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&query=${query}&page=1`;
        let result = await this.moviesFromTMDB.fetchMovies(urlSearch);

        if(typeof result === 'string') {
            this.moviesTemplate.render(result);
            return;
        }

        let listFromLocalStorage = this.getFromLocalStorage();
        result.map((movie) => {
            if(listFromLocalStorage.some(favMovie => favMovie.title === movie.title)) {
                movie.isFavorite = true;
                return this.listOfResults.addMovieToList(movie);
            }
            this.listOfResults.addMovieToList(movie);
        })
        this.moviesTemplate.render(this.listOfResults);
        this.handleFavorite(this.listOfResults);
    }

    handleFavorite(list) {
        let favoriteMovies = this.getFromLocalStorage();
        let mylist = list.setList(); 
        let element = document.querySelectorAll('.icon-fav');

        element.forEach((item, index) => {
            item.addEventListener('click', (e) => {

                let icon = e.target.classList;
                let favoriteStatus = mylist[index].isFavorite;

                if(favoriteStatus) {
                    mylist[index].isFavorite = false;

                    let foundIndex = favoriteMovies.findIndex(movieItem => movieItem.title === mylist[index].title);
                    favoriteMovies.splice(foundIndex, 1);
                    this.updateLocalStorage(favoriteMovies);
                    icon.replace('bi-heart-fill', 'bi-heart');

                } else {

                    mylist[index].isFavorite = true;

                    favoriteMovies.push(mylist[index]);
                    this.updateLocalStorage(favoriteMovies);
                    icon.replace('bi-heart','bi-heart-fill');
                }
            })})
    }

    getFromLocalStorage() {
        return JSON.parse(localStorage.getItem('listOfFavoriteMovies')) ?? [];
    }

    updateLocalStorage(list) {
        return localStorage.setItem('listOfFavoriteMovies', JSON.stringify(list));
    }

    getFavoriteMovies(list) {
        let favoriteMovies = new ListOfMovies();
        list.map((movie) => {
            favoriteMovies.addMovieToList(movie);
        });
        this.moviesTemplate.render(favoriteMovies);
        this.handleFavorite(favoriteMovies);
    }
}
