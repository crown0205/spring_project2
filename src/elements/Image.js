import styled from "styled-components";

const Image = props => {
  const { shape, src, size } = props;
  const styles = {
    src,
    size,
  };

  if (shape === "circle") {
    return <CircleImage {...styles}></CircleImage>;
  }
  if (shape === "rectangle") {
    return (
      <RectangleOutter>
        <RectangleInner {...styles}></RectangleInner>
      </RectangleOutter>
    );
  }
};

Image.defaultProps = {
  shape: "circle", //기본 모양 circle
  src: "https://s3.ap-northeast-2.amazonaws.com/yk0825.shop/0325.jpg",
  size: 36,
};

const RectangleOutter = styled.div`
  width: 50%;
  min-width: 250px;
  min-height: 250px;
`;
const RectangleInner = styled.div`
  position: relative;
  padding-top: 50%;
  overflow: hidden;

  background-image: url("${props => props.src}");
  background-size: cover;
`;
const CircleImage = styled.div`
  --size: 36px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background-image: url("${props => props.src}");
  margin: 4px;
`;

export default Image;
