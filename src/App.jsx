import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Homepage/Home"
import About from "./Pages/Aboutpage/About";
import Menu from "./Pages/Menupage/Menu"
import Story from "./Pages/Storypage/story";
import Gallery from "./Pages/Gallerypage/Gallery";
import Chefs from "./Pages/Chefspage/Chefs";
import Blog from "./Pages/Blogpage/Blog";
import Contact from "./Pages/Contactpage/Contact";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/story" element={<Story/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/chefs" element={<Chefs/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

