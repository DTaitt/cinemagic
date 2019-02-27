import React, { Component } from 'react'

import axios from 'axios'

interface Film {
    id: string,
    original_title: string,
}

type Props = {}
type State = {
    films: Film[]
}

class Trending extends Component<Props, State> {

    state:State = {
        films: []
    }

    componentDidMount = () => {
        this.getTrending()
    }
    
    getTrending = async () => {
        const { data: { results: films } } = await axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=6164a5e5332ccb064223fe441c57fea0')
        this.setState({ films })
    }    

    render() {
      return (
        this.state.films.map(film => <p key={film.id}>{film.original_title}</p>)
      )
    }

}

export default Trending