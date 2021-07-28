import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectItem } from "../redux/features/itemSlice";

const ItemPage = () => {
  const item = useSelector(selectItem);

  console.log(item);

  return <div>Hello Item page {item.name}</div>;
};
export default ItemPage;
