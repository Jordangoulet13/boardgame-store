import styled from "styled-components";
import { useParams, withRouter } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  filterByCategory,
  filterByBrand,
  filterBySale,
  filterByPreorder,
  filterBySearch,
} from "../redux/features/itemSlice";

import Header from "../components/Header";
import Container from "../components/base/Container";
import SearchBar from "../components/SearchBar";
import SortBar from "../components/SortBar";
import ItemsCollection from "../components/ItemsCollection";

import Footer from "../components/Footer";

const ProductPage = ({ ...props }) => {
  const dispatch = useDispatch();
  let { category } = useParams();

  useEffect(() => {
    console.log(category);
    let key = "boardgames";
    key = category.toLowerCase().replace(/\s/g, "");
    if (category.includes("Search")) {
      key = category.substring(9);

      category = "Search";
    }
    if (category) {
      switch (category) {
        case "All Categories":
          key = "allCategories";
          dispatch(filterByCategory({ category: key }));
          break;
        case "The Asmondee Summer Sale is on!":
          key = "Asmondee";
          dispatch(filterByBrand({ brand: key }));
          break;
        case "Preorders":
          dispatch(filterByPreorder());
          break;
        case "Sale":
          dispatch(filterBySale());
          break;
        case "Search":
          console.log(key);
          dispatch(filterBySearch({ search: key }));
          break;
        default:
          dispatch(filterByCategory({ category: key }));
      }
    }
  });

  return (
    <>
      <Header />
      <Title>
        <h1>{category}</h1>
      </Title>
      <Container product>
        <SearchBar />
        <SubContainer>
          <SortBar />
          <ItemsCollection />
        </SubContainer>
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
};

export default withRouter(ProductPage);

const Title = styled.div`
  margin: 2rem 7rem;

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
const SubContainer = styled.div`
  display: flex;
`;
