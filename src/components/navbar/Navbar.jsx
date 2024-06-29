import "./Navbar.css"
import NavLink from "../shared/NavLink"
import logo from "../../assets/tan-logo.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useState } from 'react'
import links from "../../assets/links"

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);

  return (
    <div className='nav-bg'>
      <nav className="container flex-between">
        <AnchorLink href="#hero" className="navbar-logo">
          <img src={logo} alt="Site Logo (Tan)" width={85} />
        </AnchorLink>
        <ul className="flex">
          {links.map((link, index) => (
            <NavLink
              key={index}
              link={link.link}
              text={link.text}
              linkClass={link.linkClass}
              listClass={link.listClass}
            />
          ))}
        </ul>
        <div className={`${navToggle ? "show" : "hide"}`}>
          <ul className="flex-column round-two nav-menu">
            {links.map((link, index) => (
              <NavLink
                key={index}
                link={link.link}
                text={link.text}
                linkClass={link.linkClass}
                listClass={link.listClass}
                />
              ))}
          </ul>
        </div>
        <AnchorLink href="#connect" className="nav-btn round-two border-mint">
          Connect with Me
        </AnchorLink>
        <button onClick={() => setNavToggle(!navToggle)} type="button" className='nav-menu-btn'>
          <i className={`fa-solid ${navToggle ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
      </nav>
    </div>
  )
}

export default Navbar