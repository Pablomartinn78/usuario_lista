import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Usuarios extends React.PureComponent{
    render () {

            const {name} = this.props;
      const {address} = this.props;
		 const {phone} = this.props;
		 const {email} = this.props;
		const {age} = this.props;
		const {balance} = this.props;
		const {gender} = this.props;
		const {picture} = this.props;
		const {company} = this.props;
            return (
                <article>
 
				<img src= {picture} width="150px" height="150px" />
				<ul>
                    <b>Nombre: </b>{name}
				</ul>
				<ul>
                    <b>Género: </b>{gender}
				</ul>
				<ul>
                    <b>Edad: </b>{age}
				</ul>
				<ul>
          <b>Dirección: </b>{address}
				</ul>
				<ul>
          <b>Teléfono: </b>{phone}
				</ul>
				<ul>
          <b>Email: </b>{email}
				</ul>
				<ul>
                    <b>Compañía: </b> {company}
				</ul>
				<ul>
                    <b>Balance: </b>{balance}
				</ul>
                </article>
                
            );
        }
    
    }
    
Usuarios.propTypes = {
        name: PropTypes.string.isRequired,
	    gender: PropTypes.string.isRequired,
	phone: PropTypes.string.isRequired,
	address: PropTypes.string.isRequired,
	balance: PropTypes.string.isRequired,
	age: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired
};