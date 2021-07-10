import React from 'react';
import Card from '../component/card'
import { withRouter } from 'react-router-dom'
import UserService from '../app/service/userService';
import LocalStorageService from '../app/service/localStorageService';
import { toastrErrorMsg, toastrSuccessMsg } from '../component/toastr'

class Signup extends React.Component{

    state = {
        name: '',
        email: '',
        pswd: '',
        pswd2: ''
    }

    constructor(){
        super();
        this.userService = new UserService();
    }

    validate(){
        const msgs = []

        if(!this.state.name){
            msgs.push('Name is mandatory.')
        }
        if(!this.state.email){
            msgs.push('Email is mandatory.')
        } else if(!this.state.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)){
            msgs.push('Inform a valid email.')
        }
        if(!this.state.pswd){
            msgs.push('Password is mandatory.')            
        } else if(this.state.pswd !== this.state.pswd2) {
            msgs.push('Password did not match. Password and Confirmation must be the same')
        }

        return msgs;
    }

    signup = () => {
        const msgs = this.validate();
        if (msgs && msgs.length > 0){
            msgs.forEach((msg, index) => {
                toastrErrorMsg(msg)
            })
            return false;            
        }

        this.userService.signup({
            id: '',
            name: this.state.name,
            email: this.state.email,
            pswd: this.state.pswd
        }).then( response => {        
            toastrSuccessMsg('New user created with success. Login to user My Wallet.')
            this.props.history.push('/login')
        }).catch( error => {
            toastrErrorMsg(error.response.data)
        })
    }

    navigateLogin = () => {
        this.props.history.push('/login')
    }


    render(){
        return (         
        <Card title="Signup new user">
            <div className="row">
            <div className="col-lg-12">
                <div className="bs-component">
                <div className="form-group">
                    <label htmlFor="name" className="form-label mt-4">  Name  </label>
                    <input type="name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} className="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter your name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label mt-4">  Email  </label>
                    <input type="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} className="form-control" id="email" aria-describedby="nameHelp" placeholder="Enter your email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="pswd" className="form-label mt-4">  Password  </label>
                    <input type="password" value={this.state.pswd} onChange={(e) => this.setState({ pswd: e.target.value })} className="form-control" id="pswd" aria-describedby="nameHelp" placeholder="Enter your passwrod"/>
                </div>
                <div className="form-group">
                    <label htmlFor="pswd2" className="form-label mt-4">  Password confirmation  </label>
                    <input type="password" value={this.state.pswd2} onChange={(e) => this.setState({ pswd2: e.target.value })} className="form-control" id="pswd2" aria-describedby="nameHelp" placeholder="Enter your password again"/>
                </div>
                <br />
                <button onClick={ this.signup } type="button" className="btn btn-info">Signup to My Wallet</button>
                <button onClick={ this.navigateLogin } type="button" className="btn btn-warning">Cancel</button>
                </div>
            </div>
            </div>
        </Card>        
        );
    }
}

export default withRouter ( Signup )