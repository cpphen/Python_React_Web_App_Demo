export const SET_SECONDS = 'SET_SECONDS';
export const SET_MINUTES = 'SET_MINUTES';
export const SET_HOURS = 'SET_HOURS';
export const SET_DAYS = 'SET_DAYS';

export const setSeconds = (time) => { 
	return {
		type: 'SET_SECONDS',
		payload: time
	};
};

export const setMinutes = (time) => {
	return {
		type: 'SET_MINUTES',
		payload: time
	};
};

export const setHours = (time) => {
	return {
		type: 'SET_HOURS',
		payload: time
	};
};

export const setDays = (time) => {
	return {
		type: 'SET_DAYS',
		payload: time
	};
};
