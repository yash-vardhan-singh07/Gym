import { NavLink } from "react-router-dom"
export const Navbar=()=>{
    return(
    <>
      <header>
        <div id="navbar">
           <ul id="navbar-ul">
           <a href="/"><img src="img/logo.png" className="logo" alt="" height="74px"/></a>
             <li><NavLink to="/">Home</NavLink></li>
             <li><NavLink to="/transformations">Transformations</NavLink></li>
             <li><NavLink to="/testimonials">Testimonials</NavLink></li>
             <li><NavLink to="/services">Services</NavLink></li>
             <li><NavLink to="/ebook">Free E-Book</NavLink></li>
             <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
      </header>
    </>
    )
}