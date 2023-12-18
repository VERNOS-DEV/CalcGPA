import React from "react";
import "../CSS/About.css";
import Illus from "./veri1.png";

const About = () => {
  return (
    <>
      <div className="Desktop">
        <div className="Acontainer">
          <div className="left">
            <img src={Illus} alt="Vernos" className="p1" />
          </div>
          <div className="right">
            <h1>About Us</h1>
            <h2>Hello! Welcome to our website... Glad to see you here.</h2>
            <p>
              We are a group of enthusiastic developers with a common goal to
              build, manage, and improve websites that solve real-world
              problems. We are currently pursuing Computer Science Engineering
              at Jain College of Engineering and Research, and we are eager to
              use our coding skills to make a positive impact on the world. 
            </p>
          </div>
        </div>

        <div className="cont3">
          <div className="motive">
            <h2>Team's Motive:</h2>
            <p>
              Our motive is to help students with calculating SGPA and CGPA. We
              noticed that students of all branches were facing problems while
              calculating these important metrics. Analyzing this problem, we
              came up with a solution to calculate SGPA by just entering marks.
              We are also working on scaling up our website to include more
              features and resources for students. <br />
              <br />
              In addition to our core functionality, we are also planning to add
              the following features to our webapp:
            </p>
            <div>
              <ul className="motive-adjust">
                <li>
                  <p>
                    A CGPA calculator that allows students to track their
                    progress over time
                  </p>
                </li>
                <li>
                  <p>Creation of account for students to store their result.</p>
                </li>
                <li>
                  <p>
                    Students will be able to download and share their results.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile440">
        <div className="Bcontainer">
          <div className="top1">
            <u className="underline1">
              <h1>About Us</h1>
            </u>

            <h2>Hello! Welcome to our website... Glad to see you here.</h2>
          </div>
          <div className="top2">
            <img src={Illus} alt="Vernos" className="p2" />
          </div>

          <div className="top3">
            <p>
              We are a group of enthusiastic developers with a common goal to
              build, manage, and improve websites that solve real-world
              problems. We are currently pursuing Computer Science Engineering
              at Jain College of Engineering and Research, and we are eager to
              use our coding skills to make a positive impact on the world.
            </p>
          </div>

          <div className="top4">
            <u className="underline1">
              <h2>Team's Motive:</h2>
            </u>
          </div>

          <div className="top5">
            <p>
              Our motive is to help students with calculating SGPA and CGPA. We
              noticed that students of all branches were facing problems while
              calculating these important metrics. Analyzing this problem, we
              came up with a solution to calculate SGPA by just entering marks.
              We are also working on scaling up our website to include more
              features and resources for students. <br />
              <br />
              In addition to our core functionality, we are also planning to add
              the following features to our website:
            </p>
          </div>

          <div className="top6">
            <ul className="motive-adjust2">
              <li>
                <p>
                  A CGPA calculator that allows students to track their progress
                  over time
                </p>
              </li>
              <li>
                <p>Creation of account for students to store their result.</p>
              </li>
              <li>
                <p>
                  Students will be able to download and share their results.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
