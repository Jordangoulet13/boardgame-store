import styled from "styled-components";
import { useParams, withRouter } from "react-router-dom";

import Header from "../components/Header";
import Container from "../components/base/Container";
import SearchBar from "../components/SearchBar";
import CategoryItem from "../components/Categories/CategoryItem";
import Footer from "../components/Footer";

const ProductPage = ({ match, location, history, ...props }) => {
  let { category } = useParams();
  return (
    <>
      <Header />
      <Title>
        <h1>{category}</h1>
      </Title>
      <Container product>
        <SearchBar />
      </Container>
    </>
  );
};

export default withRouter(ProductPage);

const Title = styled.div`
  margin: 2rem 8rem;

  height: 40vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid lightgrey;
  text-align: center;

  h1 {
    font-size: 4rem;
    margin: 0;
  }
  span {
    margin: 1rem;
  }
`;
