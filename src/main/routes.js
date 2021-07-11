import React from 'react'
import Login from '../views/login'
import Signup from '../views/signup'
import Home from '../views/home'
import Entries from '../views/searchEntries'
import EditEntry from '../views/editEntry'
import { AuthConsumer } from './authenticationProvider'
import { Route, Switch, HashRouter, Redirect } from 'react-router-dom'

function AuthenticatedRoute ( { component: Component, isUserAuthenticated, ...props } ){
    return(
        <Route {...props} render={ (componentProps) => {
                if(isUserAuthenticated) {
                    return (
                        <Component {...componentProps} />
                    )
                }else{
                    return(
                        <Redirect to={ {pathname : '/login', state : { from: componentProps.location}}} />
                    )
                }
            }
        } />
    )
}

function Routes(props){
    return (

        <HashRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <AuthenticatedRoute isUserAuthenticated={props.isUserAuthenticated} path="/home" component={Home} />                
                <AuthenticatedRoute isUserAuthenticated={props.isUserAuthenticated} path="/entries" component={Entries} />                
                <AuthenticatedRoute isUserAuthenticated={props.isUserAuthenticated} path="/editEntry/:id?" component={EditEntry} />
            </Switch>
        </HashRouter>

    )
}

export default () => (
    <AuthConsumer>
        { (context) => (<Routes isUserAuthenticated={context.isAuthenticated} />) }
    </AuthConsumer>
)
