import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Time } from 'components/Time';

class Seconds extends Component {
	static propTypes = {
		currentTime: PropTypes.number.isRequired,
		className: PropTypes.string
	}

	_seconds = Math.floor( (this.props.currentTime/1000) % 60 )

	componentDidUpdate() {
		this._seconds = Math.floor( (this.props.currentTime/1000) % 60 );
	}

	render = () => 
		<Time 
			time={this._seconds} className={this.props.className} label='Seconds' />
}

export default Seconds;
