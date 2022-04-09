import React from "react";

import { Grid, Text, Button } from "../elements";

const Footer = (props) => {
  return (
    <React.Fragment>
      <Grid bg="#ddd">
        <Grid is_flex width="40%" margin="auto">
          <Button text="F/E 정현수 김영경 이종길"></Button>
          <Button text="B/E 이현승 배정민 오경은"></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Footer.defaultProps = {};

export default Footer;
