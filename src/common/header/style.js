import styled from 'styled-components';
import logoPic from '../../statics/logo.png'
export const HeaderWrapper = styled.div`
	z-index: 1;
	position: relative;
	height : 56px;
	border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	width: 100px;
	height : 56px;
	background: url(${logoPic});
	background-size: contain;
`;

export const Nav = styled.div`
	padding-right: 70px;
	box-sizing: border-box;
	width: 960px;
	height: 100%;
	margin: 0 auto;

`;


export const NavItem = styled.div`
	line-height : 56px;
	padding: 0 15px;
	font-size: 17px;
	color: #333;
	&.left {
		float: left;
	}
	&.right {
		float: right;
		color: #969696;
	}
	&.active {
		color: #ea6f5a;
	}
	cursor: pointer;
`;
// &. 当navitem标签中的某个元素classname为left的时候

export const SearchWrapper = styled.div`
	float:left;
	position: relative;
	.iconfont{
		color: grey;
		position: absolute;
		right: 5px;
		bottom: 10px;
		width: 30px;
		line-height: 30px;
		border-radius: 15px;
		text-align: center;
		&.focused {
			padding: 7px 1px;
			bottom: 4px;
			background: #a7a7a7;
			color: #fff;
			
		}
	}

	
`;
// .iconfont 当SearchWrapper组件里面 有className 为iconfont的时候


export const NavSearch = styled.input.attrs({
	placeholder: 'Search'
})`

	width: 160px;
	height: 38px;
	padding: 0 50px 0 20px;
	margin-top: 9px;
	margin-left: 20px;

	box-sizing: border-box;
	border: none;
	outline: none;
	border-radius: 19px;
	background: #eee;
	font-size: 14px;
	color: #666;
	&::placeholder {
		color: #999;
	}
	&.focused {
		width: 240px;
	}
	&.slide-enter {
		transition: all .2s ease-out;
	}
	&.slide-enter-active {
		width: 240px;
	}
	&.slide-exit {
		transition: all .2s ease-out;
	}
	&.slide-exit-active {
		width: 160px;
	}
`

export const SearchInfo = styled.div`
	position: absolute;
	left: 0;
	top: 56px;
	width: 240px;
	padding: 0 20px;
	box-shadow: 0 0 8px rgba(0,0,0, .2);
	background:white;

`

export const SearchInfoTitle = styled.div`
	margin-top: 20px;
	margin-bottom: 15px;
	line-height:20px;
	font-size: 14px;
	color: #969696;

`

export const SearchInfoSwitch = styled.span`

	float:right;
	font-size:13px;
	cursor:pointer;
	.iconswitch {
		margin-right: 2px;
		transition: all .15s ease-in;
		transform: rotate(0deg);
		display:block;
		transform-origin: center center;
		float:left;
	}

	&:hover {
      color:#cccccc;
    }
    &:active {
		.iconswitch{
      	transform: rotate(180deg);
      }
    }

`

export const SearchInfoItem = styled.a`
	display:block;
	float:left;
	line-height: 20px;
	padding: 0 5px;
	margin-right:10px;
	margin-bottom: 10px;
	font-size: 12px;
	border: 1px solid #ddd;
	color: #787878;
	border-radius: 3px;


`
export const SearchInfoList = styled.div`

	overflow: hidden;

`

export const Addition = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	height: 56px;
`

export const Button = styled.div`
	float:right;
	line-height: 38px;
	margin-top:9px;
	border-radius: 19px;
	border: 1px solid #ec6149;
	margin-right: 20px;
	padding: 0 20px;
	font-size:14px;
	&.reg{
		color: #ec6149
	}
	&.writting {
		color: #fff;
		background: #ec6149;
	}
`

