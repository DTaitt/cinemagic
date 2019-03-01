export const URL_PREFIX = 'https://image.tmdb.org/t/p/w1280'

export const seperateBy = (str, delimiter) => (str.split(' ').join(delimiter))

export const parseShows = shows => shows.map(show => {
    return({
        ...show,
        name: seperateBy(show.name, '_').toLowerCase(),
        hero: show.backdrop_path,
        poster: show.poster_path,
        releaseDate: show.release_date,
        voteAverage: show.vote_average,
        voteCount: show.vote_count
    })
})
