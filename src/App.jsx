import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import ContactLinks from "./components/ContactLinks"
import About from "./components/About"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import LoaderSimple from "./components/LoaderSimple"

function App() {
  return (
    <div>
      <LoaderSimple />
      <Navbar />
      <ContactLinks />
      <Routes>
          <Route path="/WilliamThompsonPortfolio/" element={ <Home/> } />
          <Route path="/WilliamThompsonPortfolio/about" element={ <About/> } />
          <Route path="/WilliamThompsonPortfolio/projects" element={ <Projects/> } />
          <Route path="/WilliamThompsonPortfolio/experience" element={ <Experience/> } />
          <Route path="/WilliamThompsonPortfolio/contact" element={ <Contact/> } />
      </Routes>
    </div>
  )  
  
}

export default App

//{/* <LoaderSimple /> {/*Where the LoaderSimple is called*/}

// {/* <Navbar /> {/*Where the Navbar is called*/}
// <Home /> {/*Where Home is called*/}
// <About /> {/*Where About is called*/}
// <Projects /> {/*Where Projects is called*/}
// <Experience /> {/*Where Experience is called*/}
// <Contact /> {/*Where Contact is called*/}

// <ContactLinks /> Where ContactLinks is called */} */}