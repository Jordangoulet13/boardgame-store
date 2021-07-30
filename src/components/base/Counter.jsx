import styled from "styled-components";

const Counter = ({ handleDecrement, handleIncrement, count }) => {
  return (
    <Container>
      <Button onClick={() => handleDecrement()}>-</Button>
      <ValueContainer>{count}</ValueContainer>
      <Button onClick={() => handleIncrement()}>+</Button>
    </Container>
  );
};
export default Counter;

const Container = styled.div`
  height: 100%;
  width: 15rem;
  display: flex;
  border: 2px solid lightgrey;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.div`
  height: 100%;
  width: 5rem;
  &:hover {
    background-color: grey;
    cursor: pointer;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

const ValueContainer = styled.div`
  font-size: 2rem;
`;
