import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import './css/Bootstrap.css';
import './css/Fontwasome.css';
import './css/Main.css';

import imagemGoku from '../pages/images/imagemGoku.jpeg';
import imagemVedita from '../pages/images/imagemVedita.jpeg';
import imagemTrunks from '../pages/images/imagemTrunks.jpeg';
import imagemGotenks from '../pages/images/imagemGotenks.jpeg';
import imageLogo from '../pages/images/imageLogo.png';
import imagemFoter from '../pages/images/imagemFoter.png';
import imagemFoter2 from '../pages/images/imagemFoter2.png';


class Footer extends Component {
  


    render() {
        return (
            <>
                <div style={{backgroundColor:'black'}}>
                    
                    <footer className="page-footer font-small mdb-color lighten-3 pt-4">


                        <div className="container ">


                            <div className=" row d-flex justify-content-around" style={{marginTop:'50px'}}>


                                <div className="col-lg-2 col-md-12 mb-4">

                              
                                    <div className="view overlay z-depth-1-half">
                                        <Link to='/sobreGoku'>
                                        <img src={imagemGoku} className="img-fluid"
                                            className='footerRedondo'alt="kkkkkk"  />
                                        
                                        </Link>
                                    </div>
                                    
                                </div>



                                <div className="col-lg-2 col-md-6 mb-4">


                                <div className="view overlay z-depth-1-half">
                                        <Link to='/sobreVedita'>
                                        <img src={imagemVedita} className="img-fluid"
                                            className='footerRedondo' alt="kkkkkk"/>
                                        
                                        </Link>
                                    </div>

                                </div>



                                <div className="col-lg-2 col-md-6 mb-4">


                                    <div className="view overlay z-depth-1-half">
                                    <Link to='/sobreTrunks'>
                                        <img src={imagemTrunks} className="img-fluid"
                                          className='footerRedondo'  alt="kkkkkk" />
                                        
                                        </Link>
                                    </div>

                                </div>

                                <div className="col-lg-2 col-md-12 mb-4">

                                    <div className="view overlay z-depth-1-half">
                                    <Link to='/sobreGotenks'>
                                        <img src={imagemGotenks} className="img-fluid"
                                           className='footerRedondo' alt="kkkkkk" />
                                        
                                        </Link>
                                    </div>

                                </div>


                            </div>


                        </div>
                        <div className='container'>
                        <div className ='d-flex justify-content-center'>
                        <img  src={imagemFoter} alt='kkkk' style={{width:'100px',height:'auto'}}/> 
                     <Link to='/'>
                     <img  src={imageLogo} alt='kkkk' style={{width:'100px',height:'auto'}}/> 
                                        
                     </Link>
                     
                     <img  src={imagemFoter2} alt='kkkk' style={{width:'100px',height:'auto'}}/> 
                     </div>
                     </div>
                                                <center>inicio</center>                
                     <p className='copyright text-muted'>
								Copyright &copy; Alan Severino 2019
							</p>
                    </footer>
                    
                    
                </div>


            </>
        )
    }


}
export default Footer;