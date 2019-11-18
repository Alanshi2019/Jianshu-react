import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../store/actionCreators';
import {Link} from 'react-router-dom';
// SPA
import {
	ListItem,
	ListInfo,
	LoadMore
} from '../style';

class List extends PureComponent {
	render() {
		const {article,page, getMoreList} = this.props;
		return (
			<div>
				{
					article.map((item,index)=>{
						return (
							<Link key = {index} to = {'/detail/' + item.get('id')}>
								<ListItem >
									<img 
										className = "pic"
										alt = ""
										src = {item.get('imgUrl')}/>
									<ListInfo key={item.get('id')}>
										<h3 className = "title">{item.get('title')}</h3>
										<p className = "desc">{item.get('content')}</p>
									</ListInfo>
								</ListItem>
							</Link>
						)
					})
				}
			<LoadMore onClick = {() => getMoreList(page)}>加载更多</LoadMore>
			</div>
		)
	};
};

const mapStateToProps = (state) => ({
	article: state.home.get('articleList'),
	page: state.home.get('articlePage')
});

const mapDispatchToProps = (dispatch) => ({
	getMoreList(page){
		dispatch(actionCreators.getMoreList(page));
	}
});

export default connect(mapStateToProps,mapDispatchToProps)(List);