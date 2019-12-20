import React, { Component } from 'react';
import { BrowserRouter, withRouter } from 'react-router-dom';

import Routes from './routes';
import Navbar from './components/Navbar';




class App extends Component {

	render() {
		return (
			<div>
				<BrowserRouter>
					<Navbar />
					<Routes />
					<sobreVedita/>
					
				</BrowserRouter>
			</div>
		)
	}
}

export default App;
