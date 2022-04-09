import React from "react";
import styled from "styled-components";

const Button = props => {
  const {
    _onClick,
    children,
    text,
    margin,
    padding,
    bg,
    color,
    width,
    br,
    height,
  } = props;


  // bg = background, br = border-radius,
  const styles = {
    padding,
    margin,
    bg,
    br,
    color,
    width,
    height
  };
  return (
    <React.Fragment>
      <ButtonBox {...styles} onClick={_onClick}>
        {text ? text : children}
      </ButtonBox>
    </React.Fragment>
  );
};

Button.defaultProps = {
  margin: "0",
  width: "100%",
  height: "100%",
  padding: "5px",
  color: "#EAEAEA",
  bg: "#252525",
};

const ButtonBox = styled.button`
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  width: ${props => props.width};
  width: ${props => props.height};
  color: ${props => props.color};
  background-color: ${props => props.bg};
  border-radius: ${props => props.br};
`;

export default Button;
