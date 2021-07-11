import React from 'react'
import Login from '../views/login'
import Signup from '../views/signup'
import Home from '../views/home'
import Entries from '../views/searchEntries'
import EditEntry from '../views/editEntry'
import { Route, Switch, HashRouter } from 'react-router-dom'

function Routes(){
    return (

        <HashRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/home" component={Home} />                
                <Route path="/entries" component={Entries} />                
                <Route path="/editEntry/:id?" component={EditEntry} />
            </Switch>
        </HashRouter>

    )
}

export default Routes;
