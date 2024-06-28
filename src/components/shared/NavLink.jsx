import AnchorLink from "react-anchor-link-smooth-scroll";

const NavLink = ({ text, link, linkClass, listClass }) => {
  return (
    <li className={listClass}>
      <AnchorLink href={link} className={linkClass}>
        {text}
      </AnchorLink>
    </li>
  )
}

export default NavLink