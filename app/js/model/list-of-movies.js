export class ListOfMovies {
    movies = [];

    addMovieToList(movie) {
        this.movies.push(movie);
    }

    getList() {
        const list = this.movies;
        return list;
    }
}