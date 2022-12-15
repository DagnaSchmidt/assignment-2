import React from "react";
import "../style.css";
import Button from "./Button";
import "../images/1.png";

export default function HomePage() {
    return (
        <div className="home">
            <img className="home__img" src={require(`../images/1.png`)}/>
            <div className="home__content">
                <h1 className="home__title">Hello, my name is Dagna</h1>
                <p className="home__text">And I am in love with never ending process of self developing. </p>
                <Button
                    text= "Read more"
                    link= "/about"
                 />
            </div>
        </div>
    )
}