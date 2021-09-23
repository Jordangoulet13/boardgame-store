import styled from "styled-components";
import Counter from "./base/Counter";
import Button from "./base/Button";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, selectCartItems } from "../redux/features/cartSlice";

const ItemDescription = ({ item }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const { name, EAN, available, brand, earns, image, price, description } =
    item;

  let [count, setCount] = useState(0);
  let [quantity, setQuantity] = useState(available);

  useEffect(() => {
    const getQuantity = () => {
      let found = cartItems.find((cartItem) => cartItem.id === item.id);
      if (found) {
        try {
          const data = found.quantity;
          const total = available - data;
          return setQuantity(total);
        } catch (error) {
          return error.message;
        }
      }
    };
    getQuantity();
  });

  const handleDecrement = () => {
    if (count > 0) {
      setCount(--count);
    }
  };
  const handleIncrement = () => {
    if (count < available && count < quantity) {
      setCount(++count);
    }
  };
  const handleClick = (item, count) => {
    if (count > 0) {
      dispatch(addCartItem({ addedItem: item, quantity: count }));
      setCount(0);
    }
  };

  return (
    <Container>
      <ImageContainer>
        <StyledImage img={image}>
          {item.available ? null : <Available>Out of stock</Available>}
          {item.sale ? <Available sale>-{item.sale}%</Available> : null}
        </StyledImage>
        <ImagePreviewContainer>
          <ImagePreview src={image} />
        </ImagePreviewContainer>
      </ImageContainer>
      <DetailsContainer>
        <DetailsHeader>{name}</DetailsHeader>
        <DetailsDescription>{description}</DetailsDescription>
        <DetailsPrice>${price} CAD</DetailsPrice>
        <OtherDetailsContainer>
          <DetailsOtherTitle>Brand:</DetailsOtherTitle>
          <DetailsOther>{brand}</DetailsOther>
          <DetailsOtherTitle>EAN:</DetailsOtherTitle>
          <DetailsOther>{EAN}</DetailsOther>
          <DetailsOtherTitle>Earns:</DetailsOtherTitle>
          <DetailsOther>{earns}</DetailsOther>
          <DetailsOtherTitle>Available:</DetailsOtherTitle>
          <DetailsOther> {available} copies</DetailsOther>
        </OtherDetailsContainer>{" "}
        <ButtonContainer>
          <Counter
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            count={count}
          />
          <StyledButton categories onClick={() => handleClick(item, count)}>
            ADD TO CART
          </StyledButton>
        </ButtonContainer>
      </DetailsContainer>
    </Container>
  );
};

export default ItemDescription;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  padding-top: 200px;
  background-color: #fff;
  margin-bottom: 2rem;
  height: 105vh;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (max-width: 900px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding-top: 10rem;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled.div`
  position: relative;
  width: 40rem;
  height: 40rem;
  background-image: url(${(p) => p.img});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

const ImagePreviewContainer = styled.div`
  width: 55%;
  height: 10rem;
  display: flex;
`;

const ImagePreview = styled.img`
  height: 100%;
  width: 10rem;
  margin-top: 2rem;
`;
const Available = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 40%;
  height: 10%;
  background-color: ${(p) => (p.sale ? "#4DC3C5" : "#db4e44")};
  color: #fff;

  font-size: 1.3rem;
  font-weight: 600;
  font-family: ${(p) => p.theme.secondaryfontFamily};
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 900px) {
    margin: 5rem;
  }
`;

const DetailsHeader = styled.h1`
  margin: 0;
  font-size: 4rem;
  @media (max-width: 900px) {
    margin: 0 5px;
  }
`;

const DetailsDescription = styled.p`
  display: inline-block;
  width: 65%;
  font-size: 1.5rem;
  color: grey;
  font-family: ${(p) => p.theme.tertiaryfontFamily};
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const DetailsPrice = styled.p`
  font-size: 3rem;
  font-family: ${(p) => p.theme.tertiaryfontFamily};
  margin: 2rem 0;
`;

const DetailsOtherTitle = styled.p``;

const DetailsOther = styled.p``;

const OtherDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 2.5rem;
  font-size: 1.4rem;
  font-family: ${(p) => p.theme.tertiaryfontFamily};
  padding: 0;
  margin: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 5rem;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const StyledButton = styled(Button)`
  width: 20rem;
  font-size: 1.5rem;
`;
