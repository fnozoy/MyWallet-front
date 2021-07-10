import React from 'react';
import Card from '../component/card'
import { withRouter } from 'react-router-dom'
import axios from 'axios'


class Login extends React.Component{
    state = {
        email: '',
        pswd: '',
        errorMessage: ''
    }

    authenticate = () => {
        axios.post('http://localhost:8080/api/v1/user/authenticate', {
            id: '',
            name:'',
            email: this.state.email,
            pswd: this.state.pswd
        }).then( response => {
            localStorage.setItem('_user_logged', JSON.stringify(response.data))
            this.props.history.push('/home')
        }).catch(error => {
            this.setState({errorMessage: error.response.data})
        })
    }
    
    prepareSignup = () => {
        this.props.history.push('/signup')
    }

  render(){
    return(
        <div className="row">
            <div className="col-md-6">
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
                                
                                <button onClick={ this.authenticate } type="button" className="btn btn-info">Login</button>
                                <button onClick={ this.prepareSignup } type="button" className="btn btn-warning">Signup</button>

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

export default withRouter ( Login )