import React from 'react';
import Card from '../component/card'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

class Home extends React.Component{

    state = {
        balance: 0
    }

    componentDidMount(){
        const userLoggedString = localStorage.getItem('_user_logged')
        const userLogged = JSON.parse(userLoggedString)
        axios.get(`http://localhost:8080/api/entry/v1/getbalance/${userLogged.id}`)
        .then( response => {
            this.setState({balance: response.data})
        }).catch(error => {
            console.log("did not finde the balance")
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