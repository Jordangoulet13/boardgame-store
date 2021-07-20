import styled from "styled-components";

const Item = ({ item }) => {
  return <Container>{item.name}</Container>;
};

export default Item;

const Container = styled.div`
  background-color: blue;
  width: 10rem;
  height: 10rem;
`;
