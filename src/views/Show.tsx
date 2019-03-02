import { Dropdown, Card as _Card } from 'react-bootstrap'
import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { URL_PREFIX } from '../utils';
import axios from 'axios';
import styled from 'styled-components'

type Season = {
    name: string,
    season_number: string,
}

type State = {
    creator: string
    isLoaded: boolean
    name: string
    numberOfSeasons: number,
    overview: string
    poster: string
    runTime: number,
    seasons: Season[],
    url: string,
    voteAverage: number,
    voteCount: number,
    id: number,
}

type Props = {
    match: {
        params: {
            showId: string,
            show: string,
        }
    }
}

class Show extends Component<Props, State> {

    state:State= {
        creator: '',
        isLoaded: false,
        name: '',
        numberOfSeasons: 0,
        overview: '',
        id: 0,
        poster: '',
        seasons: [],
        runTime: 0,
        url: '',
        voteAverage: 0,
        voteCount: 0
    }

    componentDidMount = async () => {
      const { data:show } = await axios.get(`https://api.themoviedb.org/3/tv/${this.props.match.params.showId}?api_key=${process.env.REACT_APP_MOVIE_DB_API}`)
      console.log(show)
      this.setState({
            id: show.id,
            creator: show.created_by[0].name,
            isLoaded: true, 
            name: show.name,
            numberOfSeasons: show.number_of_seasons,
            seasons: show.seasons,
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
                        <Dropdown>
                            <Dropdown.Toggle id='season-dropdown'>Seasons</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {
                                    this.state.seasons.map(season => (
                                        <Link key={season.season_number} to={`${this.props.match.params.show}-season_${season.season_number}-${this.state.id}`}>
                                            <li className='dropdown-item'>{season.name}</li>
                                        </Link>
                                    ))
                                }
                            </Dropdown.Menu>
                        </Dropdown>
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
    text-align: center;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default Show