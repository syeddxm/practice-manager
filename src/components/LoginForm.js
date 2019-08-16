import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Field, Button, Spinner } from './common';


class LoginForm extends Component {

	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		const { email, password } = this.props;

		this.props.loginUser({ email, password });
	}

	renderButton(loading) {
		if (this.props.loading) {
			return <Spinner />;
		}
		return ( 
			<Button onPress={this.onButtonPress.bind(this)}>
			Login
			</Button>
		);
	}

	render() {
		console.log(this.props.email);
		return (
			<Card>
				<CardSection>
					<Field
						label="Email"
						placeholder="maham@poop.com"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
					/>
				</CardSection>

				<CardSection>
					<Field
						secureTextEntry
						label="Password"
						placeholder="password"
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}
					/>
				</CardSection>

				<CardSection>

					{this.renderButton()}
				</CardSection>
				<Text>
					{this.props.message}					
				</Text>

			</Card>
		);
	}
}


const mapStateToProps = ({ auth }) => {
	const { email, password, error, message, loading } = auth;
	return {
		email,
		password,
		error,
		message,
		loading
	};
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
