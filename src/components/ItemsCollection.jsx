import styled from "styled-components";
import Item from "./Item";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import {
  selectFilteredCollections,
  selectFilteredByOther,
} from "../redux/features/itemSlice";
import Spinner from "./base/Spinner";

const ItemsCollection = () => {
  const items = useSelector(selectFilteredByOther);

  return (
    <Container>
      {items ? (
        items.map((item) => <Item item={item} key={item.id} />)
      ) : (
        <Spinner />
      )}
    </Container>
  );
};
export default ItemsCollection;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 350px;
  width: 75%;
  margin: 0 3rem; ;
`;
