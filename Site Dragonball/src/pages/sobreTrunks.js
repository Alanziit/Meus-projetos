import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './css/Bootstrap.css';
import './css/Fontwasome.css';
import './css/Main.css';

import Header from '../components/Header';

import fundoTrunks from './images/fundoTrunks.gif';
import Footer from '../components/Footer';
;

class Sobre extends Component {
	render() {
		return (
			<>
		
			<div>
				<Header bg={fundoTrunks} />
				
				<div className='container'>
					<div className='row'>
						<div className='col-lg-8 col-md-10 mx-auto'>
							
                        <h2 className='post-title' style={{textAlign:'center'}}>A historia de Trunks</h2>
						
							<p>	Lorem ipsum hac leo blandit tempor magna consectetur elementum, etiam blandit semper purus euismod rutrum malesuada felis class, faucibus conubia fermentum potenti ipsum taciti faucibus. luctus et nisl ligula habitant nulla id litora ac, neque quisque vivamus primis curabitur ut netus ut rhoncus, curabitur eleifend ullamcorper congue aenean etiam orci. turpis lobortis sollicitudin accumsan nam lectus cubilia rhoncus porttitor sapien volutpat, condimentum tempus torquent nisi ultrices condimentum tellus diam odio taciti, dictum adipiscing suscipit eleifend praesent ullamcorper cubilia gravida curabitur. morbi ut velit vestibulum primis commodo lectus, vitae sapien placerat habitant amet. 

Felis primis condimentum vulputate platea habitant aptent bibendum, nostra ultrices ipsum sit vehicula cubilia ac eget, gravida pharetra bibendum duis nam vivamus. euismod metus suscipit fermentum maecenas odio nec enim suscipit habitasse, quis nostra mauris torquent auctor nisl quisque nullam, fames mauris class curabitur tincidunt tempus leo eget. consectetur congue dolor phasellus pellentesque porta, orci tempor amet nec nisl, ullamcorper cubilia morbi consequat. ullamcorper sapien nam aenean nunc magna duis fringilla commodo, elit integer diam semper porta feugiat tristique netus, placerat justo aenean quam ipsum pellentesque consequat. ut etiam molestie hendrerit amet bibendum egestas, aliquam mi ut a quis dui venenatis, mi lorem taciti aliquet vestibulum. 

Cursus odio sapien sodales sociosqu habitasse aliquam sollicitudin, dui quam elit auctor laoreet scelerisque dictumst sit, magna duis elit suscipit etiam ipsum. imperdiet nec lobortis velit dapibus tellus molestie integer netus, semper pharetra viverra nec magna luctus litora. tristique duis aliquet cras aenean mollis fames habitasse vel, interdum dui varius vulputate vehicula libero semper porta aliquam, nibh purus ullamcorper maecenas a sapien accumsan. sagittis id euismod rutrum eget urna mi elit nisi mollis, suscipit ornare elementum nibh aenean elementum a amet hendrerit, neque risus sed lorem sollicitudin neque cubilia tristique. 

Leo metus vestibulum amet nisi ac maecenas ipsum lobortis, ultricies blandit ipsum molestie neque interdum torquent tellus, aptent donec luctus fusce rutrum vehicula condimentum. netus mollis class facilisis scelerisque vivamus aliquam sed hac, tincidunt dapibus curae quisque ultrices class commodo, fermentum praesent volutpat sagittis tempor faucibus non. nibh cubilia sem ullamcorper ante feugiat donec blandit justo, duis donec dolor curabitur mollis dictumst curae hendrerit, ut pellentesque porta pharetra felis gravida tempor. et pretium sapien quis condimentum facilisis neque, eu pretium etiam morbi cursus ornare sem, etiam aptent malesuada etiam ultricies. 

Sagittis eleifend velit litora aenean volutpat vehicula laoreet fusce eros facilisis nostra etiam, tristique at vestibulum tincidunt sapien habitasse sapien nec non et urna amet adipiscing, vulputate donec platea blandit per vivamus hac primis ipsum lacinia vitae. phasellus venenatis cras faucibus risus vehicula ligula augue lorem malesuada pharetra fermentum, fusce leo consequat odio lobortis fringilla velit litora curae. rutrum congue auctor maecenas conubia eu netus elementum fusce, vestibulum id dui nisi id ad iaculis, pulvinar taciti ligula elementum torquent varius molestie. vivamus per sed integer ut fusce quisque laoreet accumsan sem non lacus et elementum sagittis magna, ipsum tristique feugiat laoreet ornare felis luctus nunc cursus elit lobortis quisque diam inceptos. 

Mauris auctor neque suscipit molestie nunc fringilla, adipiscing a aptent ullamcorper. </p>
								
						</div>
					</div>
				</div>
			<Footer/>
			</div>
			</>
		);
	}
}

export default Sobre;
