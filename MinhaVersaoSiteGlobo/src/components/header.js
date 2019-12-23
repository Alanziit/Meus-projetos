import React, { Component } from 'react'
import imagemLogin from './images/imagemLogin.jpeg';


class Header extends Component {
    render() {
        return (
            
                
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#" className='nomeglobo'><h3>Globo<br />.com</h3></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#" className='nomeg1'>g1 <span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" className='nomeg2'>ge</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" className='nomegshow'>gshow</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" tabindex="-1"  className='nometech'>tech</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" className='nomevideo'>vídeos</a>
                            </li>

                        </ul>
                    </div>

                    <nav className="navbar navbar-light bg-light">
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <img className='fotologin' src={imagemLogin} alt='imagem login' />
                        </form>
                    </nav>
                    <hr/>
                </nav>
            
            

        )
    }


}
export default Header;