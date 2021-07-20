import styled from "styled-components";
import { useParams, withRouter } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import db from "../firebase/firebase.utils";
import { setItems } from "../redux/features/itemSlice";

import Header from "../components/Header";
import Container from "../components/base/Container";
import SearchBar from "../components/SearchBar";
import CategoryItem from "../components/Categories/CategoryItem";
import SortBar from "../components/SortBar";
import ItemsCollection from "../components/ItemsCollection";

import Footer from "../components/Footer";

const ProductPage = ({ ...props }) => {
  const dispatch = useDispatch();
  let items = [];
  let { category } = useParams();
  let key = category.toLowerCase().replace(/\s/g, "");

  useEffect(() => {
    db.collection("Inventory").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(category.toLowerCase());
        if (doc.data().category === key) {
          items = [...items, { id: doc.id, ...doc.data() }];
        }
      });

      dispatch(
        setItems({
          [key]: items,
        })
      );
    });
  }, []);

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
          <ItemsCollection category={key} />
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
const SubContainer = styled.div`
  display: flex;
`;
