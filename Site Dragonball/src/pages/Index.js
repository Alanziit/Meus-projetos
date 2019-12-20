import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import './css/Bootstrap.css';
import './css/Fontwasome.css';
import './css/Main.css';

import Header from '../components/Header';
import dragon1 from './images/dragon1.png';
import imagemGoku from './images/imagemGoku.jpeg';
import imagemVedita from './images/imagemVedita.jpeg';
import imagemGotenks from './images/imagemGotenks.jpeg';
import imagemTrunks from './images/imagemTrunks.jpeg';
import Footer from '../components/Footer';



class Index extends Component {
	render() {
		return (
			<div>
				<Header
					bg={dragon1}
					titulo=''
					info=''
				/>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-8 col-md-10 mx-auto'>
							<div className='post-preview'>
								<span className=''>
									<span className='link'>
										<h2 className='post-title' style={{textAlign:'center'}}>Para saber mais sobre a historia clique "Saiba mais"</h2>

									</span>

								</span>

								<div className='row d-flex justify-content-around' >
										
			

											<div className="card" style={{ width: '18rem',marginBottom:'20px' }}>
											<Link to='/sobreGoku'>
												<img src={imagemGoku} className="card-img-top" alt="A historia de goku" />
												</Link>
												<div className="card-body" className='cardzao'>
													<h5 className="card-title" style={{ textAlign: 'center', padding: '10px' }}>Goku</h5>
													<p className="card-text">Um guerreiro nascido em um planeta de saijayns ,muito competitivo e atrapalhado...</p>
													<Link to='/sobreGoku'
														className="btn btn-primary  " style={{ textAlign: 'center', marginLeft: '50px',marginTop:'20px' }}>Saiba mais >>
															</Link>
												</div>
											</div>
											
											<div className="card" style={{ width: '18rem',marginBottom:'20px' }}>
												
												<img src={imagemVedita} className="card-img-top" alt="A historia de vedita" style={{width:'auto',height:'290px'}} />
												
												<div className="card-body" className='cardzao'>
													<h5 className="card-title" style={{ textAlign: 'center', padding: '10px' }}>Vedita</h5>
													<p className="card-text">Um guerreiro cheio de orgulho , tambem nascido em um planeta saijayn, sempre disputando com goku...</p>
													<Link to='/sobreVedita'
														className="btn btn-primary  " style={{ textAlign: 'center', marginLeft: '50px',marginBottom:'20px' }}>Saiba Mais >>
															</Link>
												</div>
											</div>
											<div className="card" style={{ width: '18rem',marginBottom:'20px' }}>
									
												<img src={imagemTrunks} className="card-img-top" alt="A historia de Trunks" style={{width:'auto',height:'290px'}}  />
										
												<div className="card-body" className='cardzao'>
													<h5 className="card-title" style={{ textAlign: 'center', padding: '10px' }}>Trunks</h5>
													<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
													<Link to='/sobreTrunks'
														className="btn btn-primary  " style={{ textAlign: 'center', marginLeft: '50px',marginBottom:'20px' }}>Saiba Mais>>
															</Link>
												</div>
											</div>
											<div className="card" style={{ width: '18rem',marginBottom:'20px' }}>
												<Link to='/sobreGotenks'>
												<img src={imagemGotenks} className="card-img-top" alt="A historia de Gotenks" style={{height:'290px'}} />
												</Link>
												<div className="card-body" className='cardzao'>
													<h5 className="card-title" style={{ textAlign: 'center', padding: '10px' }}>Gotenks</h5>
													<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
													<Link to='/sobreGotenks'
														className="btn btn-primary  " style={{ textAlign: 'center', marginLeft: '50px' }}>Saiba Mais >>
															</Link>
												</div>
											</div>

								</div>

							</div>
						</div>
					</div>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default Index;
