import React from 'react';
import 'bootswatch/dist/slate/bootstrap.css'
import '../custom.css'
import Navbar from '../component/navbar'
import Routes from './routes';

class App extends React.Component{
  render(){
    return(
    <>
      <Navbar />
      <div className="container">
        <div>
            <Routes />        
        </div>
      </div>
    </>
    )
  }
}

export default App;
