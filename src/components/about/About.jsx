import "./About.css"

const About = () => {
  return (
    <section id="about">
      <h1>About</h1>
      <div className="container two-block section-spacing">
        <div className="about-info">
          <p>
            Hi, <span className="gradient">I am a Web Developer</span> dedicated to crafting digital experiences that are not only highly functional but also visually appealing user-experience wise.
          </p>
          <p>
            <span className="gradient">I firmly believe in putting the user at the center of the development process.</span> That is why I dive into user research, write clean and efficient code, and transform designs into interactive, responsive websites. <span className="gradient">My goal is to not just meet users needs but to exceed their expectations and make them genuinely happy with the final product.</span> This rewarding challenge keeps me motivated and excited every day.
          </p>
          <p>
            <span className="gradient">I am always eager to connect</span> and If you are looking to brainstorm ideas or explore development possibilities, feel free to reach out.
          </p>
        </div>
        <div className="about-achievements">
          <div className="about-achievement border-mint round-two">
            <h2 className="gradient"><i className="fa-solid fa-certificate"></i>RWD Developer Certification</h2>
            <p>Completion of freeCodeCamp.org&apos;s developer certification for Responsive Web Design achieved on October 19, 2023 totaling 300 hours of work.</p>
          </div>
          <div className="about-achievement border-mint round-two">
            <h2 className="gradient"><i className="fa-solid fa-award"></i>Top 4 Award</h2>
            <p>KodeGo Full Stack Web Development Bootcamp Batch Wd97P Top 4. Achieved for completing 5-months of training under KodeGo.</p>
          </div>
          <div className="about-achievement border-mint round-two">
            <h2 className="gradient"><i className="fa-solid fa-award"></i>Best Capstone Award</h2>
            <p>KodeGo Full Stack Web Development Batch WD97P Best Capstone Award. Kopii, an e-commerce full-stack web application for coffee enthusiasts.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About