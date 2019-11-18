import {fromJS} from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
	topicList: [],
	articleList: [],
	recommendList: [],
	writerList:[],
	writerPage : 1,
	totalWriterPage: 1,
	articlePage: 1
});

export default (state = defaultState, action) => {
	if(action.type === actionTypes.CHANGE_HOME_DATA){
		return state.merge({
			"topicList":action.topicList,
			"articleList":action.articleList,
			"recommendList":action.recommendList,
			"writerList":action.writerList,
			"writerPage": 1,
			"totalWriterPage": action.totalWriterPage
		});
	};
	if(action.type === actionTypes.CHANGE_WRITER_PAGE){
		return state.set('writerPage',action.page + 1);
	};
	if(action.type === actionTypes.ADD_ARITCLE_LIST){
		return state.merge({
			"articleList": state.get('articleList').concat(action.result),
			articlePage: action.page
		});
		
	}
	return state;
}