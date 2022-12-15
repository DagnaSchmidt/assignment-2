import React from "react";
import "../style.css";

export default function ContactPage() {
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        message: ""
    })

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    const [result, setResult] = React.useState("");

    function handleSubmit(event) {
        event.preventDefault()
        const data = formData
        setResult(data)
        console.log(result)
    }

    return (
        <div className="contact">
            <form className="contact__form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="contact__form__input"
                    placeholder="Name"
                    onChange={handleChange}
                    name="name"
                    value={formData.name}
                    required
                 />
                 <input
                    type="email"
                    className="contact__form__input"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                    required
                 />
                 <textarea
                    className="contact__form__input"
                    placeholder="Message"
                    onChange={handleChange}
                    name="message"
                    value={formData.message}
                    required
                 />
                <button className="btn">Submit</button>
            </form>
            <div className="contact__output">
                {result && <div><h1>Your message have been successfully sent!</h1><br /><p>Name: {result.name}</p><br /><p>Email: {result.email}</p><br /><p>Message: {result.message}</p></div>}
            </div>
        </div>
    )
}