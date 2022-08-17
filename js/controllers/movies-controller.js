import { PopularMovie } from '../model/popular-movie.js';
import { ListOfPopularMovies } from '../model/list-of-popular-movies.js';
import { View } from '../views/view.js';

let listOfMovies = [
    {
        title: 'O predador e a caçada (2022)',
        yearOfRelease: 2022,
        rating: 8.1,
        posterUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/g7Ii9sYAFG96W7cvMQ4zXq39RJ5.jpg',
        sinopsis: 'Ambientado no mundo da Nação Comanche no início de 1700, "O Predador: A Caçada" é a história não contada de uma jovem guerreira altamente qualificada, desesperada para proteger seu povo do perigo iminente. Ela persegue e finalmente confronta sua presa, que acaba sendo um predador alienígena altamente evoluído com um arsenal tecnologicamente avançado, resultando em um confronto brutal e aterrorizante entre os adversários.',
        isFavorite: false
    },
    {
        title: 'Thor: amor e trovão (2022)',
        yearOfRelease: 2022,
        rating: 6.8,
        posterUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6OEBp0Gqv6DsOgi8diPUslT2kbA.jpg',
        sinopsis: 'Thor parte em uma jornada diferente de tudo que já enfrentou – uma busca pela paz interior. Mas sua aposentadoria é interrompida por um assassino galáctico conhecido como Gorr, o Carniceiro de Deus, que busca a extinção dos deuses. Para combater a ameaça, Thor pede a ajuda do Rei Valquíria, Korg e da ex-namorada Jane Foster, que – para surpresa de Thor – inexplicavelmente empunha seu martelo mágico, Mjolnir, como o Poderoso Thor. Juntos, eles embarcam em uma angustiante aventura cósmica para descobrir o mistério da vingança do God Butcher e detê-lo antes que seja tarde demais.',
        isFavorite: false
    },
    {
        title: 'Minions: A origem de Gru (2022)',
        yearOfRelease: 2022,
        rating: 7.8,
        posterUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yRGDZI2lYTgUM3ifsoFASU5z77v.jpg',
        sinopsis: 'A continuação das aventuras dos Minions, sempre em busca de um líder tirânico. Dessa vez, eles ajudam um Gru ainda criança, descobrindo como ser vilão.',
        isFavorite: false
    },
    {
        title: 'Jurassic World: O domínio (2022)',
        yearOfRelease: 2022,
        rating: 7.1,
        posterUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w6Jz1AgjscqBuS8qXBd0wUHz5zC.jpg',
        sinopsis: 'Quatro anos após a destruição da Ilha Nublar, os dinossauros agora vivem – e caçam – ao lado de humanos em todo o mundo. Esse frágil equilíbrio remodelará o futuro e determinará, de uma vez por todas, se os seres humanos continuarão sendo os principais predadores em um planeta que agora compartilham com as criaturas mais temíveis da história.',
        isFavorite: false
    },
    {
        title: 'Top Gun: Maverick (2022)',
        yearOfRelease: 2022,
        rating: 8.3,
        posterUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jTrXwK56EoLHHxfBkpwGdfmy2uh.jpg',
        sinopsis: 'Depois de mais de 30 anos de serviço como um dos principais aviadores da Marinha, Pete "Maverick" Mitchell está de volta, rompendo os limites como um piloto de testes corajoso. No mundo contemporâneo das guerras tecnológicas, Maverick enfrenta drones e prova que o fator humano ainda é essencial.',
        isFavorite: false
    }
]

export class Controller {

    constructor() {
        this.list = new ListOfPopularMovies();
        this.fetchMovies();
        this.templateView = new View('#moviesView');
        this.templateView.render(this.list);
    }

    fetchMovies() {
        listOfMovies.map(movie => {
            return new PopularMovie(
                movie.title,
                movie.yearOfRelease,
                movie.rating,
                movie.posterUrl,
                movie.sinopsis,
                movie.isFavorite
            );
        })

        for(let movie of listOfMovies) {
            this.list.addMovieToList(movie);
        }
    }
}
