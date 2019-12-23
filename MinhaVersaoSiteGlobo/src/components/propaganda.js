import React,{Component} from 'react'
import Slider from 'infinite-react-carousel';

import propaganda from './images/propaganda.jpeg';
import propaganda2 from './images/propaganda2.jpeg';
import propaganda3 from './images/propaganda3.jpeg';


class Propaganda extends Component{

  
    render(){
        return(
          <center>
   
  <Slider dots>
    <div>
     <img src={propaganda} alt='imagem' className='imagemPropaganda'/>
    </div>
    <div>
    <img src={propaganda2} alt='imagem' className='imagemPropaganda'/>
    </div>
    <div>
    <img src={propaganda3} alt='imagem' className='imagemPropaganda'/>
    </div>
 
  </Slider>

</center>
        )
    }
}
export default Propaganda;