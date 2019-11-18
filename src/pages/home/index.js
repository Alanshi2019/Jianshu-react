import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Topic from './components/Topic.js';
import Recommend from './components/Recommend.js';
import Writer from './components/Writer.js';
import List from './components/List.js';
import * as actionCreators from './store/actionCreators';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import {
	HomeWrapper,
	HomeLeft,
	HomeRight,
	BackTop
} from './style';

class Home extends PureComponent {
	handleScrollTop(){
		window.scrollTo(0,0);
	};
	render() {
		return(
			<HomeWrapper>
				<HomeLeft>
					<img className = 'banner-image' src="//upload.jianshu.io/admin_banners/web_images/4741/240c3b01ebd63e7a7129976df20c5e10bd43d799.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540"/>
					<Topic />
					<List />
				</HomeLeft>

				<HomeRight>
					<Recommend />
					<Writer />
				</HomeRight>
				<BackTop onClick={this.handleScrollTop}>
					<FontAwesomeIcon className= {'iconup'} icon={faChevronUp} />

				</BackTop>
			</HomeWrapper>
		)
	};
	componentDidMount(){
		this.props.changeHomeData();
	};
};

//容器组件做逻辑处理
const mapDispatchToProps = (dispatch) => ({
	changeHomeData(){
		dispatch(actionCreators.changeHomeData());
	}
});

export default connect(null, mapDispatchToProps)(Home);

















