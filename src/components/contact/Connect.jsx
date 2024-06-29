import "./Connect.css"
import socialLinks from "../../assets/socialLinks"
import { useState } from "react";
import { useEffect } from "react";

const Connect = () => {
  const [errorToggle, setErrorToggle] = useState(false);
  const [messageInputs, setMessageInputs] = useState({
    name: '',
    email: '',
    message: '',
    nameError: '',
    emailError: '',
    messageError: ''
  });
  const [success, setSuccess] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessageInputs((prevData) => ({
      ...prevData,
      [name]: value,
      [`${name}Error`]: ''
    }));
    setErrorToggle(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let errors = {};
    const validEmail = validateEmail(messageInputs.email);

    if (!messageInputs.name) {
      errors.nameError = "Name cannot be empty!";
    } else if (messageInputs.name.length <= 2) {
      errors.nameError = "Minimum character length is 3";
    }

    if (!messageInputs.email) {
      errors.emailError = "Email cannot be empty";
    } else if (!validEmail) {
      errors.emailError = "Email must be valid";
    }

    if (!messageInputs.message) {
      errors.messageError = "Message cannot be empty";
    } else if (messageInputs.message.length <= 14) {
      errors.messageError = "Minimum character length is 15";
    }

    if (Object.keys(errors).length > 0) {
      setMessageInputs((prevData) => ({
        ...prevData,
        ...errors
      }));
      setErrorToggle(true);
      return;
    }

    setErrorToggle(false);
    const formData = new FormData(event.target);
    formData.append("access_key", "7f0d5420-82d9-4941-a045-d47b266355c7");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setMessageInputs({
        name: '',
        email: '',
        message: '',
        nameError: '',
        emailError: '',
        messageError: ''
      });
      setSuccess(true);
    }
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(!success);
      }, 2000);
    }
  }, [success]);

  return (
    <section id="connect">
      <div className={`connect-success-message${success ? " show" : " hide"}`}>
        <h2>Thank you for reaching out!</h2>
        <p>Looking forward to having a discussion with you.</p>
      </div>
      <h1 className="gradient">Connect</h1>
      <div className="container two-block">
        <div className="connect-info">
          <h2>Let&apos;s Talk</h2>
          <p>
            <span className="gradient">I am currently available to take on new projects</span>, so feel free to send me a message about anything that you want me to work on at any time.
          </p>
          <address>
            <p><i className="fa-solid fa-envelope"></i>tristan.candelario06@gmail.com</p>
            <p><i className="fa-solid fa-house"></i>Valenzuela City, Metro Manila, Philippines</p>
            <p><i className="fa-solid fa-phone"></i>+63 962 052 2108</p>
          </address>
          <div className="flex">
            {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={link.iconClass}></i>
                </a>
            ))}
          </div>
        </div>
        <div className="connect-inputs">
          <form onSubmit={handleSubmit}>
            <div className="connect-input">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={messageInputs.name}
                onChange={(e) => handleChange(e)}
                placeholder="enter your name here"
              />
              {errorToggle && <span className="connect-error-message">{messageInputs.nameError}</span>}
            </div>
            <div className="connect-input">
              <label htmlFor="email">Your Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={messageInputs.email}
                onChange={(e) => handleChange(e)}
                placeholder="enter your email here"
              />
              {errorToggle && <span className="connect-error-message">{messageInputs.emailError}</span>}
            </div>
            <div className="connect-input connect-textarea">
              <label htmlFor="message">Your Message</label>
              <textarea
                rows={4}
                id="message"
                name="message"
                value={messageInputs.message}
                onChange={(e) => handleChange(e)}
                placeholder="enter your message here"></textarea>
              {errorToggle && <span className="connect-error-message">{messageInputs.messageError}</span>}
            </div>
            <button type="submit" className="border-mint round-two">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Connect