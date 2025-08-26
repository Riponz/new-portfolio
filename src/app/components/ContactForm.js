import React from 'react'
import emailjs from "@emailjs/browser"

function ContactForm() {

    const handleSendMessage = (e) => {
        e.preventDefault();
        const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID
        const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID
        const publicKey = process.env.NEXT_PUBLIC_KEY
        // console.log(e)

        const formData = new FormData(e.target);
        const firstName = formData.get("firstName").trim();
        const email = formData.get("email").trim();
        const message = formData.get("message").trim();

        if (!firstName || !email || !message) {
            alert("Please fill in all fields before submitting.");
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }





        emailjs.sendForm(serviceId, templateId, '#form', {
            publicKey: publicKey,
        })
            .then(
                () => {
                    alert('Message sent')
                    document.getElementById("form").reset()
                })
            .catch(
                (error) => {
                    alert(error)
                })

    }
    return (
        <>
            <div className='w-full h-max flex flex-col justify-start items-center mb-6 overflow-hidden'>
                <form id='form' onSubmit={handleSendMessage} className='flex flex-col w-full justify-center items-center'>
                    <input className='border-b-2 border-b-neutral-900 border-opacity-5 w-[30%] py-3 text-2xl text-zinc-900 opacity-40 font-bold my-3' name='firstName' placeholder='First Name*' />
                    <input className='border-b-2 border-b-neutral-900 border-opacity-5 w-[30%] py-3 text-2xl text-zinc-900 opacity-40 font-bold my-3' name='lastName' placeholder='Last Name' />
                    <input className='border-b-2 border-b-neutral-900 border-opacity-5 w-[30%] py-3 text-2xl text-zinc-900 opacity-40 font-bold my-3' name='email' placeholder='Email*' />
                    <input className='border-b-2 border-b-neutral-900 border-opacity-5 w-[30%] py-3 text-2xl text-zinc-900 opacity-40 font-bold my-3' name='message' placeholder='Message*' />
                    <button className='font-bold text-3xl p-4' type='submit'>SEND</button>
                </form>
            </div>
        </>
    )
}

export default ContactForm