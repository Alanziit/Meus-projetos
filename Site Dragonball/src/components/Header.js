import React, { Component } from 'react';

import './css/Bootstrap.css';
import './css/Fontwasome.css';
import './css/Main.css';

class Header extends Component {
	constructor() {
		super();

		this.state = {
			offset: 1
		};
	}
	componentDidMount() {
		window.addEventListener('scroll', this.parallaxShift);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.parallaxShift);
	}
	parallaxShift = () => {
		this.setState({
			offset: window.pageYOffset
		});
	};

	render() {
		return (
			
			<header
				className='masthead'
				style={{
					backgroundImage: `url(${this.props.bg})`,
					backgroundPositionY: this.state.offset
				}}
			>
				<div className='overlay'></div>
				<div className='container' style={{ bottom: this.state.offset / 2 }}>
	
					<div className='row'>
						<div className='col-lg-8 col-md-10 mx-auto'>
							<div className='site-heading'>
								<h1>{this.props.titulo}</h1>
								<span className='subheading'>
                  {this.props.info}
								
								</span>
							</div>
						</div>
						
						
					</div>
					
				</div>
				
			</header>
		);
	}
}

export default Header;
