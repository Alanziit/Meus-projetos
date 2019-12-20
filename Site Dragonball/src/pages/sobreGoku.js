import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './css/Bootstrap.css';
import './css/Fontwasome.css';
import './css/Main.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

import gokuFundo2 from './images/gokuFundo2.gif';

import imagemGokuTexto1 from './images/imagemGokuTexto1.jpeg';
import imagemGokuTexto2 from './images/imagemGokuTexto2.jpeg';
import imagemGokuTexto3 from './images/imagemGokuTexto3.jpeg';


class Sobre extends Component {
	render() {
		return (
			<div>
				<Header bg={gokuFundo2} />
				<div className='container'>
					<div className='row'>
						<div className='col-lg-8 col-md-10 mx-auto'>
							<h2 className='post-title' style={{ textAlign: 'center' }}>A historia de goku</h2>
							<img src={imagemGokuTexto1} alt='foto do goku' style={{float:'left',margin:'20px'}}/>
							<p>	Lorem ipsum class non rutrum suspendisse nisl quam, convallis nostra iaculis sociosqu proin sociosqu sodales proin, quis dictum dolor ac imperdiet dictum. interdum lacinia fringilla torquent justo nostra molestie consectetur, tincidunt justo donec curabitur torquent ac. metus tellus aliquet etiam et vel elit neque posuere sollicitudin, nec mi euismod odio luctus ut sodales nec porttitor, at pulvinar sapien elit quisque habitant morbi nibh. enim turpis habitasse metus eleifend tempor, pellentesque sollicitudin condimentum curabitur cras, blandit odio sed magna. eu consectetur velit donec varius pretium, ad porttitor feugiat diam curabitur neque, vehicula est mi curabitur.

Curae elementum ligula sed eget iaculis placerat proin feugiat enim blandit, primis diam id aliquam primis eu magna ante habitant, consequat odio suspendisse id per suscipit facilisis mollis elementum. mollis magna neque conubia potenti lacinia blandit habitasse pretium mattis vehicula interdum, odio pharetra varius nunc sociosqu nullam leo velit pharetra congue. habitasse ante cursus at nam hendrerit arcu at donec sed litora lobortis, augue id tellus ullamcorper curabitur vel feugiat suspendisse volutpat. facilisis neque nam feugiat nostra phasellus tellus aenean nostra, tempus cubilia ornare quisque suspendisse eget nibh, vulputate blandit mollis sapien massa class convallis.

Massa tellus pretium rhoncus elit vehicula vivamus ac mi ante elementum vestibulum interdum, tempor bibendum massa dui habitasse curabitur tellus enim a nisi et. fringilla fames pharetra commodo fermentum amet volutpat turpis aptent, molestie leo laoreet senectus integer ligula nisi ac vitae, eleifend magna potenti nisi hendrerit interdum mauris. gravida hac scelerisque sed feugiat lacinia curabitur torquent habitasse cubilia tortor dui, per nisl senectus donec curabitur nostra quisque adipiscing turpis. aliquet egestas fames massa justo risus aliquet lorem, aenean mauris fames mi duis est gravida eget, aenean suscipit massa nec dictumst laoreet.

Habitant tristique fringilla duis eros tempor felis aptent, vitae ut adipiscing consequat integer ullamcorper, odio feugiat fusce feugiat nisi augue. suscipit posuere class non tempus integer ac dictumst consectetur, malesuada adipiscing ligula tellus luctus risus nisl metus facilisis, taciti sit massa lobortis venenatis vivamus at. dolor fringilla mauris sapien sed etiam a dictum proin, aptent posuere placerat quisque malesuada integer ad, tempus torquent aliquet auctor molestie convallis rutrum. nulla in vulputate libero in curabitur donec lectus fames malesuada, nunc volutpat nulla etiam ullamcorper tortor fusce felis, vestibulum rutrum amet dapibus ornare consequat torquent posuere.

Orci platea viverra aliquam et donec dui magna lacus lorem, varius at rutrum sem sapien in conubia morbi, nisl scelerisque taciti potenti non curae tristique eros. vestibulum pharetra non cursus leo mattis leo netus, lacus mollis curae blandit ultrices ligula duis auctor, nullam maecenas mattis mauris curabitur tempus. placerat elit litora curabitur pulvinar proin quis mattis scelerisque rhoncus, interdum curabitur senectus tincidunt varius lacus duis curabitur nec, vestibulum pharetra quis urna non conubia taciti rutrum. fermentum imperdiet potenti convallis neque phasellus aliquam, per ornare scelerisque curabitur vel adipiscing fames, senectus mi sem consectetur gravida.

Tortor id malesuada vel elementum est posuere hac nostra, quis senectus dictumst taciti mollis platea ligula, quam tempor et ad vivamus erat non. turpis in pulvinar commodo vehicula, mollis interdum suspendisse. </p>
<img src={imagemGokuTexto2} alt='foto do goku' style={{float:'right',margin:'20px'}}/>
<p>	Lorem ipsum class non rutrum suspendisse nisl quam, convallis nostra iaculis sociosqu proin sociosqu sodales proin, quis dictum dolor ac imperdiet dictum. interdum lacinia fringilla torquent justo nostra molestie consectetur, tincidunt justo donec curabitur torquent ac. metus tellus aliquet etiam et vel elit neque posuere sollicitudin, nec mi euismod odio luctus ut sodales nec porttitor, at pulvinar sapien elit quisque habitant morbi nibh. enim turpis habitasse metus eleifend tempor, pellentesque sollicitudin condimentum curabitur cras, blandit odio sed magna. eu consectetur velit donec varius pretium, ad porttitor feugiat diam curabitur neque, vehicula est mi curabitur. 

Curae elementum ligula sed eget iaculis placerat proin feugiat enim blandit, primis diam id aliquam primis eu magna ante habitant, consequat odio suspendisse id per suscipit facilisis mollis elementum. mollis magna neque conubia potenti lacinia blandit habitasse pretium mattis vehicula interdum, odio pharetra varius nunc sociosqu nullam leo velit pharetra congue. habitasse ante cursus at nam hendrerit arcu at donec sed litora lobortis, augue id tellus ullamcorper curabitur vel feugiat suspendisse volutpat. facilisis neque nam feugiat nostra phasellus tellus aenean nostra, tempus cubilia ornare quisque suspendisse eget nibh, vulputate blandit mollis sapien massa class convallis. 

<center>
<img src={imagemGokuTexto3} alt='kkkkk'style={{width:'100%'}}/><br/>
</center>

Massa tellus pretium rhoncus elit vehicula vivamus ac mi ante elementum vestibulum interdum, tempor bibendum massa dui habitasse curabitur tellus enim a nisi et. fringilla fames pharetra commodo fermentum amet volutpat turpis aptent, molestie leo laoreet senectus integer ligula nisi ac vitae, eleifend magna potenti nisi hendrerit interdum mauris. gravida hac scelerisque sed feugiat lacinia curabitur torquent habitasse cubilia tortor dui, per nisl senectus donec curabitur nostra quisque adipiscing turpis. aliquet egestas fames massa justo risus aliquet lorem, aenean mauris fames mi duis est gravida eget, aenean suscipit massa nec dictumst laoreet. 

Habitant tristique fringilla duis eros tempor felis aptent, vitae ut adipiscing consequat integer ullamcorper, odio feugiat fusce feugiat nisi augue. suscipit posuere class non tempus integer ac dictumst consectetur, malesuada adipiscing ligula tellus luctus risus nisl metus facilisis, taciti sit massa lobortis venenatis vivamus at. dolor fringilla mauris sapien sed etiam a dictum proin, aptent posuere placerat quisque malesuada integer ad, tempus torquent aliquet auctor molestie convallis rutrum. nulla in vulputate libero in curabitur donec lectus fames malesuada, nunc volutpat nulla etiam ullamcorper tortor fusce felis, vestibulum rutrum amet dapibus ornare consequat torquent posuere. 

Orci platea viverra aliquam et donec dui magna lacus lorem, varius at rutrum sem sapien in conubia morbi, nisl scelerisque taciti potenti non curae tristique eros. vestibulum pharetra non cursus leo mattis leo netus, lacus mollis curae blandit ultrices ligula duis auctor, nullam maecenas mattis mauris curabitur tempus. placerat elit litora curabitur pulvinar proin quis mattis scelerisque rhoncus, interdum curabitur senectus tincidunt varius lacus duis curabitur nec, vestibulum pharetra quis urna non conubia taciti rutrum. fermentum imperdiet potenti convallis neque phasellus aliquam, per ornare scelerisque curabitur vel adipiscing fames, senectus mi sem consectetur gravida. 

Tortor id malesuada vel elementum est posuere hac nostra, quis senectus dictumst taciti mollis platea ligula, quam tempor et ad vivamus erat non. turpis in pulvinar commodo vehicula, mollis interdum suspendisse. </p>

						</div>
					</div>
				</div>
				<Footer/>
			</div>
			
		);
	}
}

export default Sobre;
