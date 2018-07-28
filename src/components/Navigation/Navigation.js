import React from 'react';
import './Navigation.css'

const Navigation = ({ active }) => {
  return (
    <nav className="dt o-95 shadow-5 bg-black-90 w-100 ph3 pv3 pv4-ns ph4-m ph5-l" >
      <span className="dtc white w-25" >
        <h2>MotorMarch&eacute; </h2>
      </span>
      <div className="dtc v-mid w-75 tr">
        <a className="grow hover-white f5-ns no-underline white dn dib-l ph2 ph3-ns pv1" href="http://google.com" title="Home">Home</a>
        <a className="grow hover-white white f5-ns dn dib-ns ph2 ph3-ns pv1" href="http://google.com" title="Store">Store</a>
        <a className="grow hover-white white f5-ns dib ph2 ph3-ns pv1" href="http://google.com" title="Login">Login</a>
        <a className="grow hover-white white f5-ns dib ph2 ph3-ns pv1" href="http://google.com" title="Register">Register</a>
      </div>
    </nav>
  )
}

export default Navigation;