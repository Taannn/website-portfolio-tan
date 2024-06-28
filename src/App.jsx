import About from "./components/about/About"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"

const App = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <Hero />
        <About />
        {/* <Achievements /> */}
        {/* <Services /> */}
        {/* <Projects /> */}
        {/* <Contact /> */}
      </main>

      <footer>
        {/* <Footer /> */}
      </footer>
    </div>
  )
}

export default App