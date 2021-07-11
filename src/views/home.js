import React from 'react';
import { withRouter } from 'react-router-dom'
import EntryService from '../app/service/entryService';
import LocalStorageService from '../app/service/localStorageService';
import currencyFormatter from 'currency-formatter';

class Home extends React.Component{

    state = {
        balance: 0,
        name: ''
    }

    constructor(){
        super();
        this.entryService = new EntryService();
    }

    componentDidMount(){
        
        const userLogged = LocalStorageService.getItem('_user_Logged');
        this.state.name = userLogged.name;

        this.entryService
            .getBalance(userLogged.id)
            .then( response => {
                this.setState({balance: response.data})
            }).catch(error => {
                console.error(error.response)
            })
    }

    render(){
        return(
            <div className="jumbotron">
                <h1 className="display-3">Welcome, {this.state.name}!</h1>
                <p className="lead">This is your finance system.</p>
                <p className="lead">You own {currencyFormatter.format(this.state.balance, {locale: 'en-US'})} </p>
                <hr className="my-4" />
                <p>This your administrative area, use the menu or the buttons below to navigate My Wallet.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" 
                        href="#/signup" 
                        role="button"><i className="pi pi-users"></i>  
                        New user signup
                    </a>
                    <a className="btn btn-danger btn-lg" 
                        href="#/entries" 
                        role="button"><i className="pi pi-money-bill"></i>  
                        Your wallet entries
                    </a>
                </p>
            </div>
        )
    }    
}
export default withRouter ( Home )