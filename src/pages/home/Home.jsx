import React from "react";
import "./home.css";
import ReactTypingEffect from "react-typing-effect";
import { Box, Container, Grid } from "@material-ui/core";

function Home() {
  return (
    <>
      <Box className="main-home" id="home">
        <Container>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="home-content">
                <p>
                  <ReactTypingEffect
                    text={[
                      "Hello, I'm Möhāmmed Āshrāf",
                      "I'm React Developer",
                      "I Love To Develop App.",
                      "I Love To Code Program",
                    ]}
                    cursorRenderer={(cursor) => <h3>{cursor}</h3>}
                    displayTextRenderer={(text, i) => {
                      return (
                        <h3>
                          {text.split("").map((char, i) => {
                            const key = `${i}`;
                            return (
                              <a
                                key={key}
                                style={i % 2 === 0 ? { color: "white" } : {}}
                              >
                                {char}
                              </a>
                            );
                          })}
                        </h3>
                      );
                    }}
                  />
                </p>
                <h1>
                  Hello! I'm a Front End <span>React JS</span> Developer based
                  in <span>New Delhi</span>
                </h1>
                <button>
                  <a href="http://#" download="">
                    Download CV
                  </a>
                </button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Home;
