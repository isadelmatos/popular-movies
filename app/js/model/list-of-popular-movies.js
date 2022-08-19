export class ListOfPopularMovies {
    movies = [];

    addMovieToList(movie) {
        this.movies.push(movie);
    }

    getList() {
        const list = this.movies;
        return list;
    }

    removeAllMovies() {
        return this.movies.splice(0, this.movies.length);
    }

    createListOfSearchedMovie(movie) {
        this.movies.push(movie);
    }
}