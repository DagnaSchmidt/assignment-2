import { Link } from "react-router-dom";
import React from "react";
import "../style.css";

export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <h3 className="nav__logo">Dagna</h3>
                <ul className="nav__links">
                    <li className="nav__item">
                        <Link className="nav__item__link" to="/">Home</Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav__item__link" to="/about">About</Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav__item__link" to="/contact">Contact</Link>
                    </li>
                </ul> 
            </nav>
        </header>
    )
}