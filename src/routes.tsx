import { Route, Switch } from 'react-router-dom'

import React from 'react'
import Season from './views/Season/Season';
import Show from './views/Show';
import Trending from './views/Trending/Trending';

const Routes = () => {
    return(
        <Switch>
            <Route exact path = '/' component={Trending} />
            <Route exact path='/tv/:show-season_:seasonNum-:showId/' component={Season} />
            <Route exact path='/tv/:show-:showId/' component={Show} />
        </Switch>
    )
}

export default Routes