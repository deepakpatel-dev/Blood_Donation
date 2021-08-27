import React from 'react'
import {Link} from 'react-router-dom'
export default class Menu extends React.Component
{
    constructor(props){
        super(props)
    }

    render()
    {
        return <>
            <div class="responsive-nav">
        <i class="fa fa-bars" id="menu-toggle"></i>
        <div id="menu" class="menu">
          <i class="fa fa-times" id="menu-close"></i>
          <div class="container">
            <div class="image">
              <a href="#"><img src="assets/images/author-image.jpg" alt="" /></a>
            </div>
            <div class="author-content">
              <h4>Blood Donor</h4>
              <span>Give Lifes ....</span>
            </div>
            <nav class="main-nav" role="navigation">
              <ul class="main-menu">
                <li><Link to="/about">About Donation</Link></li>                                
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/">Login</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </nav>
            <div class="social-network">
              <ul class="soial-icons">
                <li>
                  <a href="https://fb.com/templatemo"
                    ><i class="fa fa-facebook"></i
                  ></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-linkedin"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-dribbble"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-rss"></i></a>
                </li>
              </ul>
            </div>
            <div class="copyright-text">
              <p>Copyright 2019 Reflux Design</p>
            </div>
          </div>
        </div>
      </div>
        </>
    }
}