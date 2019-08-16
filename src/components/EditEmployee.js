import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button, Confirm } from './common';
import { employeeUpdate, employeeSave, employeeClear, employeeDelete } from '../actions';

class EditEmployee extends Component {

	state = { showModal: false };

	componentWillMount() {
		_.each(this.props.employee, (value, prop) => {
			this.props.employeeUpdate({ value, prop });
		});
	}

	componentWillUnmount() {
		this.props.employeeClear();
	}

	onButtonPress() {
		const { name, shift, phone } = this.props;

		this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
	}

	onTextPress() {
		const { shift, phone } = this.props;

		Communications.text(phone, `Your upcoming shift is on ${shift}`);
	}

	onDecline() {
		this.setState({ showModal: false });
	}

	onAccept() {
		this.props.employeeDelete({ uid: this.props.employee.uid });
	}

	render() {
		return (
			<Card>
				<EmployeeForm />
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}> 
					Save Changes 
					</Button>
				</CardSection>
				<CardSection>
					<Button onPress={this.onTextPress.bind(this)}> 
					Text Schedule
					</Button>
				</CardSection>
				<CardSection>
					<Button onPress={() => this.setState({ showModal: !this.state.showModal })}> 
					Fire Employee
					</Button>
				</CardSection>				
				<Confirm
					visible={this.state.showModal}
					onAccept={this.onAccept.bind(this)}
					onDecline={this.onDecline.bind(this)}
				>
					{`Are you sure you want to fire ${this.props.name}?`}
				</Confirm>
			</Card>
		);
	}
}

const mapStateToProps = state => {
	const { name, shift, phone } = state.employeeForm;
	return { name, shift, phone };
};


export default connect(mapStateToProps, { 
	employeeUpdate, 
	employeeSave, 
	employeeClear,
	employeeDelete
})(EditEmployee);
