import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const serviceID = "service_48kv61j";
    const templateID = "template_gq90qlk";
    const apiKey = "QdCqsvUzo-3VpckO9";

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(serviceID, templateID, form.current, {
            publicKey: apiKey,
        })
        .then(
            () => {
            console.log('SUCCESS!'); //ADD CODE TO SHOW SUBMISSION
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
        e.target.reset(); //Reset form on submission
    };

    return (
        <form className="w-80" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input className="w-full" type="text" name="userName" />
        <label>Email</label>
        <input className="w-full" type="email" name="userEmail" />
        <label>Message</label>
        <textarea className="w-full" name="message" />
        <button className="bg-green-500 rounded-full w-40"
        type="submit">
            Send Email
        </button>
        </form>
    );
}

export default ContactForm
