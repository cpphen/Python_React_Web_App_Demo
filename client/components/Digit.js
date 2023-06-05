import React from 'react';
import PropTypes from 'prop-types';

export const Digit = ({flip, flipBot, digit, ...props}) => {
	console.log('FLIP SEC', flipBot);
	const FLIP_CLASS = flip === true;
	const FLIP_CLASS_BOT = flipBot === true;
	return (
		<div className="numBox">
			<div id="backTop">
				<h1 className="backNum">{digit === 0 ? digit : digit - 1}</h1>
			</div>
			<div id="backBot">
				<h1 className={flipBot === false ? 'backNum show' : 'backNum hide'}>
					{digit === 0 ? digit : digit + 1}
				</h1>
			</div>
			<div className="num">
				<div className={`top-container ${FLIP_CLASS ? 'flip' : ''}`}>
					{FLIP_CLASS ? <div className="overlayTop"></div> : null}
					<div className={`top`}><h1>{digit}</h1></div>
				</div>
				<div className="divider"></div>
				<div className={`bottom-container ${FLIP_CLASS_BOT ? 'flip' : ''}`}>
					<div className={`bottom`}>
						<h1>{digit}</h1>
					</div>
				</div>
			</div>
			<div className="label">{props.label}</div>
		</div>
	);
};

Digit.propTypes = {
	flip: PropTypes.bool,
	flipBot: PropTypes.bool,
	digit: PropTypes.number.isRequired,
	className: PropTypes.string,
	label: PropTypes.string.isRequired,
};
