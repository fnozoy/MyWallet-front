import React from 'react';
import Card from '../component/card'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import UserService from '../app/service/userService';
import LocalStorageService from '../app/service/localStorageService';
import { toastrErrorMsg } from '../component/toastr'
import { AuthContext } from '../main/authenticationProvider'

class Login extends React.Component{
    state = {
        email: '',
        pswd: '',
        errorMessage: ''
    }

    constructor(){
        super();
        this.userService = new UserService();
    }

    authenticate = () => {
        this.userService.authenticate({
            id: '',
            name:'',
            email: this.state.email,
            pswd: this.state.pswd
        }).then( response => {
            LocalStorageService.addItem("_user_Logged", response.data)            
            this.context.startSession(response.data)
            this.props.history.push('/home')
        }).catch( error => {
            toastrErrorMsg(error.response.data)
        })
    }
    
    prepareSignup = () => {
        this.props.history.push('/signup')
    }

  render(){
    return(
        <div className="row">
            <div className="col-md-12">
                <div className="col-lg-12">
                    <div className="bs-component">
                        <div className="bs-docs-section">
                            <Card title="Login" >
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
                                    <input type="email" value={this.state.email} onChange={e => this.setState({email: e.target.value})}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
                                    <input type="password" value={this.state.pswd} onChange={e => this.setState({pswd: e.target.value})}  className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>

                                <br />
                                
                                <button onClick={ this.authenticate } type="button" className="btn btn-info"><i className="pi pi-key"></i> Login</button>
                                <button onClick={ this.prepareSignup } type="button" className="btn btn-warning"><i className="pi pi-plus"></i> Signup</button>

                                <div className="row">
                                    <br />
                                    <span>
                                        <p className="text-danger">{this.state.errorMessage}</p>
                                    </span>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>                
        </div>
    )
  }

}


Login.contextType = AuthContext

export default withRouter ( Login )