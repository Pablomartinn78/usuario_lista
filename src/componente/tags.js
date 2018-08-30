import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Tags extends React.PureComponent{
    render () {

            const {tags} = this.props;
    
            return (
                <article>
				<ul>
                    <h3>Tags: </h3>
                    {tags.map(tag => <span><p>#{tag}</p></span>
                )}
	</ul>
                </article>
            );
        }
    
    }
    
Tags.propTypes = {
        tag: PropTypes.string,
};