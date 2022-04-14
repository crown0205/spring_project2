import React from "react";
import styled from "styled-components";

import { Grid, Text, Button } from "../elements";

const Footer = (props) => {
  return (
    <React.Fragment>
      <Grid is_flex bg="#e5e5e5" height="200px" margin="50px auto 0">
        <Grid is_flex width="40%" margin="auto">
          <Font>F/E 정현수 김영경 이종길</Font>
          <Font>B/E 이현승 배정민 오경은</Font>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const Font = styled.div`
  font-family: "Jalnan";
`;

Footer.defaultProps = {};

export default Footer;
