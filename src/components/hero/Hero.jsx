import './Hero.css';
import profile from '../../assets/profile.png';
import resume from '../../assets/Tristan-Candelario.pdf';

const socialLinks = [
  {
    href: 'https://github.com/Taannn',
    target: '_blank',
    className: 'hero-link',
    iconClass: 'fa-brands fa-square-github',
  },
  {
    href: 'https://www.linkedin.com/in/tristan-candelario/',
    target: '_blank',
    className: 'hero-link',
    iconClass: 'fa-brands fa-linkedin',
  },
  {
    href: 'https://www.youtube.com/@taaannnnn',
    target: '_blank',
    className: 'hero-link',
    iconClass: 'fa-brands fa-square-youtube',
  },
];

const Hero = () => {
  return (
    <section id="hero">
      <div className="container section-spacing one-block">
        <div>
          <div className="hero-image">
            <img src={profile} alt="Tristan Candelario" />
          </div>
          <h1>Hello, <span className="gradient">I&apos;m Tristan. A Web Developer</span> based in Metro Manila, Philippines</h1>
          <div className="flex">
            <a
              href={resume}
              download="Tristan-Candelario-Developer-Resume"
              className='hero-resume border-mint round-two'
            >
              My Resume
            </a>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.target}
                rel="noopener noreferrer"
                className='hero-socials'
              >
                <i className={link.iconClass}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;