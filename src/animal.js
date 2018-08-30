import React, { Component } from 'react';
import PropTypes from 'prop-types';

export  class Animal extends React.PureComponent {
    
     render () {
        const {name,imagen,age,email,gender,tags} = this.props;
        return (
            <article>
                <h4>{name}</h4>
                <p>{age}</p>
                <p>{email}</p>
                <p>{gender}</p>
                <p>{tags}</p>
                <img src={imagen}/>
            </article>
        )
    }

}

const tiposUsuario = [
    "name", "age" ,"email" ,"female", "male", "tags" , "Imagen"
]

Animal.propTypes = {
    name: PropTypes.string.isRequired,
    gender: PropTypes.oneOf(tiposUsuario).isRequired,
    email: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired
}