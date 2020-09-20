import React, { Component } from 'react';

import {Button} from './Button';

export class Content extends Component{
    render(){
        return(
            <section id="content">
                <div className="container">
                    <div style={{margin:"0 auto", maxWidth:874,marginTop:28}}>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptater.</p>
                    <Button name="SAIBA MAIS"/>

                    <div className="profile-icons">

                        <div style={{marignTop:40}}>
                            <img src={require('../assets/person1.png')} alt="profile-icon" />
                            <p>Inovador</p>
                            <h3>Antonio Frontier</h3>
                            <h5>HTML</h5>
                            <p>"Trabalhar com HTML é como ser arquiteto com código, permitindo que uma mensagem seja transmitida de forma eficientee inteligível."</p>
                        </div>

                          <div style={{marignTop:40}}>
                            <img src={require('../assets/person1.png')} alt="profile-icon" />
                            <p>Inovador</p>
                            <h3>Antonio Frontier</h3>
                            <h5>HTML</h5>
                            <p>"Trabalhar com HTML é como ser arquiteto com código, permitindo que uma mensagem seja transmitida de forma eficientee inteligível."</p>
                        </div>

                          <div style={{marignTop:40}}>
                            <img src={require('../assets/person1.png')} alt="profile-icon" />
                            <p>Inovador</p>
                            <h3>Antonio Frontier</h3>
                            <h5>HTML</h5>
                            <p>"Trabalhar com HTML é como ser arquiteto com código, permitindo que uma mensagem seja transmitida de forma eficientee inteligível."</p>
                        </div>

                    </div>

                    <h1 style={{margin:"40px 0px"}}>
                   <span style={{fontWeight:300}}>23% são Inovadores</span>  <br/>
                    Qual é o seu perfil?
                    </h1>
                    <div className="side">
                        <h2> Busca capacitação constante</h2>
                        <p className="split-border">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor.</p>
                    </div>
                    <div className="side">
                        <h2 className="h2"> Gosta de aprender</h2>
                        <p className="split-border">eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.</p>
                    </div>
                    </div>

                </div>
            </section>
        )
    }
}