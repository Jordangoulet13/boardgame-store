import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartPriceTotal,
  selectCartPointsTotal,
  addCartItem,
  removeCartItem,
} from "../redux/features/cartSlice";

import DefaultPageContainer from "../components/base/DefaultPageContainer";
import Container from "../components/base/Container";
import Counter from "../components/base/Counter";
import Button from "../components/base/Button";
import StripeCheckoutButton from "../components/base/StripeButton";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPriceFull = useSelector(selectCartPriceTotal);
  const totalPoints = useSelector(selectCartPointsTotal);
  const totalPrice = totalPriceFull.toFixed(2);
  const totalTax = (totalPrice * 0.05).toFixed(2);
  const totalWithTax = (+totalPrice + +totalTax).toFixed(2);

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
          <GridHeading>Price</GridHeading>
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
      </Container>
      <SubTotalContainer product>
        <Text>Want to earn points on every order?</Text>
        <ButtonContainer>
          <StyledButton>Learn More</StyledButton>
          <StyledButton>MyAccount / Register</StyledButton>
        </ButtonContainer>
        <TotalContainer border>
          <Text bold>Subtotal:</Text>
          <Text bold>${totalPrice}</Text>
          <Text>GST : 5%</Text>
          <Text>${totalTax}</Text>
        </TotalContainer>
        <TotalContainer>
          <Text large>Total incl. tax:</Text>
          <Text large>${totalWithTax}</Text>
          <Text>Points earned:</Text>
          <Text>{totalPoints}</Text>
        </TotalContainer>
        <StripeCheckoutButton price={totalWithTax} />
      </SubTotalContainer>
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
  @media (max-width: 900px) {
    padding: 0;
  }
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
  @media (max-width: 900px) {
    font-size: 1.9rem;
  }
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
  font-size: ${(p) => (p.large ? "2.1rem" : "1.8rem")};
  padding-left: ${(p) => (p.product ? "1.5rem" : "0")};
  font-weight: ${(p) => (p.bold ? "800" : "0")};
  @media (max-width: 700px) {
    font-size: 1.5rem;
  }
`;

const SubTotalContainer = styled(Container)`
  width: 50rem;
  height: 43rem;
  padding: 2rem;
  align-self: flex-end;
  display: flex;
  @media (max-width: 700px) {
    width: 95%;
    justify-self: center;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  height: auto;
  justify-content: space-around;
  padding: 1.5rem;
`;

const StyledButton = styled(Button)`
  background-color: grey;

  width: fit-content;
  padding: 1.3rem;
  color: #fff;
  font-size: 1.5rem;
`;

const TotalContainer = styled.div`
  display: grid;
  grid-template-columns: 15rem 15rem;
  grid-template-rows: 5rem 5rem;
  justify-content: flex-end;
  text-align: center;
  border-bottom: ${(p) => (p.border ? "1px solid grey" : "none")};
  margin-top: 2rem;
`;

const CheckoutButton = styled(Button)`
  align-self: flex-end;
  font-size: 1.5rem;
  width: 15rem;
  height: 20rem;
  color: #fff;
  font-weight: 900;
`;
