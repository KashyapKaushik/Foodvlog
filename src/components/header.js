import { Link, NavLink } from "react-router-dom";
import img1 from "../images/logo.png"
import Receipe from "../pages/Receipe";

const Header = () => {
    return( 
        <> 
        <div className="top-header col-12">
            <div className="word">
                Hello World
            </div>
            <div className="r">
            <i className="ri-pinterest-fill"></i>
            <i className="ri-facebook-fill"></i>
            <i className="ri-twitter-fill"></i>
            <i className="ri-dribbble-line"></i>
            <i className="ri-behance-fill"></i>
            <i className="ri-linkedin-fill"></i>
            </div>      
        </div>     
        <div className="bg-grey border border-grey border-start-2"></div>
        {/* main header start here */}
        <div className="menuuu">
        <input type="checkbox" id="check"/>
        <label for="check" className="checkbtn">
        <i class="ri-menu-line"></i>
        </label> 
        <nav  className="navbar navbar-expand-lg chacha">  
        {/* <Link className="navbar-brand" href="/"> */}

        <img className="logo" src={img1} alt="logo"/>
        {/* </Link> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* home.... button */}
            <div className="home">
            <li className="nav-item">
            <a  className="nav-link active" aria-current="page" href="#">HOME</a>
            </li>
            </div>
            {/* pages...button */}
            <div>
            <li className="nav-item dropdown">
            <a  className="nav-link dropdown-toggle"
            href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            PAGES
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><NavLink aria-current="page" className="dropdown-item" to="/home"><a>Home</a></NavLink></li>
                    <li>
                        <NavLink className="dropdown-item" to="/aboutus">About Us
                        </NavLink>
                    </li>
                    <li><NavLink to="/blogpost" className="dropdown-item">Blog Post</NavLink></li>
                    <li><NavLink to="/receipe" className="dropdown-item">Recepie Post</NavLink></li>
                    <li><NavLink to="/contact" className="dropdown-item">Contact</NavLink></li>
                    <li><NavLink to="/element" className="dropdown-item">Element</NavLink></li>
                    <li><NavLink className="dropdown-item">Dropdown</NavLink></li>
                    <li><hr className="dropdown-divider"/></li>       
            </ul>
            </li>
            </div>
            {/* megamenu */}
            <div>
            <li className="nav-item dropdown">
            <a  className="nav-link dropdown-toggle"
            href="#" id="navbarDropdown" role="button"data-bs-toggle="dropdown"
            aria-expanded="false"> MEGAMENU
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><NavLink className="dropdown-item" to="/home">Home</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/aboutus">About Pages</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/blogpost">Blog Post</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/receipe">Recepipe Post</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/contact">Contact</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/element">Element</NavLink></li>
                    <li><NavLink className="dropdown-item" to="#">Dropdown</NavLink></li>
                    <li><hr className="dropdown-divider"/></li>       
            </ul>
            </li>
            </div>       
            {/* RECEPIES */}
            <li className="nav-item">
            <NavLink to="/receipe" >
            <button className="btn" type="submit">RECEPIES</button>
            </NavLink>
            
            </li>
            {/* 4VEGANS button */}
            <li className="nav-item">
            <NavLink to="/receipe" >
            <button className="btn" type="submit">4VEGANS</button>
            </NavLink>
            
            </li>
            {/* contact */}
            {/* <NavLink aria-current="page"className="dropdown-item" to="/about"><a>About Us</a></NavLink> */}
            <li className="nav-item">
            <NavLink to="/contact" >
            <button className="btn" type="submit">CONTACT</button>
            </NavLink>
            
            </li>
            </ul>
            {/* <div className="search">
            <button className="btn btn-outline-success" type="submit"><i className="ri-search-fill"></i></button>
            </div> */}
        </div> 
 
        
        </nav>  
        </div> 

        
        
        </>    

    );

}

export default Header;



