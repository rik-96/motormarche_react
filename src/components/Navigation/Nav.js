import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <header className="sans-serif">
      <div className="cover bg-left bg-center-l" style={{backgroundImage: "url("+require("./tyre.jpg")+")"}}>
        <div className="bg-black-80 pb5 pb6-m pb7-l">
          <nav className="dt w-100 mw8 center"> 
            <div className="dtc v-mid tr pa3">
              <a className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/" >How it Works</a> 
              <a className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/" >Pricing</a> 
              <a className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/" >About</a> 
              <a className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/" >Careers</a> 
              <a className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba" href="/" >Sign Up</a> 
            </div>
          </nav> 
          <div className="tc-l mt4 mt5-m mt6-l ph3">
            <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">This is your super impressive headline</h1>
            <h2 className="fw1 f3 white-80 mt3 mb4">Now a subheadline where explain your wonderful new startup even more</h2>
            <a className="f6 no-underline hover-white grow dib v-mid white ba b--white ph3 pv2 mb3" href="/"><span>Store</span><img src="./images/icon.png" /></a>
          </div>
        </div>
      </div> 
    </header>
  )
}

export default Nav;