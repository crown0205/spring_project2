import React from "react";

import { Grid, Text, Button } from "../elements";

const Footer = (props) => {
  return (
    <React.Fragment>
      <Grid is_flex padding="3px 16px">
        <Button text="F/E 정현수 김영경 이종길"></Button>
        <Button text="B/E 이현승 배정민 오경은"></Button>
      </Grid>
    </React.Fragment>
  );
};

Footer.defaultProps = {};

export default Footer;
