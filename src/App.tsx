import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProjectDetail from "./pages/projectDetail/ProjectDetail"
import Home from "./pages/home/Home"
import NotFound from "./pages/notFound/NotFound"
import Header from "./components/layout/Header"
import About from "./pages/about/About"
import Skills from "./pages/skills/Skills"
import Experience from "./pages/experience/Experience"
import Projects from "./pages/projects/Projects"
import Education from "./pages/education/Education"
import Contact from "./pages/contact/Contact"
import Certifications from "./pages/certifications/Certifications"
import Footer from "./components/layout/Footer"


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/education" element={<Education/>} />
          <Route path="/certifications" element={<Certifications/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route
            path="/projects/:slug"
            element={<ProjectDetail />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
