import "./Connect.css"
import socialLinks from "../../assets/socialLinks"

const Connect = () => {
  return (
    <section id="connect">
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

                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                  <i className={link.iconClass}></i>
                </a>

            ))}
          </div>
        </div>
        <div className="connect-inputs">
          <form onSubmit={()=>{}}>
            <div className="connect-input">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="enter your name here"
              />
            </div>
            <div className="connect-input">
              <label htmlFor="">Your Email</label>
              <input
                type="text"
                id=""
                placeholder="enter your email here"
              />
            </div>
            <div className="connect-input connect-textarea">
              <label htmlFor="message">Your Message</label>
              <textarea
                rows={4}
                id="message"
                placeholder="enter your message here"></textarea>
            </div>
            <button type="submit" className="border-mint round-two">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Connect