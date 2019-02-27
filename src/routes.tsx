import { Route, Switch } from 'react-router-dom'

import ListingPage from './views/ListingPage';
import React from 'react'
import Trending from './views/Trending';

const Routes = () => {
    return(
        <Switch>
            <Route exact path = '/' component={Trending} />
            <Route path='/listing' component={ListingPage} />
        </Switch>
    )
}

export default Routes