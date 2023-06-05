import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Time } from 'components/Time';

class Day extends Component {
	static propTypes = {
		currentTime: PropTypes.number.isRequired,
		className: PropTypes.string
	}

	_msecs_one_day = 1000*60*60*24
	_days = Math.floor( this.props.currentTime / (this._msecs_one_day) )

	componentDidUpdate() {
		this._days = Math.floor( this.props.currentTime / (this._msecs_one_day) );
	}

	setBack

	render = () => 
		<Time 
			time={this._days} className={this.props.className} label='Days' />
}

export default Day;
