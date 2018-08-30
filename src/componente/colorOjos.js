import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Color extends React.PureComponent{
    render () {

            const { eyeColor } = this.props;
            const ojos ={color: eyeColor};
            return (
                <ul>
				<p>
				<br></br>
                <b>Color de Ojos:</b> <span style={{background: eyeColor }} >|______|</span>
                </p>
				</ul>
            );
        }
    
    }
