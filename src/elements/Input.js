import React from "react";
import styled from "styled-components";

import { Text, Grid } from "./index";

const Input = (props) => {
  const {
    label,
    type,
    value,
    placeholder,
    _onChange,
    onSubmit,
    is_onSubmit,
    multiLine,
    width,
    left,
    height,
  } = props;

  const styles = {
    width,
    height,
    left,
  };

  if (multiLine) {
    return (
      <Grid>
        <Font>{label && <Text margin="0px">{label}</Text>}</Font>
        <TextareaBox
          rows={10}
          placeholder={placeholder}
          onChange={_onChange}
        ></TextareaBox>
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Font>{label && <Text>{label}</Text>}</Font>
      {is_onSubmit?(
      <InputBox
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={_onChange}
        onKeyPress={(e)=>{
          if(e.key === "Enter"){
            onSubmit(e);}}}
        {...styles}/>)
        :(<InputBox type={type} placeholder={placeholder} onChange={_onChange} {...styles}/>)}
    </React.Fragment>
  );
};

Input.defaultProps = {
  multiLine: false,
  type: "text",
  value: "",
  width: "100%",
  label: false,
  placeholder: "텍스트를 입력해주세요.",
  is_onSubmit: false,
  _onChange: () => {},
  onsubmit: () => {},
};

const TextareaBox = styled.textarea`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
  font-family: "Jalnan";
`;

const InputBox = styled.input`
  border: 1px solid #212121;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 12px 4px;
  box-sizing: border-box;
  ${(props) => props.left && `float: left;`}
  font-family: "Jalnan";
`;

const Font = styled.div`
  font-family: "Jalnan";
`;

export default Input;
