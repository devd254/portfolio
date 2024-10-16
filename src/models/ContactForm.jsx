import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const apiKey = import.meta.env.VITE_API_KEY;

    const form = useRef();

    const [nameValue, changeName] = useState("");
    const [emailValue, changeEmail] = useState("");
    const [messageValue, changeMessage] = useState("");
    
    const [sendText, setSendText] = useState("Send Message");

    const [notClickedYet, setClicked] = useState(true);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(serviceID, templateID, form.current, {
            publicKey: apiKey,
        })
        .then(
            () => {
            console.log('SUCCESS!');
            setSendText("Message Sent!");
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
        //Reset form on submission
        e.target.reset()
        setClicked(false);
    };

    const [copyText, setCopyText] = useState("Copy");

    function copyEmail() {
        navigator.clipboard.writeText("devonbdaniels4@gmail.com");
        setCopyText("Copied!");
    }

    return (
        <div className="invis">
            <div className='fade-in absolute top-[-15rem] right-40 w-[30rem] h-[30rem]'>
                <form className="w-full h-full" ref={form} onSubmit={sendEmail}>
                    <label className="bg-green-100 bg-gradient-to-b from-green-100 to-lime-100 rounded-md h-9 w-16 text-gray-700 text-center border-2 border-amber-100">Name</label>
                    <input className="w-full border-2 border-blue-100 rounded-lg" type="text" name="userName" value={nameValue} onChange={(e) => changeName(e.target.value)}/>
                    <label className="bg-green-100 bg-gradient-to-b from-green-100 to-lime-100 rounded-md h-9 w-16 text-gray-700 text-center border-2 border-amber-100">Email</label>
                    <input className="w-full border-2 border-blue-100 rounded-lg" type="email" name="userEmail" value={emailValue} onChange={(e) => changeEmail(e.target.value)}/>
                    <label className="bg-green-100 bg-gradient-to-b from-green-100 to-lime-100 rounded-md h-9 w-16 text-gray-700 text-center border-2 border-amber-100">Message</label>
                    <textarea className="w-full border-2 border-blue-100 h-80 rounded-lg" name="message" value={messageValue} onChange={(e) => changeMessage(e.target.value)}/>
                    <button className="bg-rose-300 hover:bg-gradient-to-b from-rose-300 to-orange-100 animate-gradient-y rounded-full h-9 w-40 text-gray-700 text-center border-2 border-sky-300"
                    type="submit"
                    disabled={notClickedYet && nameValue && emailValue && messageValue ? false : true}>
                        {sendText}
                    </button>
                    <div className="pt-5 pl-2">
                        <div>or via Email:</div>
                        <div className="flex space-x-2">
                            <p>devonbdaniels4@gmail.com</p>
                            <button 
                                className="bg-indigo-500 hover:bg-gradient-to-b from-indigo-500 to-indigo-300 animate-gradient-y text-white text-sm rounded-full h-7 w-14"
                                onClick={copyEmail}
                            >
                                {copyText}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactForm
