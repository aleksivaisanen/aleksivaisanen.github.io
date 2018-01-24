import React, { Component } from 'react';

class Header extends Component {
  render() {
      if(this.props.data){
        var networks = this.props.data.social.map(function(network){
            return <li key = {network.name}><a href={network.url}><i className={network.className}></i></a></li>
        });
      }
    return (
        <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
         </ul> 

      </nav> 

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">I'm Aleksi Väisänen.</h1>
            <h3><span>I'm a Turku based Computer Science and Engineering student in the University of Turku. I like to design and program websites and web applications of all types. I also like to experiment with various programming languages. </span></h3>
            <hr />
            <ul className="social">
                {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
