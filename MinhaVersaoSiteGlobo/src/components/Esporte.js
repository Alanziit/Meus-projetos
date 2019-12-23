import React, {Component} from 'react';
import Flavio from './images/Flavio.jpg';
import Cezar from './images/Cezar.jpg';
import Gustavo from './images/Gustavo.jpg';


class Esporte extends Component{
    render(){
        return(
            <>
                
                    
            
               <h1 className='texto2'>Esporte</h1>
                <h3 className='textoEsporte'> Grupo planeja um sitio para relembrar os velhos tempos de futebol</h3>

        
        
                    <div className='container ' >
                    
                    <div className=' row d-flex justify-content-around '>
                        <div className='col-lg-2 col-sm-12 mb-4'>
                                    <div className="card" className='img-fluid' className='imagemCard' >
                                        <img src={Flavio} className="card-img-top" alt="foto" />
                                        <div className="card-body">
                                            
                                        </div>
                                        
                                     </div>
                                     <p className="card-text" style={{color:'green'}}>Flavio diz:<br/>"Eu nao volto pra marcar meu negocio<br/> é carne e bola na rede"</p>
                         </div>
                         <div className='col-lg-2 col-sm-12 mb-4'>
                                    <div className="card" className='img-fluid' className='imagemCard'>
                                        <img src={Cezar} className="card-img-top" alt="foto" />
                                        <div className="card-body">
                                           
                                        </div>
                                        
                                    </div>
                                    <p className="card-text" style={{color:'green'}}>Cesinha e duvida na peleja<br/> Grupo faz oração pela presença</p>
                            </div>
                            <div className='col-lg-2 col-sm-12 mb-4'>
                                    <div className="card" className='img-fluid' className='imagemCard'>
                                        <img src={Gustavo} className="card-img-top" alt="foto" style={{width:'200px',height:'200px',padding:'10px'}} />
                                        <div className="card-body">
                                           
                                        </div>
                                        
                                    </div>
                                    <p className="card-text" style={{color:'green',marginTop:'30px'}}>Guga entre no clima de natal e comenta :<br/> "Tem toca pra todo mundo"</p>
                            </div>
                          
                    </div>        
                    </div>

</>
        )
    }
}
export default Esporte;