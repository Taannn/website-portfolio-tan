import About from "./components/about/About"
import Connect from "./components/contact/Connect"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Projects from "./components/projects/Projects"
import Services from "./components/services/Services"

const App = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Connect />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App