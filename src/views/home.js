import React from 'react';
import { withRouter } from 'react-router-dom'
import EntryService from '../app/service/entryService';
import LocalStorageService from '../app/service/localStorageService';

class Home extends React.Component{

    state = {
        balance: 0
    }

    constructor(){
        super();
        this.entryService = new EntryService();
    }

    componentDidMount(){
        
        const userLogged = LocalStorageService.getItem('_user_Logged')

        this.entryService
            .getBalance(userLogged.id)
            .then( response => {
                this.setState({balance: response.data})
            }).catch(error => {
                console.log("did not find the balance")
                console.error(error.response)
            })
    }

    render(){
        return(
            <div className="jumbotron">
                <h1 className="display-3">Welcome!</h1>
                <p className="lead">This is your finance system.</p>
                <p className="lead">You own US$ {this.state.balance} </p>
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