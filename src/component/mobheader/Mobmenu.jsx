import React, { useState } from "react";
import "./mobmenu.css";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import { Box, Container, Grid } from "@material-ui/core";
import Cover from "../cover/Cover";

function Mobmenu() {
  const [open, setOpen] = useState("none");
  const [bgCover, setbgCover] = useState("-100%");

  const openMenu = () => {
    setOpen("block");
    setbgCover("100%");
  };

  const closeMenu = () => {
    setOpen("none");
    setbgCover("-100%");
  };

  return (
    <>
      <Cover bgCover={bgCover} />
      <Box class="wrap-mobile">
        <Container>
          <Grid container>
            <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
              <p id="mobile-logo">
                {" "}
                <Link to="/">Möhāmmed āshrāf</Link>
              </p>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
              <p id="open-mobile-menu" onClick={openMenu}>
                <i class="fas fa-bars"></i>
              </p>
            </Grid>
          </Grid>
        </Container>

        <Box class="mobile" id="mobile-layout" style={{ display: open }}>
          <Container>
            <Grid>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <div class="close">
                  <CloseIcon onClick={closeMenu} />
                </div>
              </Grid>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <nav id="mobile-menu">
                  <ul>
                    <li>
                      <Link to="/resume" onClick={closeMenu}>
                        Resume
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" onClick={closeMenu}>
                        About Me
                      </Link>
                    </li>
                    <li>
                      <Link to="/portfolio" onClick={closeMenu}>
                        Portfolio
                      </Link>
                    </li>

                    <li>
                      <Link to="/contact" onClick={closeMenu}>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </Grid>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <nav id="mobile-social">
                  <ul>
                    <li>
                      <a
                        href="#"
                        target="_blank"
                        className="fab fa-facebook"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/mohdashraf31/"
                        target="_blank"
                        className="fab fa-linkedin"
                      ></a>
                    </li>

                    <li>
                      <a
                        href="https://github.com/Qummerashraf"
                        target="_blank"
                        className="fab fa-github"
                      ></a>
                    </li>
                  </ul>
                </nav>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default Mobmenu;
