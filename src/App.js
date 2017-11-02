import React, { Component } from 'react';
import './App.css';

const OtherProjects = () => 
  <section className="sec edu">
    <h3>PERSONAL PROJECTS</h3>

    <hr />
    <div className="indent">
      <div className="with-date">
        <p className="title">Collaborator, <span className="italic">GantryBot</span></p>
      </div>

      <div className="indent">
        <p>Indiez.io is a platform of curated freelance developers. Build successful products with our global community of top startup talent.</p>

        <ul>
          <li>Developing a robot to cook simple food. Responsible for its moƟon planning and hardware design.</li>
          <li>Implemented path planning in C++ using ROS and simulaƟon in Gazebo.</li>
          <li>Built controller for a 5 DOF roboƟc arm for pick and place.</li>
          <li>Built a docking mechanism to change end-tool automaƟcally.</li>
          <li>Demo: https://www.youtube.com/watch?v=9ZPKHFf3Kv4</li>
        </ul>
      </div>
    </div>
  </section>;


const EDU = () =>
  <section className="sec edu">
    <h3>EDUCATION</h3>
    <hr />

    <div className="indent">
      <div className="with-date">
        <p className="title">B.Tech, Boomreddy College of Engineering, Hubli</p>
        <p>June 2008 - July 2012</p>
      </div>
      <p>Major: Electrical Engineering</p>
    </div>
  </section>

const SKILLS = () =>
  <section className="sec">
    <h3>TECHNICAL STRENGTHS</h3>
    <hr />

    <div className="skills indent">
      <div className="skill">
        <p className="title">Computer Language</p>
        <p>Haskell, Javascript, Python, C++ </p>
      </div>
      <div className="skill">
        <p className="title">Tools & Frameworks</p>
        <p>ReactJs, Redux, Backbone, Django, Jekyll, Github Pages.</p>
      </div>      
      <div className="skill">
        <p className="title">Libraries</p>
        <p>ROS, Gazebo, LinuxCnc, Google AnalyƟcs ReporƟng Api.</p>
      </div>   
    </div>
  </section>

class App extends Component {
  render() {
    return (
      <div className="App">

        <section className="name">
          <h1>PRAVEEN SINGH</h1>
          <p>Indranagar, Bangalore, India</p>
          <p>prrraveen@gmail.com &#9826; http://prrraveen.github.io &#9826; +91 9901362636</p>
        </section>


        <section className="sec exp">
          <h3>WORK EXPERIENCE</h3>
          <hr />
          
          <div className="indent">
            <div className="with-date">
              <p className="title">Freelance Frontend Developer, <span className="italic">Indiez</span></p>
              <p> March 2016 - Present</p>
            </div>

            <div className="indent">
              <p className="title">PROJECTS</p>
              <ul className="proj-list"> 
                <li>
                  <div className="with-date">
                    <p className="title">Mobile Web App, <span className="italic">Credr</span></p>
                    <p className="italic">React, Redux, Sass, AWS</p>
                  </div>
                  <ul>
                    <li>Wrote almost 75% of code running mobile website.</li>
                    <li>Integrated Redux to handle the state. It streamlined data flow and events on UI.</li>
                    <li>Used Sass for managing css.</li>
                    <li>Moduler Components for reusability.</li>
                    <li>Integrated React, Webpack and ECMASCRIPT-6 for smooth development.</li>
                    <li>Demo: http://mdev.creder.asia</li>
                  </ul>
                </li>

                <li>
                  <div className="with-date">
                    <p className="title">E-commerse platform, <span className="italic">Credr</span></p>
                    <p className="italic">Backbone Marionette, Webpack, Sass</p>
                  </div>

                  <ul>
                    <li>Ported Backbone code to Backbone Marionette for improving code reusability and UI hiccups. </li>
                    <li>Built complex filters with data model similar to redux.</li>
                    <li>Added unit testing to critical parts of application like payments, promo code and filters.</li>
                  </ul>
                </li>

                <li>
                  <div className="with-date">
                    <p className="title">Data managment Panel, <span className="italic">Flyrobe</span></p>
                    <p className="italic"> React, Redux, Material-ui, Django</p>
                  </div>

                  <ul>
                    <p>Built web app to enter and manage inventory for their online E-commerse platform.</p>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className="indent">
            <div className="with-date">
              <p className="title">Lead Frontend Developer, <span className="italic">TinyOwl</span></p>
              <p> January 2014 - june 2015</p>
            </div>

            <div className="indent">
              <ul>
                <li>Developed and maintained TinyOwl’s order managment application. Responsible for architecture of various modules: order distribution, Menu model.</li>
                <li>Lead a full stack team of 4 developers, maintaining stable order proccessing panel, which involved heavy testing. Achieved stable weekly releases, by following Scrum & using feature gating.</li>
                <li> Reduced Order Processing time to 20 sec(from 1min) by improving UI/UX to a large extent.</li>
                <li>Developed paterns to improve development speed and stability.</li>
                  <ul>
                    <li>Integrated ReactJs and Redux.</li>
                    <li>Improved build tools with Webpack</li>
                  </ul>
              <li>Contributed to many internal web panels based on Backbone and Django, resulƟng in an increase in efficiency of operation teams.</li>
              </ul>
            </div>
          </div>

          <div className="indent">
            <div className="with-date">
              <p className="title">Full-Stack Developer, <span className="italic">Aasaanjobs </span></p>
              <p> January 2014 - june 2015</p>
            </div>

            <div className="indent">
              <ul>
                <li>Developed and maintained data managment panel and website.</li>
              </ul>
            </div>
          </div>
        </section>

        <OtherProjects />

        <EDU />
        
        <SKILLS />
      </div>
    );
  }
}

export default App;
