let posterPath = 'https://image.tmdb.org/t/p/original/';

export class View {

    constructor(selector) {
        this.element = document.querySelector(selector);
    }

    template(model) {

        return `
            <ul>
                ${model.getList().map(item => {
                    return `<li class="movie-card">
                        <div class="movie-card__infos">
                            <div>
                                <strong class="movie-card__infos__title">${item.title} (${this.formateDate(item.yearOfRelease)})</strong>
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
                            <p class="movie_card__sinopsis">${item.sinopsis}</p>
                        </div>
                    </li>`
                }).join('')}
            </ul>
        `;
    }

    render(model) {
        let template = this.template(model);
        this.element.innerHTML = template;
    }

    formatDate(date) {
        return date.slice(0, 4);
    }
}