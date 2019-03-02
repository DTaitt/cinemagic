import React, { Component } from 'react'

import { URL_PREFIX } from '../../utils';
import { Card as _Card } from 'react-bootstrap'
import axios from 'axios';
import styled from 'styled-components'

class Season extends Component {

  state = {
    episodes: [],
    airDate: '',
    name: '',
    poster: '',
    isLoaded: false,
  }

  componentDidMount = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/tv/${this.props.match.params.showId}/season/${this.props.match.params.seasonNum}?api_key=${process.env.REACT_APP_MOVIE_DB_API}`)
    this.setState({
      episodes: data.episodes,
      airDate: data.air_date,
      name: data.name,
      poster: data.poster_path,
      isLoaded: true
    })
  }
  
    render() {
      return (
        this.state.isLoaded && (<>
        <Card>
          <Card.Body>
            <CardTitle>{this.state.name}</CardTitle>
            <CardTitle>Aired: {this.state.airDate}</CardTitle>
          </Card.Body>
          <Card.Img src={URL_PREFIX + this.state.poster}></Card.Img>
        </Card>
        {
          this.state.episodes.map(episode => (
            <Card key={episode.id}>
              <Card.Img src={URL_PREFIX + episode.still_path}></Card.Img>
              <Card.Body>
                    <CardTitle>Episode {episode.episode_number}: {episode.name}</CardTitle>
                    <Card.Text>{episode.overview}</Card.Text>
                    <Info>
                        <Card.Text>Aired: {episode.air_date}</Card.Text>
                        <Card.Text>Vote Average: {episode.vote_average} / 10</Card.Text>
                        <Card.Text>Vote Count: {episode.vote_count}</Card.Text>
                    </Info>
                </Card.Body>
            </Card>
          ))
        }
        </>)
      )
    }
}

const CardTitle = styled(_Card.Title)`
    text-align: center;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Card = styled(_Card)`
    width: 300px;
`

export default Season