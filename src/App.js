import React, { Component } from 'react';
import './index.css';
import data from './usuarios.json';
import Lista from './componente/Usuarios';
import Amigos from './componente/amigos';
import Tag from './componente/tags';
import Ojos from './componente/colorOjos';

class App extends Component {

  constructor(props){
    super(props);
    console.log(data)
    this.state = data
    
  }

  render() {
	  
    return (
      <section>
		<h1 class="font-weight-bold"><u>Listado de Usuarios</u></h1>
          {data.map((lista) => (
            <section>
                       <Lista key={lista.index}
		                   picture={lista.picture}
                           name={lista.name}
		                   gender={lista.gender}
                           age={lista.age}
		                   address={lista.address}
		                   phone={lista.phone}
		                   email={lista.email}
		                   balance={lista.balance}
		                   company={lista.company}
                        />
                      <Ojos eyeColor={lista.eyeColor}
                      />
                      <Amigos amigos={lista.friends} 
                        />
                      <Tag tags={lista.tags} />
                     
          </section>
          ))}
      </section>
	  
    );
  }
}
export default App;
