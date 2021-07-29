import styled from "styled-components";

const ItemDescription = ({ item }) => {
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
  } = item;

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

const DetailsDescription = styled.p``;

const DetailsPrice = styled.p``;

const DetailsOther = styled.p``;
