import { View } from "./view.js";
const posterPath = 'https://image.tmdb.org/t/p/w500';

export class MoviesTemplate extends View {

    template(model) {

        if(typeof model === 'string') {
            return `<span style="display: flex; justify-content: center; font-size: 2rem; font-weight: 500;">${model}</span>`;
        }

        return `
            <ul>
                ${model.getList().map(item => {
                    return `<li class="movie-card">
                        <div class="movie-card__infos">
                            <div>
                                <strong class="movie-card__infos__title">${item.title} ${this.formatDate(item.yearOfRelease)}</strong>
                                <div class="movie-card__infos__details">
                                    <small class="movie-card__infos__detail detail-rating" title="Nota de avaliação"> 
                                        <span class="label-accessiblity">Nota de avaliação</span>${item.rating}
                                    </small>
                                    <small class="movie-card__infos__detail detail-favorite">
                                        <span class="label-accessiblity">Ação</span>Favoritar
                                    </small>
                                </div>
                            </div>
                            <div class="poster-proportion">
                                <img src=${posterPath}${item.posterUrl} class="movie-card__infos__poster" alt="Poster do filme">
                            </div>
                        </div>
                        <div>
                            <p class="movie_card__sinopsis">${this.formatSynopsis(item.synopsis)}</p>
                        </div>
                    </li>`
                }).join('')}
            </ul>
        `;
    }
    

    formatDate(date) {
        if(date === '') {
            return ' ';
        } 
        return `(${date.slice(0, 4)})`;
    }

    formatSynopsis(text) {

        if(text === "") {
            return 'Sem sinopse disponível';
        }

        return text;
    }
}