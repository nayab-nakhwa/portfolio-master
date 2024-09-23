import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
  const form = useRef();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate the form fields
    if (!fullName || !email || !message) {
      toast.error('Please fill out all fields');
      return;
    }

    if (!/^[a-zA-Z ]+$/.test(fullName)) {
      toast.error('Full name should only contain letters and spaces');
      return;
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      toast.error('Invalid email address');
      return;
    }

    emailjs
      .sendForm('service_i0r8r5r', 'template_to386uo', form.current, {
        publicKey: 'gB2OZTQYMYmBvAqnK',
      })
      .then(
        () => {
          toast.success('Your message has been sent');

          // Scroll to the top of the page and clear the form fields
          window.scrollTo(0, 0);
          form.current.reset();
          setFullName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          toast.error('Something went wrong');
        },
      );
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div className="text-center">
      <h1 className="text-3xl text-center font-bold mb-4">Contact me</h1>
      <span className="text-center">Please fill out the form below to contact me</span>
      </div>
      <div className="flex flex-col items-center justify-center mt-5">
        <form ref={form} className="bg-purple-200 w-96 px-8 py-6 rounded-xl">
          <h1 className="text-xl text-gray-700 font-semibold mb-4">Send Your Message</h1>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">FullName</label>
            <input
              type="text"
              name="user_name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your fullname"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your Query"
              required
            />
          </div>
          <button class="animated-button px-8 py-2" onClick={sendEmail}>
            <svg
              viewBox="0 0 24 24"
              class="arr-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            <span class="text">Submit</span>
            <span class="circle"></span>
            <svg
              viewBox="0 0 24 24"
              class="arr-1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589 L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

