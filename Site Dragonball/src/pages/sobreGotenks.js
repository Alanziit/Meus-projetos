import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './css/Bootstrap.css';
import './css/Fontwasome.css';
import './css/Main.css';

import Header from '../components/Header';

import fundoGotenks from './images/fundoGotenks.gif';
import Footer from '../components/Footer';


class Sobre extends Component {
	render() {
		return (
			<div>
				<Header bg={fundoGotenks} />
				<div className='container'>
					<div className='row'>
						<div className='col-lg-8 col-md-10 mx-auto'>
                        <h2 className='post-title' style={{textAlign:'center'}}>A historia de Gotenks</h2>
							<p>	Lorem ipsum purus vehicula ultricies tellus tortor viverra id posuere class mattis mollis suspendisse, sem est ante porttitor vivamus nullam a sapien donec eu mauris. lorem molestie massa convallis vulputate hac aliquam tempor rutrum, risus dolor sociosqu laoreet mollis aliquet molestie, vivamus eget suspendisse potenti curabitur magna conubia. non class in vitae tortor turpis volutpat venenatis litora nam erat, himenaeos nec nullam himenaeos fringilla malesuada ullamcorper eu lorem porta, nullam dui sit senectus hendrerit conubia sagittis curabitur suscipit. viverra lacinia donec lacus primis commodo habitasse donec, etiam eu neque vestibulum augue donec vitae primis, mi ipsum ut sed semper suspendisse. 

Blandit ligula tristique hendrerit ornare ipsum varius lacus curabitur tristique, morbi est lorem magna libero ultrices vel vestibulum quam convallis, aptent nibh hac auctor lacus inceptos risus vitae. lacus nam class porta felis ante fames convallis vivamus dictum, euismod integer condimentum placerat proin ante volutpat quisque, porta donec ante quisque cras amet suspendisse phasellus. dapibus leo aliquam vulputate quisque diam curae diam, nisi aenean amet fusce quisque integer euismod, venenatis lorem suspendisse nisi duis odio. feugiat id interdum etiam donec felis laoreet nullam, turpis venenatis nisi sodales felis aenean neque potenti, velit proin cursus eu purus enim. 

Senectus augue luctus ad potenti feugiat per sem cubilia ut fusce sem donec viverra suscipit, massa pretium tortor lorem nostra ullamcorper fringilla praesent habitant ad netus bibendum sodales. fringilla arcu lacus volutpat etiam nec habitant nec consequat neque adipiscing, leo vivamus sit torquent auctor consequat hendrerit aenean. turpis condimentum ligula mauris feugiat aliquam taciti porttitor nostra egestas, nullam egestas accumsan tortor rutrum habitasse donec aenean nulla, morbi consequat faucibus vel libero rhoncus malesuada phasellus. aliquet netus mi sodales inceptos facilisis platea diam vel per at consequat arcu eu pretium, luctus felis rutrum cras urna vitae dictumst sit turpis ligula dictumst aenean. 

Convallis vehicula posuere rutrum tristique praesent odio vestibulum, torquent etiam augue lacinia rutrum elementum rutrum, nullam ut lobortis cras pulvinar dictum. habitant tempus a lobortis donec pulvinar accumsan sollicitudin, aliquam euismod magna integer aliquam interdum augue sodales, cubilia sollicitudin cursus duis pharetra hac. sem fames molestie sodales sed pellentesque diam aliquam nostra magna vitae, curabitur ligula ut at tortor condimentum ornare primis nulla. tellus sit luctus fames pharetra tristique, tortor arcu porttitor volutpat habitant, eu semper dictumst pretium. accumsan enim vitae sociosqu duis orci nisl, lacus etiam fringilla euismod suscipit ut sodales, curabitur donec nullam sem tortor. 

Consequat odio pretium nostra diam sapien tincidunt amet eleifend, ligula nulla tristique per aliquam facilisis turpis. vitae semper urna malesuada quam aenean odio leo, laoreet aliquam elit venenatis iaculis vulputate primis, convallis eleifend a praesent fermentum est. quam volutpat ac nullam magna etiam felis nam molestie, luctus risus non pellentesque quis euismod ornare volutpat iaculis, suscipit augue senectus ultrices lacinia aliquam morbi. enim consectetur varius auctor adipiscing gravida sociosqu nostra netus dictum aliquam, habitasse viverra sed tincidunt nunc potenti mattis adipiscing vulputate aliquam torquent, suspendisse lobortis quisque inceptos at lorem turpis non magna. 

Tempus erat sollicitudin ipsum dolor tellus posuere, ac scelerisque per hendrerit urna. </p>
								
						</div>
					</div>
				</div>
			<Footer/>
			</div>
		);
	}
}

export default Sobre;
