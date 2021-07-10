import React from 'react';
import Card from '../component/card'
import { withRouter } from 'react-router-dom'

class Signup extends React.Component{

    state = {
        name: '',
        email: '',
        pswd: '',
        pswd2: ''
    }
    signup = () => {
        console.log('name: ', this.state.name)
        console.log('email: ', this.state.email)
        console.log('password: ', this.state.pswd)        
        console.log('password2: ', this.state.pswd2)
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
                    <input type="pswd" value={this.state.pswd} onChange={(e) => this.setState({ pswd: e.target.value })} className="form-control" id="pswd" aria-describedby="nameHelp" placeholder="Enter your passwrod"/>
                </div>
                <div className="form-group">
                    <label htmlFor="pswd2" className="form-label mt-4">  Password confirmation  </label>
                    <input type="pswd2" value={this.state.pswd2} onChange={(e) => this.setState({ pswd2: e.target.value })} className="form-control" id="pswd2" aria-describedby="nameHelp" placeholder="Enter your password again"/>
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