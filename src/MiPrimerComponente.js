import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class MiPrimerComponente extends Component {
 
  /*
  componentWillMount() {
    /*this.state = {
      color = 'azul',
      cantidad = 100,
    
    this.setState({
      nombreComponente: 'Component v2.0',
    })
  }
*/
  
constructor(props){
    super(props);
    this.state = {
      nombreComponente: 'Component v2.0'
    }
  }

  render() {

    const {nombre, apellido, edad} = this.props
    const {nombreComponente} = this.state
    console.log(nombre);
    console.log(apellido);
    console.log(edad);
    
    return (
      <div className="MiPrimerComponente">
      <p> Aloooooooooooo 
         Mi Nombre es {nombre} {apellido} y tengo {edad} años y mi componente es {nombreComponente}
      </p>
      </div>
    );
  }
}

export default MiPrimerComponente;