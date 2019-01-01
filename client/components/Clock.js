import React, { Component } from 'react';
// import Day from 'components/Day';
// import Hour from 'components/Hour';
// import Minutes from 'components/Minutes';
// import Seconds from 'components/Seconds';

import Time from 'components/Time';

const NEXT_NEW_YEAR = '1/1/2020';

class Clock extends Component {
	state = {
		currentTime: null
	}

	_timerFunctionInt = null
	_timerFunctionSet = null

	componentDidMount() {
		setTimeout(() => {
			this._timerFunctionInt = setInterval(this.getTimeRemaining, 1000);
			
		}, 3000);
	}

	componentWillUnmount() {
		clearInterval(this._timerFunctionInt);
	}
	
	getTimeRemaining = () => this.setState({ 
		currentTime: Date.parse(NEXT_NEW_YEAR) - Date.parse(new Date()) })

	render() {
		if (!this.state.currentTime || this.state.currentTime === 0) {
			return <img id="loader" src="/dist/img/loader.gif" alt="###"/>;
		}

		return (
			<div className="clock">
				<h1>2020 Count Down!!</h1>
				<Time  currentTime={this.state.currentTime} />
			</div>
		);
	}
}

export default Clock;
