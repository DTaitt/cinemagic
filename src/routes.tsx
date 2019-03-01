import { Route, Switch } from 'react-router-dom'

import DetailPage from './views/DetailPage';
import React from 'react'
import Trending from './views/Trending/Trending';

const Routes = () => {
    return(
        <Switch>
            <Route exact path = '/' component={Trending} />
            <Route path='/tv/:show-:showId/' component={DetailPage} />
        </Switch>
    )
}

export default Routes