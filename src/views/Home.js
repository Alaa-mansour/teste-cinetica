import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook ,faTwitter , faInstagram} from "@fortawesome/free-brands-svg-icons"

import {Menu} from '../components/Menu';
import {Content} from '../components/Content';
import {Contact} from '../components/Contact';

export class Home extends Component{
    render(){
        return(
            <>
                <div className="primary-nav">
                    <div className="container flex">
                    <a className="navbar-brand" href="/#">Developer</a>
                    <ul className="navbar-nav mr-auto brand-icons" >
                        <li className="nav-item active">
                            <a className="nav-link" href="/#">
                                <FontAwesomeIcon  icon={faFacebook} />
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/#">
                               <FontAwesomeIcon  icon={faInstagram} />
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/#">
                                <FontAwesomeIcon  icon={faTwitter} />
                            </a>
                        </li>
                    </ul>
                    </div>
                </div>
                <Menu/>
                <section id="banner"></section>
                <Content/>
                <Contact/>

                <footer>
                    Cinetica.ag - 2020@
                </footer>
            </>

        )
    }
}