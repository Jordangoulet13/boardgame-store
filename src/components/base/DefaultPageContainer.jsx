import styled from "styled-components";
import { useLocation, useParams, withRouter } from "react-router-dom";

import Header from "../Header";
import Container from "./Container";

import Footer from "../Footer";

const DefaultPageContainer = ({ children, ...props }) => {
  const { pathname } = useLocation();
  const { category } = useParams();
  const location = pathname.slice(1);

  return (
    <>
      <Header />
      <Title>
        <h1>{category ? category : location}</h1>
      </Title>
      <StyledContainer>{children}</StyledContainer>
      <Container>
        <Footer />
      </Container>
    </>
  );
};

export default withRouter(DefaultPageContainer);

const Title = styled.div`
  margin: 2rem 7rem;

  height: 20rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid lightgrey;
  text-align: center;
  @media (max-width: 900px) {
    height: 20rem;
  }
  h1 {
    font-size: 4rem;
    margin: 0;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
