import React from "react";
import styled from "styled-components";

import { Text, Grid } from "./index";

const Input = props => {
  const {
    label,
    type,
    value,
    placeholder,
    _onChange,
    onSubmit,
    is_submit,
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
        {label && <Text margin="0px">{label}</Text>}
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
      <div>
        {label && <Text>{label}</Text>}
        <InputBox type={type} placeholder={placeholder} onChange={_onChange} />
      </div>
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
  is_submit: false,
  _onChange: () => {},
  onsubmit: () => {},
};

const TextareaBox = styled.textarea`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

const InputBox = styled.input`
  border: 1px solid #212121;
  width: ${props => props.width};
  height: ${props => props.height};
  padding: 12px 4px;
  box-sizing: border-box;
  ${props => props.left && `float: left;`}
`;

export default Input;
