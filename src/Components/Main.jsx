import React from 'react';
import './Main.css';
import Images from "../images/vardisferi.png";
import Image1 from "../images/stafilo.png";
import Image2 from "../images/makvali.png";
import Image3 from "../images/fotoli.png";
import Image4 from "../images/pomidori.png";
import Image5 from "../images/limoni.png";

function Main() {
    return (
      
        <main className="main">
  <div className="photo-container">
    <div className="photo">
      <img src ={Images} alt="loading"/> 
      <h5>Green & Tasty Lemon</h5>
      <p>Fruits</p>
    </div>
    <div className="photo">
      <img src ={Image1} alt="loading"/>
      <h5>Organic Carrot</h5>
      <p>Fruits</p>
    </div>
    <div className="photo">
      <img src ={Image2} alt="loading"/>
      <h5>Black Raspberry</h5>
      <p>Fruits</p>
    </div>
    <div className="photo">
      <img src ={Image3} alt="loading"/>
      <h5>Organic Betel Leaf</h5>
      <p>Fruits</p>
    </div>
    <div className="photo">
      <img src = {Image4} alt ="loading"/>
      <h5>Natural Tommato</h5>
      <p>Fruits</p>
    </div>
    <div className="photo">
      <img src ={Image5} alt ="loading"/>
      <h5>Honey Orange</h5>
      <p>Fruits</p>
    </div>
  </div>
</main>
    )
}
  export default Main;