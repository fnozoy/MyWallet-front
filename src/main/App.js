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
import AuthenticationProvider from './authenticationProvider'

class App extends React.Component{
  render(){
    return(
    <AuthenticationProvider>
      <Navbar />
      <div className="container">
        <div>
            <Routes />        
        </div>
      </div>
    </AuthenticationProvider>
    )
  }
}

export default App;

