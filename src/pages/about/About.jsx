import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import "./about.css";
import Flags from "country-flag-icons/react/3x2";

function About() {
  return (
    <>
      <Box className="about-me" id="about-me">
        <Container>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="about-header">
                <p>Who I'm</p>
                <h1>About Me</h1>
                <hr />
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xl={8} lg={8} md={6} sm={12} xs={12}>
              <div className="about-content">
                <h2>
                  Hello, I'm <span>Möhāmmed Q. Ashrāf</span>
                </h2>
                <p>
                  Myself Mohammad Qummer Ashraf, I lived in Delhi,{" "}
                  <Flags.IN className="flag" /> . I had done Diploma in
                  Electronic Engineering & currently pursuing Computer Science
                  Engineering from The Institution of Engineers (India) [IEI].
                  Worked as IT Engineer in WIPRO for a year & doing work in web
                  development field from last 2 years. Runs various blogging
                  sites & also did SEO, Social Media Marketing, Affiliate
                  Marketing, etc.
                </p>
                <p>
                  <span>DOB</span>24-January - 1997
                </p>
                <p>
                  <span>Residence</span>Delhi, India
                </p>
                <p>
                  <span>Address</span>C-412 St.19 Vasundhra Delhi 110096
                </p>
                <p>
                  <span>Email</span>
                  <a href="mailto:mohd69191@gmail.com">mohd69191@gmail.com</a>
                </p>
                <p>
                  <span>Phone</span>
                  <a href="tel:+91 8285805452">8285805452</a>
                </p>
              </div>
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              <div className="about-img">
                <img alt="" width="0%" height="500px" />
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="service-btn">
                <h2>My Services</h2>
              </div>
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              <div className="services">
                <span>
                  <i className="fab fa-react"></i>
                </span>
                <div className="service-content">
                  <h2>React JS Development</h2>
                  <p>
                    Create Your React Website With Latest Technologies To Make
                    Your Website More User Friendly With Great User Interaction.
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              <div className="services">
                <span>
                  <i className="fas fa-desktop"></i>
                </span>
                <div className="service-content">
                  <h2>UI/UX Development</h2>
                  <p>
                    Get Best UI/UX With Perfect Pixels & Have Great UI & UX To
                    Looks Great.
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              <div className="services">
                <span>
                  <i className="fab fa-html5"></i>
                </span>
                <div className="service-content">
                  <h2>PSD To HTML</h2>
                  <p>
                    Get Perfect Pixel To Pixel Conversion Of Your PSD Into Code
                    To Get Premium Looks.
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              <div className="services">
                <span>
                  <i className="fab fa-wpbeginner"></i>
                </span>
                <div className="service-content">
                  <h2>Landing Page Development</h2>
                  <p>
                    Get High Conversion Rate Landing Page For Your Business To
                    Reach The Customer With Premium & Greate UI/UX.
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              <div className="services">
                <span>
                  <i className="fab fa-wordpress"></i>
                </span>
                <div className="service-content">
                  <h2>Wordpress Customization</h2>
                  <p>
                    Get Best Customized & Optimized Wordpress Website With
                    Minimum Plugins.
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              <div className="services">
                <span>
                  <i className="fa fa-search"></i>
                </span>
                <div className="service-content">
                  <h2>SEO Services</h2>
                  <p>
                    Get Highly Optimized SEO For Website To Be Top Ranked
                    Website & Get More Traffic For Your Business.
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default About;
