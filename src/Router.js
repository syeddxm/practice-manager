import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EditEmployee from './components/EditEmployee';
import AddEmployee from './components/AddEmployee';

const RouterComponent = () => {
	return ( 
		<Router>
			<Scene key="root" hideNavBar>
				<Scene key="auth">
					<Scene key="login" component={LoginForm} title="Login Please" />
				</Scene>

				<Scene key="main">
					<Scene 
					key="employeeList" 
					component={EmployeeList} 
					title="Employees" 
					rightTitle=" Add an Employee"
					onRight={() => Actions.addEmployee()}
					initial
					/>
					<Scene key="addEmployee" component={AddEmployee} title="Add Employee" />
					<Scene key="editEmployee" component={EditEmployee} title="Edit Employee" />
				</Scene>
			</Scene>
		</Router>
	);
};

export default RouterComponent;
