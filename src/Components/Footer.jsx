import React from 'react';
import './Footer.css';
import Images from "../images/footer.png";

function Footer() {
    return (
      
         <footer className="footer">
          <h1 className="footer-title">Subscribe to our Newsletter</h1>
        <img className="footer-image" src={Images} alt=""/>
        </footer>
       
  
    );
  }
  
  export default Footer;