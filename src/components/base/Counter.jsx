import styled from "styled-components";

const Counter = ({ handleDecrement, handleIncrement, count, ...props }) => {
  return (
    <Container {...props}>
      <Button {...props} onClick={() => handleDecrement()}>
        -
      </Button>
      <ValueContainer>{count}</ValueContainer>
      <Button {...props} onClick={() => handleIncrement()}>
        +
      </Button>
    </Container>
  );
};
export default Counter;

const Container = styled.div`
  height: ${(p) => (p.small ? "20%" : "100%")};
  width: ${(p) => (p.small ? "10rem" : "15rem")};
  display: flex;
  border: 2px solid lightgrey;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.div`
  height: 100%;
  width: ${(p) => (p.small ? "3rem" : "5rem")};
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
