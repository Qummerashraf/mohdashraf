import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import "./contact.css";

function Contact() {
  return (
    <>
      <Box class="contact" id="contact">
        <Container>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div class="contact-header">
                <p>I'm available for hire</p>
                <h1>Contact Me</h1>
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xl={6} lg={6} md={12} sm={12} xs={12} className="form">
              <form action=""></form>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Contact;
