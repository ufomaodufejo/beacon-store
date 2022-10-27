import React from "react";
import bannerimg from "./assets/bannerimg.png";
import { Link } from "react-router-dom";
import book1 from "./assets/book1.jpg";
import book2 from "./assets/book2.jpg";
import book3 from "./assets/book3.jpg";
import book4 from "./assets/book4.jpg";
import book5 from "./assets/book5.jpg";
import bookclub from "./assets/bookclub.png";

function Home() {
  return (
    <div>
      <div className="banner">
        <div className="banner-image">
          <img src={bannerimg} alt="promo" />
        </div>
        <div className="banner-content">
          <span>BEST SELLER OF THE MONTH</span>
          <h1>A Very Intriguing sale</h1>
          <p>Get 20% OFF select customer-favourite mystery books</p>
          <p>Offer valid till end of October, 2022</p>
          <Link to="/shop-now">
            <button className="btn-one">SHOP NOW</button>
          </Link>
        </div>
      </div>
      <div className="main-section">
         <h1>BEST SELLERS</h1>
      </div>
      <section className="column-section">
        <article className="card1">
          <div className="div">
            <img src={book1} alt=""/>
          </div>
          <p>And There Was Light</p>
          <p>Author: Jon Meacham</p>
        </article>

        <article className="card1">
          <div className="div">
            <img src={book2} alt=""/>
          </div>
          <p>Lucy by the Sea</p>
          <p>Author: Elizabeth Strout</p>
        </article>

        <article className="card1">
          <div className="div">
            <img src={book3} alt=""/>
          </div>
          <p>Foul Lady Fortune</p>
          <p>Author: Chloe Gong</p>
        </article>

        <article className="card1">
          <div className="div">
            <img src={book4} alt=""/>
          </div>
          <p>Piranesi</p>
          <p>Author: Susanna Clarke</p>
        </article>

        <article className="card1">
          <div className="div">
            <img src={book5} alt=""/>
          </div>
          <p>Braiding Sweetgrass</p>
          <p>Author: Robin Kimmerer</p>
        </article>
      </section>

      <div className="banner">
        <div className="banner-image ban-img" >
          <img src={bookclub} alt="promo" />
        </div>
        <div className="banner-content">
          <span>JOIN OUR BOOK CLUB</span>
          <h1>BEACON STORE BOOK CLUB</h1>
          <p>An exciting one hour monthly virtual book chat series that is aimed at discussing and reviewing books of all genres.</p>
          <Link to="/book-club">
            <button className="btn-one">Explore</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
