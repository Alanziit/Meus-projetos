import React, { Component } from 'react'

import Erick from './images/Erick.jpg'

import Max from './images/Max.jpg'
import Bruno from './images/Bruno.jpg'


class Noticia1 extends Component {
    render() {
        return (
            <>
                
                    
                        <h1 className='texto1'>Alan Severino faz uma  copia do <br />
                            site da globo vira sucesso e arruma  um emprego</h1>
                           
                            

                    
                    
                                <div className='container ' >
                                <div className=' row d-flex justify-content-around '>
                                    <div className='col-lg-2 col-sm-12 mb-4'>
                                                <div className="card" className='img-fluid' className='imagemCard' >
                                                    <img src={Erick} className="card-img-top" alt="foto" />
                                                    <div className="card-body">
                                                        
                                                    </div>
                                                    
                                                 </div>
                                                 <p className="card-text" style={{color:'red'}}>Depois de um longo inverno ,<br/>Erick volta para o Brasil </p>
                                     </div>
                                     <div className='col-lg-2 col-sm-12 mb-4'>
                                                <div className="card" className='img-fluid' className='imagemCard'>
                                                    <img src={Max} className="card-img-top" alt="foto" />
                                                    <div className="card-body">
                                                       
                                                    </div>
                                                    
                                                </div>
                                                <p className="card-text" style={{color:'red'}}>Max sobre caso vanessa diz : <br/>"Quem tem dó é piano "</p>
                                        </div>
                                        <div className='col-lg-2 col-sm-12 mb-4'>
                                                <div className="card" className='img-fluid' className='imagemCard'>
                                                    <img src={Bruno} className="card-img-top" alt="foto" />
                                                    <div className="card-body">
                                                        
                                                    </div>

                                                </div>
                                                <p className="card-text" style={{color:'red'}}>Bruno dá a Luz para seu primeiro<br/> filho e comenta "Nasci pra isso... "</p>
                                        </div>
                                     
                                </div>        
                                </div>
                    
                    
                    
                





            </>
        )
    }
}
export default Noticia1;