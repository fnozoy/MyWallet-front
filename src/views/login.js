import React from 'react';
import Card from '../component/card'


class Login extends React.Component{
    state = {
        email: '',
        pswd: ''
    }
    ingress = () => {
        console.log('email: ', this.state.email)
        console.log('password: ', this.state.pswd)
    }
    
  render(){
    return(
      <div className="container">
          <div className="row">
                <div className="col-md-6" style={ {position: 'relative', left: '300px'}}>
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
                            
                            <button onClick={ this.ingress } type="button" className="btn btn-info">Login</button>
                            <button onClick={ this.ingress } type="button" className="btn btn-warning">Signup</button>

                        </Card>
                    </div>
                </div>                
          </div>
      </div>
    )
  }

}

export default Login;
