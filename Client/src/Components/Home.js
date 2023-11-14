import React from "react";
import Teamlogo from "./Calculator-pana.png";
import "../CSS/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="wrapper">
        <div className="container">
          <div className="grid-cols-2">
            <div className="grid-item-1">
              <h1 className="main-heading">
                Welcome to <span>CalcGPA</span>
              </h1>
              <h2 className="small">Developed by VERNOS</h2>

              <p className="info-text">
                Your all-in-one solution for managing your academic
                journey."Elevate Your Academic Journey with CalcGPA: Calculating
                Success, One Grade at a Time"
              </p>

              <div className="btn_wrapper">
                <button className="btn btnn">
                  <Link to="/Signup">Get Started</Link>
                  <i class="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>
            </div>
            <div className="grid-item-2">
              <div className="team_img_wrapper">
                <img src={Teamlogo} alt="team-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper" id="bottom_wrapper">
        <div className="container" data-aos="fade-up" data-aos-duration="1000">
          <div className="grid-cols-3">
            <div className="grid-col-item">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="featured_info">
                <p>
                  At CalcGPA, we're dedicated to helping students like you
                  succeed in their academic endeavors...
                </p>
              </div>
            </div>
            <div className="grid-col-item">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 
                2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="featured_info">
                <p>
                  Our platform is designed to simplify your academic life and
                  provide you with the tools you need to achieve your
                  educational goals.
                </p>
              </div>
            </div>

            <div className="grid-col-item">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <div className="featured_info">
                <p>
                  Ready to get started? Sign in or create an account to explore
                  the full range of features CalcGPA has to offer. Your academic
                  journey starts here!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer></footer>
    </>
  );
};

export default Home;
