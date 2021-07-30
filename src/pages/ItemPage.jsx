import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectItem } from "../redux/features/itemSlice";
import Header from "../components/Header";
import ItemDescription from "../components/ItemDescription";
import Container from "../components/base/Container";
import Footer from "../components/Footer";

const ItemPage = () => {
  const item = useSelector(selectItem);
  console.log(item);
  if (item) {
    return (
      <>
        <Header />
        <ItemDescription item={item} />
        <Container>
          <Footer />
        </Container>
      </>
    );
  } else {
    return <h1>Product Does Not Exist</h1>;
  }
};
export default ItemPage;
