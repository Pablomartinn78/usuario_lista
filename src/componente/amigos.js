import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Amigos extends React.PureComponent{
    render () {
        const {amigos} = this.props;

        return (
            <article>
			<ul>
    <br></br>
            <h3>Amigos:  </h3>{amigos.map(amg =><p>{amg.name}</p>
            )}
	<br></br>
	</ul>
            </article>
        );
    }

}

Amigos.propTypes = {
    name: PropTypes.string.isRequired,
};
