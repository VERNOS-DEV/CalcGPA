import React from "react";
import "../CSS/Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  function c() {
    let a = document.querySelector(".prop");
    a.style.display = "none";
  }
  function cc() {
    let b = document.querySelector(".prop");
    b.style.display = "block";
  }

  return (
    <>
      <div className="sidebar prop">
        {/* <div className="logo-name">CalcGPA</div> */}
        <div>
          <ul id="prop1" className=" prop1">
            <li>
              <svg
                onClick={c}
                class="svg2"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </li>
            <li onClick={c}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={c}>
              <Link to="/Calculate">Calculate</Link>
            </li>
            <li onClick={c}>
              <Link to="/Login">Login</Link>
            </li>
            <li onClick={c}>
              <Link to="/About">About</Link>
            </li>
          </ul>
        </div>
      </div>
      <nav>
        <div className="logo-name ">CalcGPA</div>
        <div>
          <ul className="navbar-list ">
            <li className="hideOnMobile">
              <Link to="/">Home</Link>
            </li>
            <li className="hideOnMobile">
              <Link to="/Calculate">Calculate</Link>
            </li>
            <li className="hideOnMobile">
              <Link to="/Login">Login</Link>
            </li>
            <li className="hideOnMobile">
              <Link to="/About">About</Link>
            </li>
            <li>
              <svg
                onClick={cc}
                class="svg1"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
