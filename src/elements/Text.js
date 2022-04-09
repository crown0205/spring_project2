import React from "react";
import styled from "styled-components";

const Text = props => {
  const { children, margin, padding, Fw, size, bold, center } = props;

  // Fw = font-weight
  
  const styles = {
    size,
    margin,
    padding,
    Fw,
    bold,
    center,
  };

  return (
    <React.Fragment>
      <P {...styles}>{children}</P>
    </React.Fragment>
  );
};

Text.defaultProps = {
  children: null,
  bold: false,
  margin: false,
  padding: false,
  center: false,
  size: "16px",
};

const P = styled.p`
  color: ${props => props.color};
  font-size: ${props => props.size};
  font-weight: ${props => props.Fw};
  /* font-weight: ${props => (props.bold ? "600" : "400")}; */
  text-align: ${props => (props.center ? "center" : "")};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  font-size: ${props => props.size};
`;

export default Text;
