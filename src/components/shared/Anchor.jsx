import AnchorLink from "react-anchor-link-smooth-scroll"

const Anchor = ({ link, linkClass, text }) => {
  return (
    <>
      <AnchorLink href={link} className={linkClass}>
        {text}
      </AnchorLink>
    </>
  )
}

export default Anchor