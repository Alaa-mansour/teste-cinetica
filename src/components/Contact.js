import React, { Component } from 'react';

import {MapContainer} from './Map';

export class Contact extends Component{
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          email: '',
          phone:'',
          textError : '',
          errors: {
            username: '',
            email: '',
            phone: '',
          }
        };
      }

    handleChange = (event)=>{
        event.preventDefault();
        const {name , value} = event.target;
        let errors = this.state.errors;
        const validEmailRegex = new RegExp(/^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/);

        switch (name) {
          case 'username':
            errors.username =
              value.length < 5 ? 'the name must be 5 characters long!' : '';
            break;
          case 'email':
            errors.email =
              validEmailRegex.test(value) ? '' : 'Email is not valid!';
            break;

          default:
            break;
        }
        this.setState({errors, [name]: value.trim()});

    }
    formatPhoneNum = (e)=>{
        const validPhoneRegex = new RegExp(/\(\d{2,}\) \d{4,}\-\d{4}/);
        let phone = e.target.value;
        phone = phone.replace(/\D+/g, '')
        .replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        this.setState({
            phone,
            errors:{ ...this.state.errors,
                phone:  validPhoneRegex.test(phone) ? '' : 'Phone number is not valid!'
            }
        })
    }

    handleSubmit = (event)=>{
        event.preventDefault();

        const username = this.state.username;
        const email = this.state.email;
        const phone = this.state.phone;
        const errors = this.state.errors

        if(username && email && phone ){
            if(errors.username || errors.email || errors.phone){
                this.setState({textError : "Please fix the errors."})
            }else{
                this.setState({textError : "Your message has been sent."})
            }
        }else{
            this.setState({textError : "Fields can't be empty."})
        }

    }

    render(){
        return(
            <section id="contact" >
                <div className="container">
                <div  className="row">
                <div id="map" className="col-sm">
                    <MapContainer/>
                </div>
                <div id="form" className="col-sm">
                    <h5>
                    Envie sua mensagem
                    </h5>
                    <form>
                        <div className="form-group">
                            <label htmlFor="username">Seu nome: </label>
                            <input type="text" className="form-control" id="username" name="username"
                             onChange={this.handleChange} value={this.state.username} errors={this.state.username}/>
                             <small>{this.state.errors.username}</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Seu e-mail:</label>
                            <input type="email" className="form-control" id="email" name="email"
                             onChange={this.handleChange} value={this.state.email}/>
                            <small>{this.state.errors.email}</small>

                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Seu telefone:</label>
                            <input type="text" className="form-control" id="phone" name="phone"
                             onChange={this.formatPhoneNum} value={this.state.phone}/>
                            <small>{this.state.errors.phone}</small>

                        </div>

                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit} >Enviar</button>
                        <div style={{fontSize:22,textAlign:'center'}}>{this.state.textError}</div>
                    </form>
                </div>
                </div>
                </div>
            </section>
        )
    }
}