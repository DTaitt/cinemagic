import React from 'react'
import { URL_PREFIX } from '../../utils';
import { Card as _Card } from 'react-bootstrap'
import styled from 'styled-components'

type Props = {
    name: string,
    hero: string,
    overview: string,
    popularity: number,
    poster: string,
    releaseDate: string,
    voteAverage: number,
    voteCount: number,
}

const MediaCard = (props:Props) => (
    <Card>
        <Card.Img src={URL_PREFIX + props.poster} />
    </Card>
)

const Card = styled(_Card)`
    width: 300px;
`

export default MediaCard