import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faSearch, faSync } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';
import * as actionCreators from './store/actionCreators';
import * as actionCreators_login from '../../pages/login/store/actionCreators';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoItem,
	SearchInfoList,
	Addition,
	Button,
	SearchWrapper
} from './style.js'; 

class Header extends Component {
	getListAreas(){
		const {focused, list,page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
		const pageList = [];
		const jsList = list.toJS(); // 将immutable数组转化为js数组
		for(let i = (page-1) * 10; i< page * 10;i++ ){
			pageList.push(<SearchInfoItem key={i}> {jsList[i]}</SearchInfoItem>)
		};
		//这里他妈可以直接塞JSX语句 反了天了
		//在底下可以通过 {pageList}使用
		if(focused || mouseIn) {
			return(<SearchInfo 
						onMouseEnter = {handleMouseEnter}
						onMouseLeave = {handleMouseLeave}>
						<SearchInfoTitle>
							Top 10
							<SearchInfoSwitch onClick = {() => handleChangePage(page,totalPage, this.spin)}>
								<p ref = {(icon) => this.spin = icon}>
									<FontAwesomeIcon className= {'iconswitch'} icon={faSync} />
									 Switch
								</p>
							</SearchInfoSwitch>
						</SearchInfoTitle>
						<SearchInfoList>
							{pageList}
						</SearchInfoList>
					</SearchInfo>)
		}else{
			return null;
		}
	}

	//onMouseEnter 当鼠标 进入 该区域的时候执行。
	//ref可以将DOM打印出来
	render(){
		const { focused, handleInputFocus, handleInputBlur, list,login,handleLogout } = this.props;
		return(
			<HeaderWrapper>
				<Link to = '/'>
					<Logo/>
				</Link>
				<Nav>
					<NavItem className = "left active">Home</NavItem>
					<NavItem className = "left">Download</NavItem>
					{
						login? 
						<NavItem onClick = {handleLogout} className = "right">Logout</NavItem> : 
						<Link to='/login'>
							<NavItem className = "right">Login</NavItem>
						</Link>
					}
					<NavItem className = "right">Aa</NavItem>
					<SearchWrapper>
						<CSSTransition
				            in = {focused}
				            timeout={200} //ms
				            classNames = "slide"  
				          >
							<NavSearch
								className = {focused ? "focused": ""}
								onFocus = {() => handleInputFocus(list)}
								onBlur = {handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<FontAwesomeIcon className={focused ? 'focused iconfont': 'iconfont'} icon={faSearch} />
						{this.getListAreas(focused)}	
					</SearchWrapper>
				</Nav>
				<Addition>		
					<Button className = 'writting'>
					<FontAwesomeIcon  icon={faPencilAlt} />
						Post
					</Button>
					<Button className = 'reg'>
						Sign up
					</Button>	
				</Addition>
			</HeaderWrapper>
		)
	} 
}


//当我连接到store的时候 我该如何处理里面的数据 state表示store里的数据,将其映射到props，所以上面的代码全将this.state 改成 this.props
//注意因为使用了combineReducer将reducer分成了header等部分，那么在这里调用state时候必须申明state.header.focused
const mapStateToProps = (state) => {
	return {
		focused: state.header.get('focused'),
		list:state.header.get("list"),
		page:state.header.get("page"),
		totalPage: state.header.get("totalPage"),
		mouseIn: state.header.get("mouseIn"),
		login: state.login.get("login")
	}
}
//当组件改变store里面的内容， 那需要调用dispatch方法（全部写在这里）
const mapDispathToProps = (dispatch) => {
	return {
		handleInputFocus(list){
			if(list.size === 0) {
				dispatch(actionCreators.getList(list.size));
			}
			dispatch(actionCreators.searchFocus());
			
		},
		handleInputBlur(){
			dispatch(actionCreators.searchBlur());
		},
		handleInfoSwitch(){
			dispatch(actionCreators.getList());
		},
		handleMouseEnter(){
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave(){
			dispatch(actionCreators.mouseLeave());
		},
		handleChangePage(page,totalPage,spin){
			if(page < totalPage){
				dispatch(actionCreators.changePage(page + 1));
			}
			else if(page === totalPage){
				dispatch(actionCreators.changePage(1));
			}
		},
		handleLogout(){
			dispatch(actionCreators_login.logout());
			alert("Logout successful.");
		}

	}
}

export default connect(mapStateToProps,mapDispathToProps)(Header);
