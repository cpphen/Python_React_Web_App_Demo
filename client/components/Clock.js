import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as timeAction from 'actions/time';
import Time from 'components/Time';

const NEXT_NEW_YEAR = '1/1/2024';

class Clock extends Component {
	state = {
		currentTime: null,
	}

	async componentDidMount() {
		setTimeout(() => {
			this.setState({ 
				currentTime: Date.parse(NEXT_NEW_YEAR) - Date.parse(new Date()) 
			});
		}, 3000);
	}

	render() {
		if (!this.state.currentTime || this.state.currentTime === 0) {
			return <img id="loader" src="/dist/img/loader.gif" alt="###"/>;
		}

		return (
			<div className="clock">
				<Time {...this.props} currentTime={this.state.currentTime} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		seconds: state.time.seconds,
		minutes: state.time.minutes,
		hours: state.time.hours,
		days: state.time.days
	};
};

const mapDisptachToProps = dispatch => {
	return bindActionCreators(timeAction, dispatch);
};

export default connect(mapStateToProps, mapDisptachToProps)(Clock);
