import "./Footer.css"
import footer_logo from "../../assets/tan-logo.png"
import AnchorLink from "react-anchor-link-smooth-scroll"
import resume from "../../assets/Tristan-Candelario.pdf"

const Footer = () => {
  const getCurrentYear = () => {
    const currentYear = new Date().getFullYear();
    return currentYear.toString();
  }

  return (
    <nav>
      <div className="container four-block">
        <div className="footer-logo">
          <img
            src={footer_logo}
            width={120}
            alt="Tan (Logo)"
          />
        </div>
        <ul className="footer-navigations">
          <li><AnchorLink href="#hero">Home</AnchorLink></li>
          <li><AnchorLink href="#about">About</AnchorLink></li>
          <li><AnchorLink href="#services">Services</AnchorLink></li>
        </ul>
        <ul className="footer-navigations">
          <li><AnchorLink href="#projects">Projects</AnchorLink></li>
          <li><AnchorLink href="#connect">Connect</AnchorLink></li>
          <li><a href={resume} target="_blank" download="Tristan-Candelario">View Resume</a></li>
        </ul>
        <ul className="footer-navigations">
          <li><a href="https://github.com/Taannn" target="_blank" rel="noopener noreferrer">Github</a></li>
          <li><a href="https://www.linkedin.com/in/tristan-candelario/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://www.youtube.com/channel/UCutD2yVCg7J8ZgYA6LsaEKQ" target="_blank" rel="noopener noreferrer">Youtube</a></li>
        </ul>
      </div>
      <div className="footer-copyright">
        <p>Copyright &copy; {getCurrentYear()} Tristan Candelario. All rights reserved.</p>
      </div>
    </nav>
  )
}

export default Footer