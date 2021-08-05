import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  addCartItem,
  removeCartItem,
} from "../redux/features/cartSlice";

import DefaultPageContainer from "../components/base/DefaultPageContainer";
import Container from "../components/base/Container";
import Counter from "../components/base/Counter";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const handleDecrement = (item) => {
    dispatch(removeCartItem({ itemToRemove: item }));
  };
  const handleIncrement = (quantity, available, item) => {
    if (quantity < available) {
      dispatch(addCartItem({ addedItem: item, quantity: 1 }));
    }
  };

  const itemTotal = (quantity, price) => {
    let value = (quantity * price).toFixed(2);

    return value;
  };

  return (
    <DefaultPageContainer>
      <Container product checkout>
        <GridHeadingContainer>
          <GridHeading product>Product</GridHeading>
          <GridHeading>Quantity</GridHeading>
          <GridHeading>Item Price</GridHeading>
          <GridHeading>Subtotal</GridHeading>
        </GridHeadingContainer>

        {cartItems.map((cartItem) => (
          <GridItemsContainer key={cartItem.id}>
            <GridContent product>
              <GridImage src={cartItem.image} />
              <Text product>{cartItem.name}</Text>
            </GridContent>
            <GridContent>
              <Counter
                small
                count={cartItem.quantity}
                handleIncrement={() =>
                  handleIncrement(
                    cartItem.quantity,
                    cartItem.available,
                    cartItem
                  )
                }
                handleDecrement={() => handleDecrement(cartItem)}
              />
            </GridContent>
            <GridContent>
              <Text>${cartItem.price}</Text>
            </GridContent>
            <GridContent>
              <Text>${itemTotal(cartItem.price, cartItem.quantity)}</Text>
            </GridContent>
          </GridItemsContainer>
        ))}
        <Text>Hello</Text>
      </Container>
    </DefaultPageContainer>
  );
};

export default CheckoutPage;

const GridItemsContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 2fr) 1fr 1fr 1fr;
  grid-template-rows: 15rem;
  margin-bottom: 1rem;
  padding: 1rem 0;
  overflow: hidden;
  border-bottom: 1px solid lightgrey;
`;

const GridHeadingContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  grid-template-rows: 2rem;
`;

const GridHeading = styled.div`
  font-size: 2.2rem;
  display: flex;
  justify-content: ${(p) => (p.product ? "flex-start" : "center")};
  align-items: center;
`;

const GridContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(p) => (p.product ? "flex-start" : "center")};
  &:nth-child(1) {
    padding-right: 1.5rem;
  }
`;

const GridImage = styled.img`
  object-fit: cover;
  max-height: 100%;
  max-width: 50%;
`;

const Text = styled.div`
  font-size: 1.8rem;
  padding-left: ${(p) => (p.product ? "2rem" : "0")};
`;
