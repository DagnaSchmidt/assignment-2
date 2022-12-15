import React from "react";
import "../style.css";
import "../images/2.png";
import "../images/3.png"

export default function AboutPage() {
    return (
        <div className="about">
            <section className="about__section">
                <p className="about__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nunc viverra metus vel urna aliquam pharetra. Suspendisse quis 
                    erat sit amet felis scelerisque aliquet.
                </p>
                <img className="about__img" src={require(`../images/2.png`)} />
            </section>
            <section className="about__section">
                <img className="about__img" src={require(`../images/3.png`)} />
                <p className="about__text">
                    Nam ut suscipit nunc. Pellentesque ultricies porttitor rhoncus. 
                    Sed tortor diam, cursus id magna sit amet, convallis sollicitudin diam. 
                    Vivamus quis risus sollicitudin, euismod tellus a, finibus felis. 
                    Integer ut volutpat orci. Nullam sed nunc ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </p>
            </section>
        </div>
    )
}