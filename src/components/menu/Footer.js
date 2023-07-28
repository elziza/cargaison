

import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer className="site-footer">
      {/* <div className="container"> */}
        {/* <div className="row">
          <div className="col-lg-3">
            <img src="https://images.pexels.com/photos/7363088/pexels-photo-7363088.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="img-fluid mb-5"/>
            <h2 className="footer-heading mb-3">About Us</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
          </div>
          <div className="col-lg-8 ml-auto">
            <div className="row">
              <div className="col-lg-6 ml-auto">
                <h2 className="footer-heading mb-4">Quick Links</h2>
                <ul className="list-unstyled">
                  <li>
                  <NavLink exact to="/">Home</NavLink>
                  </li>
                  <li>
                  <NavLink to="/cargaison">Cargaison</NavLink>
                  </li>
                  <li>
                  <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                  <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <h2 className="footer-heading mb-4">Newsletter</h2>
                <form action="#" className="d-flex subscribe">
                  <input type="text" className="form-control mr-3" placeholder="Email"/>
                  <input type="submit" value="Send" className="btn btn-primary"/>
                </form>
              </div>
              
            </div>
          </div>
        </div> */}
        <div className="row pt-5 mt-5 text-center">
          <div className="col-md-12">
            <div className="border-top pt-5">
              <p>
            {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
            Copyright &copy;<script>document.write(new Date().getFullYear());</script> <i className="icon-heart text-danger" aria-hidden="true"> ZIIZV</i>
            {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
            </p>
            </div>
          </div>

        </div>
      {/* </div> */}
    </footer>
    </div>
  )
}
