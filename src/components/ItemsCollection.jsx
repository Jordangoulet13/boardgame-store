import styled from "styled-components";
import Item from "./Item";

import { useSelector } from "react-redux";
import { selectCollections } from "../redux/features/itemSlice";

const ItemsCollection = () => {
  const items = useSelector(selectCollections);
  return (
    <Container>
      {items && items.map((item) => <Item item={item} key={item.id} />)}
    </Container>
  );
};
export default ItemsCollection;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 35rem;
  width: 75%;
  margin: 0 3rem; ;
`;
