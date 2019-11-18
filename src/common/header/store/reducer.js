import {fromJS} from 'immutable';
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
	focused: false,
	mouseIn:false,
	list: [],
	page: 1,
	totalPage: 1
});
//注意此时list已经是immutable的list

export default (state = defaultState, action) => {
	if(action.type === "header/SEARCH_FOCUS"){
		return state.set('focused',true);
		//因为目前defaultState是immutable，使用set进行更改，
		//会结合之前immutable对象的值和设置的值，返回一个新的对象，并不是修改state（which is a immutable object）
	}
	if(action.type === 'header/SEARCH_BLUR'){
		return state.set('focused',false);
	}
	if(action.type === actionTypes.CHANGE_LIST) {
		// return state.set('list',action.data).set('totalPage',action.totalPage);
		return state.merge({
			list: action.data,
			totalPage: action.totalPage
		});
	}
	if(action.type === actionTypes.MOUSE_ENTER){
		return state.set('mouseIn',true);
	}
	if(action.type === actionTypes.MOUSE_LEAVE){
		return state.set('mouseIn',false);
	}
	if(action.type === actionTypes.CHANGE_PAGE){

		return state.set('page',action.page);
	}

	return state;
}