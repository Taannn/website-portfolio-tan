import Anchor from "./Anchor";

const NavLink = ({ text, link, linkClass, listClass }) => {
  return (
    <li className={listClass}>
      <Anchor text={text} link={link} linkClass={linkClass} />
    </li>
  )
}

export default NavLink