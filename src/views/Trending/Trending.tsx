import React, { Component } from 'react'

import MediaCard from '../../components/MediaCard/MediaCard';
import axios from 'axios'
import { parseFilms } from '../../utils';

type Film = {
    id: string,
    title: string,
    hero: string,
    overview: string,
    popularity: number,
    poster: string,
    releaseDate: string,
    voteAverage: number,
    voteCount: number,
}

type Props = {}

type State = {
    films: Film[]
}

class Trending extends Component<Props, State> {

    state:State = {
        films: []
    }

    componentDidMount = async () => {
        const films = await this.getTrending()
        this.setState({ films })
    }
    
    getTrending = async () => {
        const { data: { results: films } } = await axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=6164a5e5332ccb064223fe441c57fea0')
        return parseFilms(films)
    }    

    render() {
      return (
        this.state.films.map(film => <MediaCard 
            key={film.id}
            title={film.title}
            hero={film.hero}
            overview={film.overview}
            popularity={film.popularity}
            poster={film.poster}
            releaseDate={film.releaseDate}
            voteAverage={film.voteAverage}
            voteCount={film.voteCount}
        />)
      )
    }

}

export default Trending