import React, { Component } from 'react';

import style from '../sass/index.scss';
import Clock from 'components/Clock';

console.log('STYLE', style);

class Home extends Component {
	render = () => {
		return (
			<div id="home">
				<h1 className="main-header">Happy New Year <br/>2020 Count Down</h1>
				<Clock />
			</div>
		);
	}
}

export default Home;
