
import About from "./components/About"
import ButtonUp from "./components/ButtonUp"
import Carrousel from "./components/Carrousel"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Procedimiento from "./components/Procedimiento"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <About />

      <Procedimiento />

      <Contact />

      <ButtonUp />

      <Footer />
      
    </>
  )
}
