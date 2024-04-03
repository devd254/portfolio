import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const serviceID = "service_48kv61j";
    const templateID = "template_gq90qlk";
    const apiKey = "QdCqsvUzo-3VpckO9";

    const form = useRef();
    const [nameValue, changeName] = useState("");
    const [emailValue, changeEmail] = useState("");
    const [messageValue, changeMessage] = useState("");

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
        form.reset(); //Reset form on submission
    };

    return (
        <div className='absolute top-[-15rem] right-40 w-[30rem] h-[30rem]'>
            <form className="w-full h-full" ref={form} onSubmit={sendEmail}>
                <label className="bg-green-100 bg-gradient-to-b from-green-100 to-lime-100 rounded-md h-9 w-16 text-gray-700 text-center border-2 border-amber-100">Name</label>
                <input className="w-full border-2 border-blue-100 rounded-lg" type="text" name="userName" value={nameValue} onChange={(e) => changeName(e.target.value)}/>
                <label className="bg-green-100 bg-gradient-to-b from-green-100 to-lime-100 rounded-md h-9 w-16 text-gray-700 text-center border-2 border-amber-100">Email</label>
                <input className="w-full border-2 border-blue-100 rounded-lg" type="email" name="userEmail" value={emailValue} onChange={(e) => changeEmail(e.target.value)}/>
                <label className="bg-green-100 bg-gradient-to-b from-green-100 to-lime-100 rounded-md h-9 w-16 text-gray-700 text-center border-2 border-amber-100">Message</label>
                <textarea className="w-full border-2 border-blue-100 h-80 rounded-lg" name="message" value={messageValue} onChange={(e) => changeMessage(e.target.value)}/>
                <button className="bg-rose-300 hover:bg-gradient-to-b from-rose-300 to-orange-100 animate-gradient-y rounded-full h-9 w-40 text-gray-700 text-center border-2 border-sky-300"
                type="submit"
                disabled={nameValue && emailValue && messageValue ? false : true}>
                    Send Email
                </button>
            </form>
        </div>
    );
}

export default ContactForm
