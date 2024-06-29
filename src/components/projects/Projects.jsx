import "./Projects.css"
import kopii from "../../assets/kopii.png"
import more_projects from "../../assets/more_projects"

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="gradient">Projects</h1>
      <div className="container two-block round-two border-mint">
        <div className="project-image">
          <img
            src={kopii}
            alt="Kopii | Capstone Project"
          />
        </div>
        <div className="project-description">
          <h2>Kopii - Your Gateway To Flavorful Delights</h2>
          <p className="gradient">140 + hours</p>
          <p>Experience the perfect blend of backend efficiency and frontend elegance with Kopii, a full-stack e-commerce project where every cup tells a story. Note: It can take 5 - 10 mins for the page to load up at first due of render&apos;s free plan cold start. It happens only once at the beginning.</p>
          <div className="flex project-links">
            <a
              href="https://kopiii.netlify.app/"
              target='_blank'
              className="round-two border-mint"
            >
              Live Site
            </a>
            <a
              href="https://github.com/Taannn/kodego-capstone-kopii-frontend"
              target='_blank'
            >
              <i className="fa-brands fa-square-github"></i>
            </a>
            <a
              href="https://youtu.be/8zmzLgVPySE?si=SahSCepVwWS9Aw1Q"
              target='_blank'
            >
              <i className="fa-brands fa-square-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="container three-block">
        {more_projects.map((project, index) => (
          <div key={index} className="border-slate round-two">
            <img
              src={project.project_image}
              alt={project.project_name}
              title={project.project_name}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects