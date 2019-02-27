export const URL_PREFIX = 'https://image.tmdb.org/t/p/w1280'

export const parseFilms = films => films.map(film => {
    return({
        ...film,
        hero: film.backdrop_path,
        poster: film.poster_path,
        releaseDate: film.release_date,
        voteAverage: film.vote_average,
        voteCount: film.vote_count
    })
})
