import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyA_5j_h5cpYoYaxCwN4v5QzFeBkwXiacNY',
			authDomain: 'manager-153ec.firebaseapp.com"',
			databaseURL: 'https://manager-153ec.firebaseio.com',
			projectId: 'manager-153ec',
			storageBucket: '',
			messagingSenderId: '667947489710'
		};
		firebase.initializeApp(config);
	}

	render() {
		console.log();
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
