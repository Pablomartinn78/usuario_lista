import React, {Component} from 'react';
import PropTypes from 'prop-types';
export class Pasta extends React.PureComponent {

    render () {
        const {nombre,tipo,age, imagen} = this.props;
        return (
            <article>
                <h4>{nombre}</h4>
                <p>{tipo}</p>
                <p>{age}</p>
                <img src={imagen}/>
            </article>
        )
    }

}

const tiposUsuario = [
    "name", "age" ,"email" ,"female", "male", "tags" , "Imagen"
]

Pasta.propTypes = {
    nombre: PropTypes.string.isRequired,
    tipo: PropTypes.oneOf(tiposUsuario).isRequired,
    age: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired
}