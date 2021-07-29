import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectItem } from "../redux/features/itemSlice";
import Header from "../components/Header";
import ItemDescription from "../components/ItemDescription";
import SubItemDescription from "../components/SubItemDescription";
import Container from "../components/base/Container";
import Footer from "../components/Footer";

const ItemPage = () => {
  const item = useSelector(selectItem);

  console.log(item);

  return (
    <>
      <Header />
      <ItemDescription item={item} />
      <Container>
        <SubItemDescription item={item.description} />
        <Footer />
      </Container>
    </>
  );
};
export default ItemPage;
