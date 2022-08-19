import { Controller } from "./controllers/movies-controller.js";
const controller = new Controller();

const keyEnter = 'Enter';

const formSearch = document.querySelector('#form-search');

formSearch.addEventListener('keypress', (event) => {
    if(event.key === keyEnter) {
        event.preventDefault();
        const queryValue = event.target.value;
        controller.getResultsForSearchMovie(queryValue);
        event.target.value = "";
    }
})

