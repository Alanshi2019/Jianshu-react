import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data) => ({
	type: actionTypes.CHANGE_LIST,
	data: fromJS(data),
	totalPage: Math.ceil(data.length / 10)
});

//注意：这里因为list在reducer中被定义为了immutable对象 这里需要使用fromJS将
//JSON中传过来的普通对象data变为immutable的
//Math.ceil取整

export const searchFocus = ()=> ({
	type:actionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({

	type:actionTypes.SEARCH_BLUR
});
export const mouseEnter = () =>({
	type:actionTypes.MOUSE_ENTER

});
export const mouseLeave = () =>({
	type:actionTypes.MOUSE_LEAVE

});

export const changePage = (page) =>({
	type:actionTypes.CHANGE_PAGE,
	page

});

//这里因为需要export一个函数 必须使用中间件redux thunk
export const getList = (length) => {
	return (dispatch) => {
		axios.get('http://localhost:3000/api/headerList.json').then((res) => {
			const data = res.data;
			dispatch(changeList(data.data))
		}).catch(()=> {
			console.log('error');
		})
	}
	
};