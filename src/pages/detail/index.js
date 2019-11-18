import React, {PureComponent} from 'react';
import * as actionCreators from './store/actionCreators';
import {connect} from 'react-redux';
import{
	DetailWrapper,
	Header,
	Content
} from './style.js';

class Detail extends PureComponent {
	render() {
		//console.log(this.props.match.params.id);获取detail_id
		const {title, content} = this.props;
		return(
			<DetailWrapper>
				<Header>{title}</Header>
				<Content dangerouslySetInnerHTML = {{__html: content}} />
			</DetailWrapper>
		)
	}
	componentDidMount(){
		this.props.getDetail(this.props.match.params.id);
	}
};

const mapStateToProps = (state) => ({
	title:state.detail.get('title'),
	content:state.detail.get('content')
});

const mapDispatchToProps = (dispatch) => ({
	getDetail(id){
		dispatch(actionCreators.getDetail(id));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);