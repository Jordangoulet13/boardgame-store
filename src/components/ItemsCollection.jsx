import styled from "styled-components";
import Item from "./Item";
import { useSelector } from "react-redux";

import { selectFilteredByOther } from "../redux/features/itemSlice";
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
  grid-auto-rows: 37rem;
  width: 100%;
  margin: 0 3rem;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    width: 100%;
    margin: 0;
    grid-auto-rows: 37rem;
  }
`;
