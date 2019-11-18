import styled from 'styled-components';

export const HomeWrapper = styled.div`
	width: 960px;
	margin: 0 auto;
	overflow: hidden;

`

export const HomeLeft = styled.div`
	float: left;
	margin-left: 15px;
	padding-top: 30px;
	width:625px;
	.banner-image{
		width:625px;
		height:270px;
	}
`

export const HomeRight = styled.div`
	float: right;
	width:280px;
	
`


export const TopicWrapper = styled.div`
	padding: 20px 0 10px 0;
	overflow: hidden;
	margin-left: -18px;
	border-bottom: 1px solid #dcdcdc;
	
`

export const TopicItem = styled.div`
	float: left;
	background: #f7f7f7;
	height:32px;
	margin-left: 18px;
	padding-right: 10px;
	line-height: 32px;
	font-size:14px
	border: 1px solid #dcdcdc;
	color:black;
	border-radius: 4px;
	.topic-pic{
		height:32px;
		width: 32px;
		display: block;
		float:left;
		margin-right: 10px;
	}
	margin-bottom: 18px;
	
`

export const ListItem = styled.div`

	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	overflow:hidden;
	.pic {
		display:block;
		width:125px;
		height: 100px;
		float:right;
		margin-left: 5px;
	}
`

export const ListInfo = styled.div`
	width: 490px;
	float:left;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333
	}
	.desc {
		line-height: 24px;
		font-size: 13px;
		color: #999;
	}

`

export const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	line-height:40px;
	margin: 30px 0;
	background: #a5a5a5;
	border-radius: 20px;
	color: #fff;
	text-align: center;
	cursor: pointer;
`

export const RecommendWrapper = styled.div`
	margin: 30px 0;
	width: 280px;
`

export const RecommendItem = styled.div`
	height: 50px;
	width: 280px;
	.recommend-pic{
		height:50px;
	}
	margin: 0 0 6px;

`

export const WriterWrapper = styled.div`
	width: 280px;
	height: 365px;
	a{
		text-decoration: none;
	}

`

export const WriterTitle = styled.div`
	width: 280px;
	overflow:hidden;
	.writerRecommend{
			width:56px;
			height:16px;
			font-size: 14px;
			float:left;
			padding-top:2px;
			padding-left: 2px;
			color: #989898;
			font-weight: 700;
	}
	.writerSwitch{
		
		float:right;
		font-size: 14px;
		color: #989898;
		width: 64px;
		cursor: pointer;
	}
	.iconswitch{
		margin-right:5px;
		transition: all .15s ease-in;
		transform: rotate(180deg);
		transform-origin: center center;

	}
	.writerSwitch:active {
		.iconswitch{
      		transform: rotate(0deg);
      	}
    }

`

export const WriterItem = styled.div`
	width: 276px;
	margin-top: 10px;
	
	display:block;
	overflow:hidden
	.writer-pic{
		margin-left:5px;
		border: 1px solid #ddd;
		float:left;
		border-radius: 50%;
		vertical-align: middle;
		width: 48px;
		height: 48px;
		margin-right: 5px;
	}

`


export const WriterContent = styled.div`
	float:rigth;
	line-height: 20px;
	height: 50px;
	.writerName{
		font-size: 14px
	}
	.writerDetail{
		font-size: 12px;
		color: #969696;

	}
	span{
		float:right;
		font-size: 13px;
		color: #42C02E;
	}
`

export const WriterMore = styled.div`
	display:block;
	margin-top: 15px;
	padding: 8.5px 107.5px;
	background: #F7F7F7;
	border: 1px solid #dcdcdc;
	color: #989898;
	border-radius: 5px;
	font-size: 13px;
	cursor: pointer;
`
export const BackTop = styled.div`

	position: fixed;
	width: 60px;
	height: 60px
	line-height: 60px;
	right: 80px;
	bottom: 30px;
	text-align:center;
	border: 1px solid #dcdcdc;
	font-size: 14px;
	cursor: pointer;
	border-radius: 15px;
	color: #dcdcdc;
	:hover{
		background:#ddd;
		color: white;
	}

`
