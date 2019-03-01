import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import MediaCard from '../../components/MediaCard/MediaCard';
import { Show } from './../../types'
import axios from 'axios'
import { parseShows } from '../../utils';

type Props = {}

type State = {
    shows: Show[]
}

class Trending extends Component<Props, State> {

    state:State = {
        shows: []
    }

    componentDidMount = async () => {
        const shows = await this.getTrending()
        this.setState({ shows })
    }
    
    getTrending = async () => {
        const { data: { results: shows } } = await axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_MOVIE_DB_API}`)
        return parseShows(shows)
    }    

    render() {
      return (
        this.state.shows.map(show => <Link key={show.id} to={`/tv/${show.name}-${show.id}`}><MediaCard 
            name={show.name}
            hero={show.hero}
            overview={show.overview}
            popularity={show.popularity}
            poster={show.poster}
            releaseDate={show.releaseDate}
            voteAverage={show.voteAverage}
            voteCount={show.voteCount}
        /></Link>)
      )
    }

}

export default Trending