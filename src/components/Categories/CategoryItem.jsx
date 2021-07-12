import styled from "styled-components";
const CategoryItem = ({ image, title, ...props }) => {
  return (
    <Container>
      <img src={image} alt="" />
      {title ? <h1>{title}</h1> : null}
    </Container>
  );
};

export default CategoryItem;

const Container = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    &:hover {
      transform: scale(1.1);
    }
    transition: transform 0.7s;
  }
  h1 {
    position: absolute;
    width: auto;
    background-color: ${(p) => p.theme.secondaryBackgroundColor};
    box-shadow: 5px 1px 10px -2px rgb(0 0 0 / 40%);
    bottom: 20px;
    left: 0px;
    top: auto;
    right: auto;
    transform-origin: bottom left;
    text-align: left;
    font-size: 22px;
    color: #fff;
    font-weight: 500;
    z-index: 1;
    padding: 5px 20px;
    font-family: ${(p) => p.theme.primaryfontFamily};
    text-align: center;
  }
`;
