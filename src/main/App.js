import React from 'react';
import 'bootswatch/dist/slate/bootstrap.css'
import '../custom.css'
import 'toastr/build/toastr.min.js'
import 'toastr/build/toastr.css'
import Navbar from '../component/navbar'
import Routes from './routes';
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

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

