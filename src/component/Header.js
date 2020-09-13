import React from 'react';
import { Navbar,Nav} from 'react-bootstrap';
import logo from '../images/logo.png';
import './Header.css';



const Header = () => {
     return (
                      
      
          
            
         <Navbar className="nav-contain"> 
           <Navbar.Brand href="#home"><img className="navbar-image" src={logo} alt=""/>
          </Navbar.Brand>
          <h1 className="navbar-title">Fly On Cumilla</h1>
          <Nav className=" d-flex justify-content-end align-items-center nav">
             <Nav.Link className="navbar-text"  href="/home">Home</Nav.Link>
             <Nav.Link className="navbar-text"  href="/ourServices">Our services</Nav.Link>
             <Nav.Link   className="navbar-text" href="/aboutUs">About Us</Nav.Link>
             <Nav.Link className="navbar-text" href="/contactUs">Contact Us</Nav.Link>
            </Nav>
            </Navbar>
          

  
           
    

      
    
    );
};

export default Header;