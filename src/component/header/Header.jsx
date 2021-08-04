import "./header.css";
import { Link } from "react-router-dom";
import { Box, Container, Grid } from "@material-ui/core";

function Header({ showbg }) {
  return (
    <>
      <Box className="header">
        <Container>
          <Grid container>
            <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
              <p id="logo">
                <Link to="/" onClick={showbg}>
                  Möhāmmed āshrāf
                </Link>
              </p>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <nav>
                <ul>
                  <li>
                    <Link to="/resume" onClick={showbg}>
                      Resume
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" onClick={showbg}>
                      About Me
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio" onClick={showbg}>
                      Portfolio
                    </Link>
                  </li>

                  <li>
                    <Link to="/contact" onClick={showbg}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
              <nav id="social-icons">
                <ul>
                  <li>
                    <a href="#" target="_blank" className="fab fa-facebook"></a>
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
    </>
  );
}

export default Header;
