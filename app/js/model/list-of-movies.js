export class ListOfMovies {
    movies = [];

    addMovieToList(movie) {
        this.movies.push(movie);
    }

    getList() {
        let list = this.movies;
        return list;
    }

    setList() {
        return this.movies;
    }
}