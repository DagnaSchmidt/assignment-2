import React from "react";
import "../style.css";
import Modal from "./Modal";

export default function Footer() {
    const [modal, setModal] = React.useState(false)
    function openModal() {
        setModal(!modal)
    }
    return (
        <footer className="footer">
            <div className="footer__icons">
                <a href="https://www.instagram.com/b.ardzo/" className="footer__icons__icon" target="_blank">
                    <i className="fa-brands fa-instagram"></i> 
                </a>
                <a href="https://github.com/DagnaSchmidt" className="footer__icons__icon" target="_blank">
                    <i className="fa-brands fa-github"></i> 
                </a>
                <a href="https://www.linkedin.com/in/dagna-schmidt-90ba37207" className="footer__icons__icon" target="_blank">
                    <i className="fa-brands fa-linkedin"></i> 
                </a>
                <a onClick={openModal} className="footer__icons__icon">
                <i class="fa-solid fa-question"></i>
                </a>
            </div>
            <Modal toggle={modal} action={openModal} />
        </footer>
    )
}