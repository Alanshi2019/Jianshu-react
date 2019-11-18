import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {
	RecommendWrapper,
	RecommendItem
} from '../style';

class Recommend extends PureComponent {
	render() {
		const {list} = this.props;
		return(
			<div>
				<RecommendWrapper>
					{
						list.map((item)=>{
							return(
								<RecommendItem key= {item.get('id')}>
									 <a href = {item.get('link')}>
										<img 
										className = "recommend-pic"
										src = {item.get('imgUrl')} 
										alt="Banner s club"/>
									</a>
								</RecommendItem>
							)
						})
					}
				</RecommendWrapper>
			</div>
		)
	};
};

const mapStateToProps = (state) => ({
	list: state.home.get('recommendList')
});

export default connect(mapStateToProps,null)(Recommend);