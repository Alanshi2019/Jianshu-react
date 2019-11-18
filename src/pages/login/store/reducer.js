import {fromJS} from 'immutable';
import * as actionTypes from './actionTypes';


const defaultState = fromJS({
	login: false
});


export default (state = defaultState, action) => {
	if(action.type === actionTypes.CHANGE_LOGIN){
		return state.set('login',action.value)
	}
	if(action.type === actionTypes.LOGOUT){
		return state.set('login',action.value);
	}
	return state;
	
}