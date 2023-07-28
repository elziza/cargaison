

import React from 'react'
import { NavLink } from 'react-router-dom'

export default function About() {
  return (
    <div>
        <div className="ftco-blocks-cover-1">
      <div className="site-section-cover overlay" data-stellar-background-ratio="0.5" style={{backgroundImage: "url('https://images.pexels.com/photos/4506249/pexels-photo-4506249.jpeg?auto=compress&cs=tinysrgb&w=600')"}}>
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-7">
              <h1 className="mb-3">About Us</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veritatis in tenetur doloremque, maiores doloribus officia iste. Dolores.</p>
              <p><NavLink to="#" className="btn btn-primary">Learn More</NavLink></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="img-years">
              <img src="images/img_1.jpg" alt="" className="img-fluid"/>
              <div className="year">
                <span>3 <span>years in <br/>excellent service</span></span>
              </div>
            </div>

          </div>
          <div className="col-lg-5 ml-auto pl-lg-5 text-center">
            <h3 className="scissors text-center">High Quality Hair Styles</h3>
            <p className="mb-5 lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure nesciunt nemo vel earum maxime neque!</p>
            <p><NavLink to="#" className="btn btn-primary">Learn More</NavLink></p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="site-section bg-light">
      <div className="container">
        <div className="row justify-content-center text-center mb-5 section-2-title">
          <div className="col-md-6">
            <h3 className="scissors text-center">Meet Our Team</h3>
            <p className="mb-5 lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure nesciunt nemo vel earum maxime neque!</p>
          </div>
        </div>
        <div className="row align-items-stretch">

          <div className="col-lg-4 col-md-6 mb-5">
            <div className="post-entry-1 h-100 person-1">
              
                <img src="images/person_1.jpg" alt=""
                 className="img-fluid"/>
            
              <div className="post-entry-1-contents">
                <span className="meta">Founder</span>
                <h2>James Doe</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="post-entry-1 h-100 person-1">
              
                <img src="images/person_2.jpg" alt=""
                 className="img-fluid"/>
            
              <div className="post-entry-1-contents">
                <span className="meta">Founder</span>
                <h2>James Doe</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-5">
            <div className="post-entry-1 h-100 person-1">
              
                <img src="images/person_3.jpg" alt=""
                 className="img-fluid"/>
            
              <div className="post-entry-1-contents">
                <span className="meta">Founder</span>
                <h2>James Doe</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-5">
            <div className="post-entry-1 h-100 person-1">
              
                <img src="images/person_4.jpg" alt=""
                 className="img-fluid"/>
            
              <div className="post-entry-1-contents">
                <span className="meta">Founder</span>
                <h2>James Doe</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-5">
            <div className="post-entry-1 h-100 person-1">
              
                <img src="images/person_5.jpg" alt=""
                 className="img-fluid"/>
            
              <div className="post-entry-1-contents">
                <span className="meta">Founder</span>
                <h2>James Doe</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-5">
            <div className="post-entry-1 h-100 person-1">
              
                <img src="images/person_1.jpg" alt=""
                 className="img-fluid"/>
            
              <div className="post-entry-1-contents">
                <span className="meta">Founder</span>
                <h2>James Doe</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, sapiente.</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>


    

    <div className="site-section section-3" data-stellar-background-ratio="0.5" style={{backgroundImage: "url('https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=600')"}}>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-7 text-center mb-5">
            <h2 className="text-white scissors primary-color-icon text-center">Quality Haircut</h2>
            <p className="lead text-white mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quo doloribus, suscipit libero, voluptate aliquam.</p>
            <p><NavLink to="#" className="btn btn-primary">Contact Us Now</NavLink></p>
          </div>
        </div>
      </div>
    </div>

    
    </div>
  )
}
