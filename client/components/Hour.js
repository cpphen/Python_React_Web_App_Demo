import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Time } from 'components/Time';

class Hour extends Component {
	static propTypes = {
		currentTime: PropTypes.number.isRequired,
		className: PropTypes.string
	}

	_msecs_one_hour = 1000*60*60
	_hours = Math.floor( (this.props.currentTime / (this._msecs_one_hour)) % 24 )

	componentDidUpdate() {
		this._hours = Math.floor( (this.props.currentTime / (this._msecs_one_hour)) % 24 );
	}

	render = () => 
		<Time 
			time={this._hours} className={this.props.className} label='Hours' />
}

export default Hour;
