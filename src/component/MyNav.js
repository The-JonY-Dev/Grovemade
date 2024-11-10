/*
import React from 'react';
import "../component/MyNav.css";
import logo from "../img/logo.png";

function MyNav() {
    return (
        <div className="container bg-light">
            <nav className="navbar navbar-expand-sm">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Logo" className="logoImg"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavbar">
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Explore</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">My Cart</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default MyNav;*/

import React from 'react';
import './MyNav.css';
import logo from '../img/logo.png';

function MyNav() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-sm">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Explore</a>
                            </li>
                        </ul>
                    </div>

                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="logoImg" className="logoImg"/>
                    </a>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">My Cart</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default MyNav;
