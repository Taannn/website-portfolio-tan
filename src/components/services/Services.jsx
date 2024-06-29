import "./Services.css"
import services_data from "../../assets/services_data"

const Services = () => {
  return (
    <section id="services">
      <h1 className="gradient">Services</h1>
      <div className="container three-block">
        {services_data.map((service, index) => (
          <div className="services-card border-mint round-two" key={index}>
            <span className="gradient">{service.s_no}</span>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services