import { Link } from "react-router-dom";
import React from "react";
import "../style.css";

export default function Button(props) {
    return (
        <Link to={props.link}>
            <button className="btn">{props.text}</button>
        </Link>    
    )
}