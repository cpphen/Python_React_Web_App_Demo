import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Time } from 'components/Time';

class Minutes extends Component {
	static propTypes = {
		currentTime: PropTypes.number.isRequired,
		className: PropTypes.string
	}

	_minutes = Math.floor( (this.props.currentTime/1000/60) % 60 )

	componentDidUpdate() {
		this._minutes = Math.floor( (this.props.currentTime/1000/60) % 60 );
	}

	render = () => 
		<Time 
			time={this._minutes} className={this.props.className} label='Minutes' />
}

export default Minutes;
