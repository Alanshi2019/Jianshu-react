import React, {PureComponent} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actionCreators from './store/actionCreators'
import {
	LoginWrapper,
	LoginTitle,
	LoginBox,
	Input,
	LoginButton
} from './style';

class Login extends PureComponent {
	render() {
		const {loginStatus} = this.props;
		if(!loginStatus) {
			return(
			<LoginWrapper>
				<LoginBox>
					<LoginTitle>Welcome To Jianshu</LoginTitle>
					<Input placeholder = "Account" ref={(input) => {this.account = input}}/>
					<Input placeholder = "Password" type = 'password'ref={(input) => {this.password = input}}/>
					<LoginButton onClick={() => this.props.login(this.account, this.password)}>Login</LoginButton>
				</LoginBox>
			</LoginWrapper>
			
		)
		}
		else{
			return <Redirect to= '/' />;
		}
	}

};
const mapStateToProps = (state) => ({
	loginStatus: state.login.get('login')
})


const mapDispatchToProps = (dispatch) => ({
	login(account, password){
		dispatch(actionCreators.login(account.value,password.value));
	}

})
export default connect(mapStateToProps, mapDispatchToProps)(Login);
