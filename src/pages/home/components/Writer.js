import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import * as actionCreators from '../store/actionCreators';
import {
	WriterWrapper,
	WriterTitle,
	WriterItem,
	WriterContent,
	WriterMore
} from '../style.js';

class Writer extends PureComponent {
	getWriterList(){
		const {writerList, writerPage} = this.props;
		const newWriter = [];
		const jsList = writerList.toJS();
		// console.log(jsList.length);
		// 注意由于用了componentDidMount，页面会被re-render，第一遍的时候jsList是没有
		// 任何元素在里面的，直接使用jsList[i].name会报错，只有在re-render之后才会有数据
		// 所以只有当jsList的长度不为0的时候再渲染。
		if(jsList.length){
			for(let i = (writerPage - 1) * 5; i< writerPage*5 ; i++ ){
			newWriter.push(
				<WriterItem key = {jsList[i].name}>
					<img 
						className = "writer-pic"
						alt = "" 
						src={jsList[i].imgUrl}/>
					<WriterContent>
						<p className = "writerName">{jsList[i].name}<span>+Follow</span></p>
						<p className = "writerDetail">Write {jsList[i].word} words - {jsList[i].like} Like</p>
					</WriterContent>
				</WriterItem>);
			
			};
		}
		return newWriter;
	};
	render() {
		const {writerPage,totalWriterPage,handleWriterSwtich} = this.props;
		return(
			<WriterWrapper>
				<WriterTitle>
					<p className = "writerRecommend">Recommend</p>
					<p className = "writerSwitch" onClick = {() => handleWriterSwtich(writerPage,totalWriterPage)}>
						<FontAwesomeIcon className= {'iconswitch'} icon={faSync} />
						 Switch
					</p>
				</WriterTitle>
					{this.getWriterList()}
				<Link to = "/login">
					<WriterMore>
						See All >
					</WriterMore>
				</Link>
			</WriterWrapper>

		)
	};
};

const mapStateToProps = (state) => ({
	writerList: state.home.get('writerList'),
	writerPage: state.home.get('writerPage'),
	totalWriterPage: state.home.get('totalWriterPage')

});

const mapDispatchToProps = (dispatch) => {
	return{
		handleWriterSwtich(page,totalpage){
			dispatch(actionCreators.changeWriterPage(page,totalpage));
		}
	}
};

export default connect(mapStateToProps,mapDispatchToProps)(Writer);







