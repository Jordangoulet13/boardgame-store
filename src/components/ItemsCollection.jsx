import styled from "styled-components";
import Item from "./Item";

import { useSelector } from "react-redux";
import { getSelector } from "../redux/features/itemSlice";

const ItemsCollection = ({ category }) => {
  const selector = getSelector(category);
  console.log(selector);
  const items = useSelector(selector);
  console.log(items, ":🛢️");
  return (
    <Container>{items && items.map((item) => <Item item={item} />)}</Container>
  );
};
export default ItemsCollection;

const Container = styled.div`
  width: 75%;
`;
