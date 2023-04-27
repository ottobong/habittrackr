import React from "react";


const Navigation = () => {
    return (
      <div className="container navigation">
        <div className="row align-items-center">
          <div className="col-8">
            <img src="./assets/Logo.png" alt="" />
          </div>
          <div className="col-1 col-sm-1">
            <a href="./login.html">Login</a>
          </div>
          <div className="col-3">
            <button type="button" className="btn btn-primary">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Navigation;