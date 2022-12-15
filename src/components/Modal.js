import React from "react";
import "../style.css";

export default function Modal(props) {
    const modalState = props.toggle
    const action = props.action
    return (
        <div className={`modal ${modalState && "active"}`}>
            <p>This site was created entirely by me!</p>
            <button className="btn" onClick={action}>close</button>
        </div>
    )
}