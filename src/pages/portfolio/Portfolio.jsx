import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import "./portfolio.css";

function Portfolio() {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <>
      <Box className="portfolio" id="portfolio">
        <Container>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="portfolio-header">
                <p>Showcase of my best works</p>
                <h1>My Portfolio</h1>
                <hr />
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="block-tabs">
                <div
                  className={toggle === 1 ? "tabs tabs-active" : "tabs"}
                  onClick={() => toggleTab(1)}
                >
                  All Projects
                </div>
                <div
                  className={toggle === 2 ? "tabs tabs-active" : "tabs"}
                  onClick={() => toggleTab(2)}
                >
                  React Projects
                </div>
                <div
                  className={toggle === 3 ? "tabs tabs-active" : "tabs"}
                  onClick={() => toggleTab(3)}
                >
                  Wordpress Projects
                </div>
                <div
                  className={toggle === 4 ? "tabs tabs-active" : "tabs"}
                  onClick={() => toggleTab(4)}
                >
                  UI/UX Projects
                </div>
              </div>
              <div className="content-tabs">
                <div
                  className={
                    toggle === 1 ? "content active-content" : "content"
                  }
                >
                  <Grid container>
                    <Grid
                      item
                      xl={3}
                      lg={3}
                      md={4}
                      sm={12}
                      xs={12}
                      style={{ justifyContent: "center" }}
                    >
                      <div className="projects">
                        <a href="#">
                          <img src="https://picsum.photos/200/300" alt="" />
                        </a>
                      </div>
                    </Grid>
                    <Grid item xl={3} lg={3} md={4} sm={12} xs={12}>
                      <div className="projects">
                        <a href="#">
                          <img src="https://picsum.photos/200/300" alt="" />
                        </a>
                      </div>
                    </Grid>
                    <Grid item xl={3} lg={3} md={4} sm={12} xs={12}>
                      <div className="projects">
                        <a href="#">
                          <img src="https://picsum.photos/200/300" alt="" />
                        </a>
                      </div>
                    </Grid>
                    <Grid item xl={3} lg={3} md={4} sm={12} xs={12}>
                      <div className="projects">
                        <a href="#">
                          <img src="https://picsum.photos/200/300" alt="" />
                        </a>
                      </div>
                    </Grid>
                    <Grid item xl={3} lg={3} md={4} sm={12} xs={12}>
                      <div className="projects">
                        <a href="#">
                          <img src="https://picsum.photos/200/300" alt="" />
                        </a>
                      </div>
                    </Grid>
                  </Grid>
                </div>
                <div
                  className={
                    toggle === 2 ? "content active-content" : "content"
                  }
                >
                  <h2>Content 2</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur modi dicta fuga culpa exercitationem eveniet
                    consectetur odio corrupti id reprehenderit accusamus quia
                    animi repellendus, ex vero esse consequuntur ad. Debitis?
                  </p>
                </div>
                <div
                  className={
                    toggle === 3 ? "content active-content" : "content"
                  }
                ></div>
                <div
                  className={
                    toggle === 4 ? "content active-content" : "content"
                  }
                >
                  <h2>Content 4</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur modi dicta fuga culpa exercitationem eveniet
                    consectetur odio corrupti id reprehenderit accusamus quia
                    animi repellendus, ex vero esse consequuntur ad. Debitis?
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

export default Portfolio;
