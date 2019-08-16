import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER,
} from '../actions/types';

const INITIAL_STATE = { 
	email: '',
	password: '',
	message: '', 
};

export default (state = INITIAL_STATE, action) => {
	console.log(action);

	switch (action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: action.payload };
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		case LOGIN_USER_SUCCESS:
			return { ...state, 
				user: action.payload, 
				message: 'Login Successful', 
				loading: false,
				email: '',
				password: '',
			};
		case LOGIN_USER_FAIL:
			return { 
				...state, 
				message: 'Authentication Failed: ' + action.payload, 
				password: '', loading: false 
			};
		case LOGIN_USER:
			return { ...state, loading: true, message: '' };
		default:
			return state;
	}
};
