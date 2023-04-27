import React from "react";

const Footer = () => {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <img src={logo} alt="logo" />
              <p>
                Join the millions of people who have already transformed
                <br />
                their lives with our app. Sign up now and start your
                <br />
                journey to success!
              </p>
              <button type="button" className="btn btn-primary">
                Get Started Now
              </button>
            </div>
            <div className="col-3">
              <h5>Quick Links</h5>
              <div className="footer_menu">
                <a href="#">About us</a>
                <br />
                <a href="#">Careers</a>
                <br />
                <a href="#">Support</a>
                <br />
                <a href="#">Blog</a>
              </div>
            </div>
            <div className="col-4">
              <h5>Newsletter Signup</h5>
              <form action="#">
                <input type="email" id="email" placeholder="youremail@mail.com" />
                <br />
                <input type="submit" value="Subscribe Now" />
              </form>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
      