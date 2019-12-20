import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Index from './pages/Index';
import sobreGoku from './pages/sobreGoku';

import Navbar from './components/Navbar'

import './routes.css';




import sobreVedita from './pages/sobreVedita';
import sobreTrunks from './pages/sobreTrunks';
import sobreGotenks from './pages/sobreGotenks';
import Footer from './components/Footer';



class Routes extends Component {

	render() {
		return (
			<div>
				<Switch>
					<Route path='/' exact component={Index} />
					<Route path='/sobreGoku' exact component={sobreGoku} />
					<Route path='/Navbar' exact component={Navbar}/>
					<Route path='/sobreVedita' exact component={sobreVedita}/>
					<Route path='/sobreTrunks' exact component={sobreTrunks}/>
					<Route path='/sobreGotenks' exact component={sobreGotenks}/>
					<Route path='/Footer' exact component={Footer}/>
				</Switch>
			</div>
		);

	}
}

export default Routes;
