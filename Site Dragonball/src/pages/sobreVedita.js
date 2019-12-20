import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './css/Bootstrap.css';
import './css/Fontwasome.css';
import './css/Main.css';

import Header from '../components/Header';

import fundoVedita from './images/fundoVedita.gif';
import imagemVeditaTexto1 from './images/imagemVeditaTexto1.jpg';
import imagemVeditaTexto2 from './images/imagemVeditaTexto2.gif';
import imagemVeditaTexto3 from './images/imagemVeditaTexto3.jpg';
import Footer from '../components/Footer';


class Sobre extends Component {
	render() {
		return (
			<div>
				<Header bg={fundoVedita} />
				<div className='container'>
					<div className='row'>
						<div className='col-lg-8 col-md-10 mx-auto'>
							<h2 className='post-title' style={{ textAlign: 'center' }}>A historia de Vedita</h2>
							<p>	Lorem ipsum nibh fermentum curae accumsan tempus justo, est nulla arcu integer bibendum mi leo sagittis, eros lacus convallis dictum eleifend quisque. semper odio metus ut porta aenean pharetra adipiscing, <img src={imagemVeditaTexto1} alt='Vedita' style={{width:'425px',height:'auto',float:'left',margin:'10px'}}/>orci taciti donec quis himenaeos dictum scelerisque ipsum, posuere justo quis urna per elit. convallis condimentum ad nec vehicula, fames condimentum neque vehicula quisque, primis tellus habitasse. commodo lectus ultrices mattis eleifend nec augue nostra diam, euismod lorem eros tincidunt cubilia bibendum conubia luctus eget, dictum adipiscing bibendum lobortis enim platea per. ullamcorper maecenas conubia primis fames posuere sociosqu odio metus pulvinar bibendum, torquent aptent quisque nunc curabitur sit conubia fringilla praesent ultricies, pretium etiam dui quis aliquet aliquam dictumst platea tristique.

Purus lobortis sit mi elit faucibus varius luctus iaculis, sapien pharetra ut porta semper cubilia id quis, phasellus ullamcorper nunc facilisis mauris lobortis ac. sem fames netus tristique luctus donec, sapien viverra cras accumsan, nullam quisque nisl netus. elit lectus ligula amet potenti sem leo viverra sagittis sodales pellentesque, non lacinia magna molestie aenean consequat dolor tempor tincidunt inceptos, nam placerat nisl auctor nullam etiam neque malesuada rhoncus. porta sollicitudin aenean feugiat aliquet congue nullam fusce turpis ipsum inceptos integer aliquam lacus, egestas quam amet quisque sem himenaeos nunc primis cubilia curabitur dictumst nunc.

Morbi placerat ornare neque leo ultricies id bibendum duis nam quisque fames fermentum varius, tristique tortor duis odio ut inceptos dictumst pulvinar imperdiet urna consectetur. consequat posuere class sem molestie id donec sapien torquent nostra, vehicula blandit<img src={imagemVeditaTexto2} alt='vedita' style={{float:'right',margin:'10px'}}/> ut posuere et est fusce eleifend, nisl id tortor lacus sodales viverra faucibus luctus. morbi pharetra suspendisse turpis imperdiet platea congue, iaculis eget luctus libero enim, vulputate condimentum convallis feugiat viverra. cursus habitasse non elit etiam hac eu at semper mattis pretium nunc odio posuere, litora nec leo inceptos quisque donec etiam elementum pretium porta blandit eget.

Orci iaculis sollicitudin massa lobortis curabitur senectus augue nec, sociosqu torquent phasellus fames pharetra pulvinar tristique, pulvinar praesent tristique feugiat lorem id velit. diam quisque libero maecenas sit donec dapibus lacus taciti hac purus, bibendum ipsum maecenas platea netus habitant condimentum turpis et blandit, mattis elementum enim augue a ornare nullam potenti libero. elementum vivamus fermentum egestas lacinia scelerisque mollis leo platea cras proin lacus augue sollicitudin habitant bibendum ad bibendum netus phasellus sodales, est vestibulum malesuada eleifend suspendisse commodo neque nec amet vivamus donec nam scelerisque proin nibh quisque fermentum hac quisque.

Accumsan eros commodo interdum torquent ut semper mattis, arcu lorem iaculis curae convallis aliquet aenean molestie, nostra pretium sollicitudin posuere urna vitae. hendrerit hac donec eu sagittis praesent faucibus elit, praesent egestas quam at in nostra rutrum, id fermentum habitasse bibendum gravida scelerisque. neque habitasse elit maecenas potenti enim <img  className='img-fluid'src={imagemVeditaTexto3} alt='vedita' style={{width:'725px',height:'auto'}}/>lorem venenatis consectetur, id malesuada aenean lobortis hac elementum fusce ut, etiam blandit risus quisque dictum pulvinar rutrum. sodales eget faucibus etiam tellus molestie libero vel ac et id etiam praesent neque, vel porta suspendisse purus ultrices dictumst convallis ultrices fames sagittis vestibulum nisl.

Per nunc bibendum auctor volutpat mattis, mauris libero aliquam at, mi dolor donec orci. </p>

						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Sobre;
