import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
export default function Contact () {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_suoun2o', 'template_gx8amy1', form.current, 'ccnOy6xUlYa7Mbo_l')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
    <div>
        <a href="https://wwww.github.com/jgsbaker"  style={{padding: 5}}>GitHub</a>
        <a href="https://soundcloud.com/jack_gypsy_p" style={{padding: 5}}>SoundCloud</a>
        <a href="https://www.linkedin.com/in/jack-gypsy-baker-43ba34158/" style={{padding: 5}}>LinkedIn</a>
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    </div>
    );
};