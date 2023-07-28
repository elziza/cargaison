

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="ftco-blocks-cover-1">
      <div className="site-section-cover overlay" data-stellar-background-ratio="0.5" style={{backgroundImage: "url('https://media.istockphoto.com/id/1218341272/fr/photo/delivery-man-donne-un-colis-postal-%C3%A0-un-client-daffaires-qui-signe-un-appareil-pod-signature.jpg?b=1&s=612x612&w=0&k=20&c=R7Q4HXwXPRrkyeXkKvGskUMP_9zG9ijXOlvr-qPv9Hc=')"}}>
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-7">
              <h1 className="mb-3">Contact Us</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veritatis in tenetur doloremque, maiores doloribus officia iste. Dolores.</p>
              <p><NavLink to="#" class="btn btn-primary">Learn More</NavLink></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="site-section bg-light" id="contact-section">
      <div className="container">
        <div className="row justify-content-center text-center">
        <div className="col-7 text-center mb-5">
          <h2>Contact Us Or Use This Form To Rent A Car</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo assumenda, dolorum necessitatibus eius earum voluptates sed!</p>
        </div>
      </div>
        <div className="row">
          <div className="col-lg-8 mb-5" >
            <form action="#" method="post">
              <div className="form-group row">
                <div className="col-md-6 mb-4 mb-lg-0">
                  <input type="text" className="form-control" placeholder="First name"/>
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="First name"/>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-md-12">
                  <input type="text" className="form-control" placeholder="Email address"/>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-md-12">
                  <textarea name="" id="" className="form-control" placeholder="Write your message." cols="30" rows="10"></textarea>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-6 mr-auto">
                  <input type="submit" className="btn btn-block btn-primary text-white py-3 px-5" value="Send Message"/>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-4 ml-auto">
            <div className="bg-white p-3 p-md-5">
              <h3 className="text-black mb-4">Contact Info</h3>
              <ul className="list-unstyled footer-link">
                <li className="d-block mb-3">
                  <span className="d-block text-black">Address:</span>
                  <span>34 Street Name, City Name Here, United States</span></li>
                <li className="d-block mb-3"><span class="d-block text-black">Phone:</span><span>+1 242 4942 290</span></li>
                <li className="d-block mb-3"><span class="d-block text-black">Email:</span><span>info@yourdomain.com</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

      </div>
    )
  }
}
