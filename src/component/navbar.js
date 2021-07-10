import React from 'react';
import NavbarItem from './navbaritem'
function Navbar(){
    return(

        <div className="navbar navbar-expand-lg fixed-=tp navbar-dark bg-primary">
            <div className="container">
                <a className="navbar-brand" href="#/home">My Wallet</a>
                <button className="navbar-toggler" type="button" 
                        data-bs-toggle="collapse" data-bs-target="#navbarResponsive" 
                        aria-controls="navbarResponsive" aria-expanded="false" 
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>        
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <NavbarItem href="#/home" label="Home"/>
                        <NavbarItem href="#/signup" label="Signup"/>
                        <NavbarItem href="#/entries" label="Entries"/>
                        <NavbarItem href="#/login" label="Logout"/>
                    </ul>    
                    <ul className="navbar-nav ms-md-auto">
                        <li className="nav-item">
                            <a target="_blank" rel="noopener" className="nav-link" href="https://github.com/fnozoy/"><i className="fa fa-github"></i> GitHub fnozoy </a>
                        </li>
                    </ul>                
                </div>
            </div>
        </div>


    )
}

export default Navbar
