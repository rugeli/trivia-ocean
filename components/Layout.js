import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return ( 
    <div>
      <video src="/blue.mp4" autoPlay muted/>
      <div className="content">
        <Navbar/>
        { children }
        <Footer/>
      </div>
    </div>
  );
}

export default Layout;

// This file is to wrap each page with a navbar and a footer without manually add them in each single page
// {children} refers to the rendering components wrapped in <Layout> in _app.js