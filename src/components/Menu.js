import React, { Component } from 'react';

export class Menu extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark ">
             <div className="container">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/#">Menu001</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/#">MenuMenu002</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/#">M003</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/#">MenuM004</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/#">Menu5</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/#">Me6</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/#">SuperMenu5</a>
                        </li>
                    </ul>
                </div>
            </div>

            </nav>
        )
    }
}