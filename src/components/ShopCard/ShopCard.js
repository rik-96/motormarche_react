import React from 'react';
import './ShopCard.css';

const ShopCard = () => {
  return (
    <div id="shopCard">
      <div id="shopTitle" className="pa4" >
        Shop For Exciting Deals And Cool Products
      </div>
      <article id="shopCardList" className="cf">
        <a href="https://www.google.com" className="fl w-25 w-25-ns link pointer">
          <span className="db aspect-ratio aspect-ratio--1x1 dim">
            <span role="img" aria-label="Beyoncé" style={{backgroundImage: "url("+require('./images/clth1.jpg')+")"}} className="bg-center cover aspect-ratio--object"></span>
          </span>
        </a>
        <a href="https://www.google.com" className="fl w-25 w-25-ns">
          <span className="db aspect-ratio aspect-ratio--1x1 dim">
            <span role="img" aria-label="Kaytranada" style={{backgroundImage: "url("+require('./images/clth2.jpg')+")"}} className="bg-center cover aspect-ratio--object"></span>
          </span>
        </a>
        <a href="https://www.google.com" className="fl w-25 w-25-ns">
          <span className="db aspect-ratio aspect-ratio--1x1 dim">
            <span role="img" aria-label="Woman - Justice" style={{backgroundImage: "url("+require('./images/audiring.jpg')+")"}} className="bg-center cover aspect-ratio--object"></span>
          </span>
        </a>
        <a href="https://www.google.com" className="fl w-25 w-25-ns">
          <span className="db aspect-ratio aspect-ratio--1x1 dim">
            <span role="img" aria-label="Skin - Flume" style={{backgroundImage: "url("+require('./images/light1.jpg')+")"}} className="bg-center cover aspect-ratio--object"></span>
          </span>
        </a>
        <div className="fl w-50">
        <a href="https://www.google.com" className="fl w-50 w-50-ns">
          <span className="db aspect-ratio aspect-ratio--1x1 dim">
            <span role="img" aria-label="Seat at Table Solange" style={{backgroundImage: "url("+require('./images/bag1.jpeg')+")"}} className="bg-center cover aspect-ratio--object"></span>
          </span>
        </a>
        <a href="https://www.google.com" className="fl w-50 w-50-ns">
          <span className="db aspect-ratio aspect-ratio--1x1 dim">
            <span role="img" aria-label="Untitled Unmastered - Kendrick Lamar" style={{backgroundImage:"url("+require('./images/clth4.jpg')+")"}} className="bg-center cover aspect-ratio--object"></span>
          </span>
        </a>
        <a href="https://www.google.com" className="fl w-50 w-50-ns">
          <span className="db aspect-ratio aspect-ratio--1x1 dim">
            <span role="img" aria-label="Seat at Table Solange" style={{backgroundImage: "url("+require('./images/glove1.jpg')+")"}} className="bg-center cover aspect-ratio--object"></span>
          </span>
        </a>
        <a href="https://www.google.com" className="fl w-50 w-50-ns">
          <span className="db aspect-ratio aspect-ratio--1x1 dim">
            <span role="img" aria-label="Untitled Unmastered - Kendrick Lamar" style={{backgroundImage:"url("+require('./images/clth3.jpg')+")"}} className="bg-center cover aspect-ratio--object"></span>
          </span>
        </a>
        </div>
        <a href="https://www.google.com" className="fl w-50 w-50-ns">
          <span className="db aspect-ratio aspect-ratio--1x1 dim">
            <span role="img" aria-label="Moon Shaped Pool 2" style={{backgroundImage: "url("+require('./images/clth5.jpg')+")"}} className="bg-center cover aspect-ratio--object"></span>
          </span>
        </a>
      </article>
    </div>
  )
}

export default ShopCard;