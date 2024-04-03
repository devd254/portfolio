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
        <div className='absolute top-[-15rem] right-40 w-[30rem] h-[30rem]'>
            <form className="w-full h-full" ref={form} onSubmit={sendEmail}>
                <label className="bg-rose-300 bg-gradient-to-b from-rose-300 to-orange-100 rounded-md h-9 w-16 text-gray-700 text-center border-2 border-sky-300">Name</label>
                <input className="w-full rounded-lg" type="text" name="userName" />
                <label className="bg-rose-300 bg-gradient-to-b from-rose-300 to-orange-100 rounded-md h-9 w-16 text-gray-700 text-center border-2 border-sky-300">Email</label>
                <input className="w-full rounded-lg" type="email" name="userEmail" />
                <label className="bg-rose-300 bg-gradient-to-b from-rose-300 to-orange-100 rounded-md h-9 w-16 text-gray-700 text-center border-2 border-sky-300">Message</label>
                <textarea className="w-full h-80 rounded-lg" name="message" />
                <button className="bg-rose-300 hover:bg-gradient-to-b from-rose-300 to-orange-100 animate-gradient-y rounded-full h-9 w-40 text-gray-700 text-center border-2 border-sky-300"
                type="submit">
                    Send Email
                </button>
            </form>
        </div>
    );
}

export default ContactForm
