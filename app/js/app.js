import { Controller } from "./controllers/movies-controller.js";
const controller = new Controller();

const formSearch = document.querySelector('#form-search');

formSearch.addEventListener('keypress', (event) => {
    if(event.key === 'Enter') {
        event.preventDefault();
        const queryValue = event.target.value;
        controller.getResultsForSearchMovie(queryValue);
        event.target.value = "";
    }
});

const checkFavorites = document.querySelector('#favorite-movies');

checkFavorites.addEventListener('click', (e) => {
    if(e.target.checked) {
         let favoriteMovies = controller.getFromLocalStorage();
         controller.getFavoriteMovies(favoriteMovies);
    } else {
        window.location.reload();
    }
 });
