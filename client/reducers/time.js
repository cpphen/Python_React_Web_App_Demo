 import {SET_SECONDS,
  SET_MINUTES,
  SET_HOURS,
  SET_DAYS } from 'actions/time';

const intitalState = {
	seconds: 0,
	minutes: 0,
	hours: 0,
	days: 0
};

export const time = (state = intitalState, action) => {
	switch(action.type) {
		case SET_SECONDS:
			return {
				...state,
				seconds: action.payload,
			};
		case SET_MINUTES:
			return {
				...state,
				minutes: action.payload,
			};
		case SET_HOURS: 
			return {
				...state,
				hours: action.payload,
			};
		case SET_DAYS:
			return {
				...state,
				days: action.payload,
			};
		default:
			return state;
	}
};
