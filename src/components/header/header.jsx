import React from 'react'
import logo from '../../img/adt.png';

function header() {
    return (
        <div>
            <nav>
                <div className="menu">
                    <ul>
                        <li><a href="#">Projectos</a></li>
                        <li><a href="#">Servicios</a></li>
                    </ul>
                </div>

                <div className="brand">
                    <img src={logo} className="brand__logo" alt=""/>
                </div>

                <div className="login">
                    <ul>
                        <li><a href="#" className="login__link">Login</a></li>
                        <li><a href="#" className="signup__link">Signup</a></li>
                        <li><a href="#" className="search__link"><i class="fas fa-search"></i></a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default header;
