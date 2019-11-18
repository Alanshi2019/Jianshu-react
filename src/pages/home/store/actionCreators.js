import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

const changData = (result) => ({
	type: actionTypes.CHANGE_HOME_DATA,
	topicList: fromJS(result.topicList),
	articleList: fromJS(result.articleList),
	recommendList: fromJS(result.recommendList),
	writerList: fromJS(result.writerList),
	writerPage: 1,
	totalWriterPage: Math.ceil(result.writerList.length / 5)
});


const addHomeList = (result, page) => ({
	type: actionTypes.ADD_ARITCLE_LIST,
	result: fromJS(result),
	page

}); 

export const changeWriterPage = (page,totalpage) => {
	if(page < totalpage){
		const action = {
			type: actionTypes.CHANGE_WRITER_PAGE,
			page
		};
		return action;
	}
	else if(page === totalpage){
		const action = {
			type: actionTypes.CHANGE_WRITER_PAGE,
			page: 0
		};
		return action;
	}
};


export const changeHomeData = () => {
	return (dispatch) => {
		axios.get('http://localhost:3000/api/home.json').then((res) => {
			const result = res.data.data;
			dispatch(changData(result));
		}).catch(()=> {
			console.log('error');
		});	
	}
};


export const getMoreList = (page) => {
	return (dispatch) => {
		axios.get('http://localhost:3000/api/homeList.json?page=' + page).then((res)=>{
			const result = res.data.data;
			dispatch(addHomeList(result,page+1));

		}).catch(() => {
			console.log('error');
		});


	}
};