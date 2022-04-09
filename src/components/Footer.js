import React from "react";
import styled from "styled-components"

import { Grid, Text, Button } from "../elements";

const Footer = (props) => {
  return (
    <React.Fragment>
      <Grid is_flex bg="#cdcdcd" height="200px"  margin="50px auto 0">
      <Grid is_flex width="40%" bg="#fff" margin="auto">
        
        <Button text="F/E 정현수 김영경 이종길"></Button>
        <Button text="B/E 이현승 배정민 오경은"></Button>
      </Grid>
      </Grid>
    </React.Fragment>
  );
};

Footer.defaultProps = {};

export default Footer;
