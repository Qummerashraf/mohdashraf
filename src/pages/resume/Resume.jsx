import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import "./resume.css";

function Resume() {
  return (
    <>
      <Box className="resume" id="resume">
        <Container>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="resume-header">
                <p>I'm available for hire</p>
                <h1>My Resume</h1>
                <hr />
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
              <div className="resume-content">
                <div className="resume-btn">
                  <h2>Education</h2>
                </div>
                <ol>
                  <li className="res-content">
                    <h4>July 2019 - Pursuing</h4>
                    <h3>
                      Bachelor of Engineering In Computer Science
                      <span>The Institution of Engineers (India)</span>
                    </h3>
                    <p>
                      Currently Pursuing Bachelor of Engineering in Computer
                      Science after completing Diploma in Electronic
                      Engineering.
                    </p>
                  </li>
                  <li className="res-content">
                    <h4>July 2015 - July 2018</h4>
                    <h3>
                      Diploma In Electronic Engineering{" "}
                      <span>Suresh Deep Polytechnic</span>
                    </h3>
                    <p>
                      Did Diploma In Electronic Electronic From Suresh Deep
                      Polytechnic, Ghaziabad With First Division & Awarded With
                      Academic Execellance Award Two Consecutive Year
                    </p>
                  </li>
                </ol>
              </div>
            </Grid>
            <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
              <div className="resume-content">
                <div className="resume-btn">
                  <h2>Work Experiences</h2>
                </div>
                <ol>
                  <li className="res-content">
                    <h4>August 2018 - August 2019</h4>
                    <h3>
                      IT Engineer <span>WIPRO</span>
                    </h3>
                    <p>
                      Worked As Desktop & Network Support Engineer In Honda
                      India For One Year.
                    </p>
                  </li>
                  <li className="res-content">
                    <h4>September 2019 - December 2020</h4>
                    <h3>
                      Front End UI/UX Developer <span>Protechno Media</span>
                    </h3>
                    <p>
                      Works As Front End UI/UX Developer For More Than One Year
                      Using HTML, CSS, Bootsrap, Jquery,etc along with
                      Wordpress.
                    </p>
                  </li>
                </ol>
              </div>
            </Grid>
            <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
              <div className="resume-skill-content">
                <div className="resume-btn">
                  <h2>Programming Skills</h2>
                </div>
                <div className="skill">
                  <ol>
                    <li>
                      <h3>HTML & JSX</h3>
                      <h5>HTML, HTML - 5, JSX, etc.</h5>
                    </li>
                    <li>
                      <h3>CSS Preprocessor & Framework</h3>
                      <h5>
                        CSS, CSS 3, SASS Preprocessor , Bootstrap , Material UI
                        , Mobile Friendly Design, Flex, Grid Layout, etc.
                      </h5>
                    </li>
                    <li>
                      <h3>JavaScript</h3>
                      <h5>
                        Basic JavaScript , Advance JavaScript , ES 6, Oops,
                        JQuery, etc.
                      </h5>
                    </li>
                    <li>
                      <h3>React JS</h3>
                      <h5>
                        React JSX, Class Component , Functional Component ,
                        Hooks , Redux , Routing , API , Firebase , etc.{" "}
                      </h5>
                    </li>
                    <li>
                      <h3>Node JS</h3>
                      <h5>
                        {" "}
                        Basic Modules , NPM , OS Modules , Network Modules ,
                        Path Modules , FS Modules , etc.{" "}
                      </h5>
                    </li>
                    <li>
                      <h3>Express JS</h3>
                      <h5> Routing , Template Engines , REST APIs , etc. </h5>
                    </li>
                    <li>
                      <h3>Mongo DB </h3>
                      <h5>
                        {" "}
                        Schema Creation , CRUD Operation , Mongoose GUI , etc.{" "}
                      </h5>
                    </li>
                  </ol>
                </div>
              </div>
            </Grid>
            <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
              <div className="resume-skill-content">
                <div className="resume-btn">
                  <h2>Other Usable Skills</h2>
                </div>
                <div className="skill">
                  <ol>
                    <li>
                      <h3>Git & GitHub</h3>
                      <h5>
                        Git Command, GitHub Respository, File Handling, Version
                        Controlling, etc.
                      </h5>
                    </li>
                    <li>
                      <h3>Wordpress Customization</h3>
                      <h5>
                        Wordpress Customization, Plugins, Themes & Templates
                        Customization, etc.
                      </h5>
                    </li>
                    <li>
                      <h3>SEO</h3>
                      <h5>
                        On-Page SEO, Off-Page SEO, Keyword Research, Content
                        Optimization, Link Building, etc.
                      </h5>
                    </li>
                    <li>
                      <h3>PSD Conversion</h3>
                      <h5>PSD Templates Into Code, Basic Photoshop, etc.</h5>
                    </li>
                    <li>
                      <h3>C Programming</h3>
                      <h5>
                        Basic Concept, Data Types, If-Else, Loops, Arrays,
                        Pointer, Structure, Union, etc.
                      </h5>
                    </li>
                    <li>
                      <h3>C++ Programming</h3>
                      <h5>Basic C++ Concept, Oops Classes, Functions, etc.</h5>
                    </li>
                  </ol>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Resume;
