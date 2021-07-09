import React from 'react';
import 'bootswatch/dist/slate/bootstrap.css'
import Login from './views/login'
import './custom.css'

class App extends React.Component{
  render(){
    return(
      <div>
          <Login />        
      </div>
    )
  }
}

export default App;
