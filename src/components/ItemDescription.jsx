import styled from "styled-components";
import Counter from "./base/Counter";
import Button from "./base/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCartItem } from "../redux/features/cartSlice";

const ItemDescription = ({ item }) => {
  const dispatch = useDispatch();

  const {
    name,
    EAN,
    available,
    brand,
    category,
    earns,
    image,
    price,
    sale,
    saleprice,
    description,
  } = item;

  let [count, setCount] = useState(0);

  const handleDecrement = () => {
    if (count > 0) {
      setCount(--count);
    }
  };
  const handleIncrement = () => {
    if (count < available) {
      setCount(++count);
    }
  };
  const handleClick = (item, count) => {
    dispatch(addCartItem({ addedItem: item, quantity: count }));
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
          <StyledButton categories onClick={() => handleClick(item)}>
            ADD TO CART
          </StyledButton>
        </ButtonContainer>
      </DetailsContainer>
    </Container>
  );
};

export default ItemDescription;

const Container = styled.div`
  height: 120vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  padding-top: 200px;
  background-color: #fff;
  margin-bottom: 2rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled.div`
  position: relative;
  width: 55%;
  height: 70%;
  background-image: url(${(p) => p.img});
  background-repeat: no-repeat;
  background-position: center;
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
`;

const DetailsHeader = styled.h1`
  margin: 0;
  font-size: 4rem;
`;

const DetailsDescription = styled.p`
  display: inline-block;
  width: 65%;
  font-size: 1.5rem;
  color: grey;
  font-family: ${(p) => p.theme.tertiaryfontFamily};
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
`;

const StyledButton = styled(Button)`
  width: 20rem;
  font-size: 1.5rem;
`;
