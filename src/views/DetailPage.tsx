import React, { Component } from 'react'

import { URL_PREFIX } from '../utils';
import { Card as _Card } from 'react-bootstrap'
import axios from 'axios';
import styled from 'styled-components'

type Show = {
    poster_path: string
    name: string
    overview: string
    created_by: {
        name: string
    }
}

type State = {
    creator: string
    isLoaded: boolean
    name: string
    numberOfSeasons: number,
    overview: string
    poster: string
    runTime: number,
    url: string,
    voteAverage: number,
    voteCount: number,

}

type Props = {
    match: {
        params: {
            showId: string
        }
    }
}

class DetailPage extends Component<Props, State> {

    state:State= {
        creator: '',
        isLoaded: false,
        name: '',
        numberOfSeasons: 0,
        overview: '',
        poster: '',
        runTime: 0,
        url: '',
        voteAverage: 0,
        voteCount: 0
    }

    componentDidMount = async () => {
      const { data:show } = await axios.get(`https://api.themoviedb.org/3/tv/${this.props.match.params.showId}?api_key=${process.env.REACT_APP_MOVIE_DB_API}`)
      console.log(show)
      this.setState({
          creator: show.created_by[0].name,
          isLoaded:true, 
          name: show.name,
          numberOfSeasons: show.number_of_seasons,
          overview: show.overview,
          poster: show.poster_path,
          runTime: show.episode_run_time[0],
          url: show.homepage,
          voteAverage: show.vote_average,
          voteCount: show.vote_count,
        })
    }
    
    render(){
        return(
            this.state.isLoaded &&
            (<Card>
                <Card.Img src={URL_PREFIX + this.state.poster} />
                <Card.Body>
                    <a href={this.state.url}><CardTitle>{this.state.name}</CardTitle></a> 
                    <Card.Text>{this.state.overview}</Card.Text>
                    <Info>
                        <Card.Text>Created By: {this.state.creator}</Card.Text>
                        <Card.Text>Seasons: {this.state.numberOfSeasons}</Card.Text>
                        <Card.Text>Runtime: {this.state.runTime}</Card.Text>
                        <Card.Text>Vote Average: {this.state.voteAverage} / 10</Card.Text>
                        <Card.Text>Vote Count: {this.state.voteCount}</Card.Text>
                    </Info>
                </Card.Body>
            </Card>)
        )
    }
}

const Card = styled(_Card)`
    width: 300px;
`

const CardTitle = styled(_Card.Title)`
    text-align: center
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default DetailPage