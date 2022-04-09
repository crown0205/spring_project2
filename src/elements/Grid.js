import React from "react";
import styled from "styled-components";

// Mw = min-width,

const Grid = props => {
  const { children, width, margin, padding, bg, center, _onClick, height, Minw, Maxw,is_flex} =
    props;

  const styles = {
    is_flex:is_flex,
    width,
    margin,
    padding,
    bg,
    center,
    height,
    Minw,
    Maxw,
    is_flex,
  };

  return (
    <React.Fragment>
      <GridBox {...styles} onClick={_onClick}>
        {children}
      </GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  children: null,
  width: "100%",
  height: "auto",
  padding: false,
  margin: false,
  bg: false,
  center: false,
  _onClick: () => {},
};

const GridBox = styled.div`

  width: ${props => props.width};
  height: ${props => props.height};
  box-sizing: border-box;
  min-width: ${props => props.Minw};
  max-width: ${props => props.Maxw};
  ${props => (props.padding ? `padding: ${props.padding};` : "")}
  ${props => (props.margin ? `margin: ${props.margin};` : "")}
  ${props => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props)=>props.is_flex ? `display:flex; align-items:center; justify-content : space-between;`:''};
  ${props => (props.center ? `text-align: center;` : "")};

`;

export default Grid;
