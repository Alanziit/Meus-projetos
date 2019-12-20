import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './css/Bootstrap.css';
import './css/Fontwasome.css';
import './css/Main.css';


import imageLogo from '../../src/pages/images/imageLogo.png';

class NavBar extends Component {
	render() {
		return (
			
			<nav
				className='navbar navbar-expand-lg navbar-light fixed-top'
				id='mainNav'
			>
				<div className='container'>
					<Link to='/'>
						<span className='navbar-brand '>
							
							
							
						<div className='row'>
							<img src={imageLogo} width='100' alt='Logo que simboliza o anime' /> <h2 style={{marginTop:'45px'}}>Dragon Ball</h2>
							</div>
						</span>
					</Link>
					<button
						className='navbar-toggler navbar-toggler-right'
						type='button'
						data-toggle='collapse'
						data-target='#navbarResponsive'
						aria-controls='navbarResponsive'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						Menu
						<i className='fas fa-bars'></i>
					</button>
					<div className='collapse navbar-collapse' id='navbarResponsive'>
						<ul className='navbar-nav ml-auto'>
						
							<li className='nav-item'>
								<Link className='nav-link' to='/'>
									<span className='link'>Inicio</span>
								</Link>
							</li>
						
						</ul>
					</div>
					
				</div>
				
			</nav>
			
		);
	}
}

export default NavBar;
