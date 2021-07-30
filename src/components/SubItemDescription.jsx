import styled from "styled-components";

const SubItemDescription = ({ largeDescription }) => {
  console.log(largeDescription);
  return (
    <Container>
      <Heading>Product Description</Heading>
      <Content>{largeDescription}</Content>
    </Container>
  );
};

export default SubItemDescription;

const Container = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #fff;
  display: flex;
  flex-direction: column;

  align-items: center;
`;

const Heading = styled.div`
  margin: 5rem 5rem;
  font-size: 2rem;
  width: 90%;
  padding-bottom: 1rem;
  border-bottom: 1px solid;
  justify-self: flex-start;
  align-self: center;
`;

const Content = styled.div`
  width: 80%;
  margin-bottom: 5rem;
  font-size: 1rem;
`;
